# Pasta `media/` — as fotos e vídeos do site

Os arquivos em `src/assets/*.asset.json` são **apontadores**: eles guardam só o
endereço do arquivo no armazenamento do Lovable, não a foto ou o vídeo em si.
Por isso, ao abrir o projeto fora do Lovable, essas mídias não aparecem.

Esta pasta `media/` tem os arquivos originais, baixados do site:

| Arquivo | Onde é usado |
| --- | --- |
| `arachno-background-updated.mp4` | vídeo de fundo da página inicial, já com a música do Cupido Bandido embutida (o som sai dele) |
| `arachno-cupido.mp4` | versão anterior do vídeo de fundo, com a mesma música |
| `arachno-logo.webp` | logo dourada (logo da abertura, do topo e do favicon) |
| `arachno-dm.jpg` | fundo da página `/dm` |
| `arachno-paris.jpg` | fundo da página `/site` |
| `arachno-share.jpg` | imagem de compartilhamento (WhatsApp / Instagram / Facebook) |
| `links-dollar.png` | ícone do botão "Links" |
| `money-stacks.png` | ícone anterior do botão "Links" |
| `espancabet-background.png` | fundo anterior da página `/site` |

## Como usar fora do Lovable

1. Copie o arquivo que quiser para `public/` (ex.: `cp media/arachno-dm.jpg public/`).
2. No código, troque a importação do apontador por um caminho direto, por exemplo
   em `src/pages/DM.tsx`:

   ```ts
   // antes
   import dmBackground from "@/assets/arachno-dm.jpg.asset.json";
   // depois
   const dmBackground = "/arachno-dm.jpg";
   ```

3. Para o vídeo de fundo, o mesmo vale em `src/components/AppMedia.tsx`.

Dentro do Lovable nada precisa mudar: os apontadores já funcionam.
