"""Browser regression checks for continuous music and one-page back navigation.
Run: python3 tests/media-navigation.test.py
"""
import asyncio
import unittest
from playwright.async_api import async_playwright

class MusicNavigationTests(unittest.IsolatedAsyncioTestCase):
    async def test_music_continues_and_opening_does_not_repeat(self):
        async with async_playwright() as p:
            browser = await p.chromium.launch(headless=True)
            context = await browser.new_context(viewport={"width": 1427, "height": 1134})
            page = await context.new_page()
            errors = []
            page.on("pageerror", lambda error: errors.append(str(error)))
            async def asset(route):
                path = route.request.url.split("8080")[1]
                response = await context.request.get("https://id-preview--c9d55748-b73b-4a73-998b-a88ea4cecf3c.lovable.app" + path)
                await route.fulfill(response=response)
            await page.route("**/__l5e/assets-v1/**", asset)
            await page.goto("http://localhost:8080")
            await page.wait_for_function('document.querySelector("video").readyState >= 2', timeout=90000)
            await page.wait_for_timeout(1500)
            self.assertEqual(await page.locator('span', has_text='💸').count(), 18)
            await page.screenshot(path='/tmp/browser/continuous-music/opening.png')
            await page.get_by_role("button", name="Entrar no site e ativar música").click()
            await page.get_by_role("link", name="Fique Rico Agora!").wait_for()
            await page.wait_for_timeout(1800)
            await page.evaluate('window.originalVideo = document.querySelector("video"); window.navigationMarker = "same-document"')
            for link, destination in [("Fique Rico Agora!", "/dm"), ("Links", "/site")]:
                before = await page.locator('video').evaluate('(v) => v.currentTime')
                await page.get_by_role("link", name=link, exact=True).click()
                await page.wait_for_url('**' + destination)
                await page.wait_for_timeout(500)
                self.assertTrue(await page.evaluate('document.querySelector("video") === window.originalVideo'))
                self.assertGreater(await page.locator('video').evaluate('(v) => v.currentTime'), before)
                self.assertFalse(await page.locator('video').evaluate('(v) => v.muted || v.paused'))
                await page.get_by_role('button', name='Silenciar', exact=True).click()
                self.assertTrue(await page.locator('video').evaluate('(v) => v.muted'))
                await page.get_by_role('button', name='Ativar som').click()
                await page.get_by_role('button', name='Voltar', exact=True).click()
                await page.wait_for_url('http://localhost:8080/')
                self.assertEqual(await page.get_by_role('button', name='Entrar no site e ativar música').count(), 0)
                self.assertEqual(await page.evaluate('window.navigationMarker'), 'same-document')
                self.assertTrue(await page.evaluate('document.querySelector("video") === window.originalVideo'))
            await page.set_viewport_size({"width":393,"height":852})
            await page.wait_for_timeout(1500)
            await page.screenshot(path='/tmp/browser/continuous-music/returned-mobile.png')
            self.assertEqual(errors, [])
            await browser.close()

if __name__ == '__main__':
    unittest.main()
