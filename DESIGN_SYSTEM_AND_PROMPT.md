# LK Clinic - Design System & Recreation Prompt

## 📋 Prompt para Recriar o Projeto

```
Crie uma landing page estilo "link in bio" para uma clínica odontológica com as seguintes características:

**Estilo Visual:**
- Design inspirado no iOS/Apple com glassmorphism
- Cor primária: verde musgo escuro (HSL: 156, 18%, 23%)
- Tipografia: SF Pro (system fonts Apple)
- Efeitos: blur, sombras suaves, animações fluidas
- Fundo: imagem das dentistas com overlay gradiente escuro

**Estrutura - Página Principal (/):**
- Fundo com imagem de background (diferente mobile/desktop)
- Gradiente escuro na parte inferior
- Header com logo no topo
- Botões de link (WhatsApp, Instagram) com ícones personalizados
- Link interno para página /site
- Widget de mapa do Google
- Footer minimalista

**Estrutura - Página Institucional (/site):**
- Fundo fixo com parallax
- Botão "Voltar" no topo
- Logo centralizada
- Seção "Sobre Nós" com card glassmorphism
- Tags de especialidades
- Cards de resultados (500+ pacientes, 10+ anos, 98% satisfação)
- Carrossel horizontal de depoimentos
- Botão CTA "Agende Sua Consulta" com efeito shimmer
- FAQ accordion
- Footer

**Animações:**
- Framer Motion para todas as animações
- fadeInUp, scaleIn, staggerContainer
- Efeito shimmer no botão CTA
- Scroll suave no carrossel
- Hover effects suaves

**Tecnologias:**
- React + Vite + TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React (ícones)
- shadcn/ui components
```

---

## 🎨 Design System

### Cores (HSL)

```css
/* Light Mode */
--background: 0 0% 100%;           /* Branco puro */
--foreground: 156 18% 23%;         /* Verde musgo escuro */

--card: 0 0% 100%;
--card-foreground: 156 18% 23%;

--popover: 0 0% 100%;
--popover-foreground: 156 18% 23%;

--primary: 156 18% 23%;            /* Verde musgo - cor principal */
--primary-foreground: 0 0% 100%;   /* Branco */
--primary-dark: 149 27% 15%;       /* Verde mais escuro */

--secondary: 156 10% 96%;          /* Cinza esverdeado claro */
--secondary-foreground: 156 18% 23%;

--muted: 156 10% 96%;
--muted-foreground: 156 10% 45%;

--accent: 156 18% 23%;
--accent-foreground: 0 0% 100%;

--destructive: 0 84.2% 60.2%;
--destructive-foreground: 0 0% 100%;

--border: 156 10% 90%;
--input: 156 10% 90%;
--ring: 156 18% 23%;

--radius: 1rem;

/* Sombras Customizadas */
--shadow-card: 0 2px 8px -2px hsla(156, 18%, 23%, 0.08), 
               0 4px 16px -4px hsla(156, 18%, 23%, 0.12);
--shadow-card-hover: 0 4px 12px -2px hsla(156, 18%, 23%, 0.12), 
                     0 8px 24px -4px hsla(156, 18%, 23%, 0.16);
--shadow-button-press: 0 1px 4px -1px hsla(156, 18%, 23%, 0.1);

/* Efeito Glass */
--glass-bg: 0 0% 100% / 0.15;
--glass-border: 0 0% 100% / 0.25;
--glass-shadow: 0 8px 32px 0 hsla(156, 18%, 23%, 0.15);
```

### Dark Mode

```css
--background: 156 18% 8%;
--foreground: 0 0% 98%;

--card: 156 18% 10%;
--card-foreground: 0 0% 98%;

--primary: 156 18% 90%;
--primary-foreground: 156 18% 10%;
--primary-dark: 156 18% 80%;

--secondary: 156 18% 15%;
--secondary-foreground: 0 0% 98%;

--muted: 156 18% 15%;
--muted-foreground: 156 10% 60%;

--accent: 156 18% 15%;
--accent-foreground: 0 0% 98%;

--border: 156 18% 18%;
--input: 156 18% 18%;
--ring: 156 18% 70%;
```

---

## 🔤 Tipografia

```javascript
fontFamily: {
  sans: [
    "-apple-system",
    "BlinkMacSystemFont",
    "SF Pro Display",
    "SF Pro Text",
    "Helvetica Neue",
    "Arial",
    "sans-serif",
  ],
}
```

---

## 🎭 Animações CSS

```css
/* Fade Up */
@keyframes fade-up {
  0% { opacity: 0; transform: translateY(20px); }
  100% { opacity: 1; transform: translateY(0); }
}

/* Fade In */
@keyframes fade-in {
  0% { opacity: 0; }
  100% { opacity: 1; }
}

/* Scale In */
@keyframes scale-in {
  0% { opacity: 0; transform: scale(0.95); }
  100% { opacity: 1; transform: scale(1); }
}

/* Press Effect */
@keyframes press {
  0% { transform: scale(1); }
  50% { transform: scale(0.97); }
  100% { transform: scale(1); }
}

/* Shimmer (para botão CTA) */
@keyframes shimmer {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}

/* Scroll Left (carrossel infinito) */
@keyframes scroll-left {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
```

### Classes de Animação

```css
.animate-fade-up { animation: fade-up 0.5s cubic-bezier(0.22, 1, 0.36, 1) forwards; }
.animate-fade-in { animation: fade-in 0.4s ease-out forwards; }
.animate-scale-in { animation: scale-in 0.3s cubic-bezier(0.22, 1, 0.36, 1) forwards; }
.animate-press { animation: press 0.15s ease-out; }
.animate-scroll-left { animation: scroll-left 20s linear infinite; }

/* Delays */
.delay-150 { animation-delay: 150ms; }
.delay-200 { animation-delay: 200ms; }
.delay-250 { animation-delay: 250ms; }
.delay-300 { animation-delay: 300ms; }
.delay-350 { animation-delay: 350ms; }
.delay-400 { animation-delay: 400ms; }
.delay-450 { animation-delay: 450ms; }
```

---

## 🪟 Glassmorphism

```css
.glass-button {
  @apply transition-all duration-200 ease-out;
  background: hsl(var(--glass-bg));
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid hsl(var(--glass-border));
  box-shadow: var(--glass-shadow);
}

.glass-button:hover {
  background: hsl(0 0% 100% / 0.22);
  border-color: hsl(0 0% 100% / 0.35);
  transform: translateY(-1px);
}

.glass-button:active {
  transform: scale(0.97);
  background: hsl(0 0% 100% / 0.12);
}
```

---

## 📱 iOS-Style Button

```css
.ios-button {
  @apply transition-all duration-200 ease-out;
  box-shadow: var(--shadow-card);
}

.ios-button:hover {
  box-shadow: var(--shadow-card-hover);
  transform: translateY(-1px);
}

.ios-button:active {
  transform: scale(0.97);
  box-shadow: var(--shadow-button-press);
}
```

---

## ✨ Shimmer Effect (Botão CTA)

```css
.shimmer-button {
  position: relative;
  overflow: hidden;
}

.shimmer-button::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 50%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent 0%,
    hsla(0, 0%, 100%, 0.12) 50%,
    transparent 100%
  );
  transform: translateX(-150%);
  animation: shimmer 4s cubic-bezier(0.4, 0, 0.2, 1) infinite;
  animation-delay: 1s;
}
```

---

## 🎬 Framer Motion Variants

```typescript
// Fade In Up
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

// Stagger Container (para animar filhos em sequência)
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

// Scale In
const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 }
};
```

---

## 📐 Layout & Spacing

```javascript
container: {
  center: true,
  padding: "1.5rem",
  screens: {
    sm: "640px",
    md: "768px",
    lg: "1024px",
  },
}

borderRadius: {
  lg: "var(--radius)",        // 1rem
  md: "calc(var(--radius) - 4px)",
  sm: "calc(var(--radius) - 8px)",
  xl: "calc(var(--radius) + 4px)",
  "2xl": "calc(var(--radius) + 8px)",
}
```

---

## 🖼️ Background Pattern

### Página Principal (/)
```tsx
{/* Mobile */}
<div 
  className="absolute inset-0 bg-cover bg-top bg-no-repeat sm:hidden"
  style={{ backgroundImage: `url(${backgroundMobile})` }}
/>

{/* Desktop */}
<div 
  className="absolute inset-0 bg-cover bg-top bg-no-repeat hidden sm:block"
  style={{ backgroundImage: `url(${backgroundDesktop})` }}
/>

{/* Gradient Overlay */}
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent via-30% to-[hsl(156,18%,15%)]" />

{/* Dark overlay */}
<div className="absolute inset-0 bg-black/20" />
```

### Página /site
```tsx
{/* Fixed background com parallax */}
<motion.div
  initial={{ scale: 1.1, opacity: 0 }}
  animate={{ scale: 1, opacity: 1 }}
  transition={{ duration: 1.2, ease: "easeOut" }}
  className="fixed inset-0 bg-cover bg-center bg-no-repeat"
  style={{ backgroundImage: `url(${backgroundImage})` }}
/>

{/* Gradient mais escuro */}
<div className="fixed inset-0 bg-gradient-to-b from-black/40 via-black/50 to-[hsl(156,18%,12%)]" />
```

---

## 📦 Dependências Necessárias

```json
{
  "dependencies": {
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-router-dom": "^6.30.1",
    "framer-motion": "^12.23.26",
    "lucide-react": "^0.462.0",
    "tailwind-merge": "^2.6.0",
    "tailwindcss-animate": "^1.0.7",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1"
  }
}
```

---

## 🗂️ Estrutura de Arquivos

```
src/
├── assets/
│   ├── dentistas-background.jpg    (fundo desktop /site)
│   ├── dentistas-desktop.png       (fundo desktop /)
│   ├── dentistas-mobile.png        (fundo mobile /site)
│   ├── dentistas-mobile-v2.png     (fundo mobile /)
│   ├── instagram-icon.png
│   ├── whatsapp-icon.png
│   ├── lk-clinic-logo.png
│   └── logo-lk.png
├── components/
│   ├── BlurIn.tsx                  (texto com blur animation)
│   ├── FAQItem.tsx                 (accordion item)
│   ├── Footer.tsx
│   ├── Header.tsx
│   ├── LinkButton.tsx              (botão glassmorphism)
│   ├── MapWidget.tsx               (iframe Google Maps)
│   ├── NavLink.tsx
│   ├── ResultCard.tsx              (card de resultados)
│   ├── TestimonialCard.tsx         (card de depoimento)
│   └── ui/                         (shadcn components)
├── pages/
│   ├── Index.tsx                   (página principal)
│   ├── Site.tsx                    (página institucional)
│   └── NotFound.tsx
├── hooks/
├── lib/
│   └── utils.ts
├── index.css                       (design tokens + animações)
├── App.tsx
└── main.tsx
```

---

## 🎯 Características Principais

1. **Mobile-first**: Toda a UI é otimizada para mobile primeiro
2. **Responsivo**: Breakpoints em sm (640px), md (768px), lg (1024px)
3. **Glassmorphism**: Efeito de vidro fosco nos botões e cards
4. **Animações suaves**: Todas animações usam cubic-bezier para fluidez
5. **Cor verde musgo**: Paleta baseada em HSL(156, 18%, 23%)
6. **Tipografia Apple**: System fonts para look nativo iOS
7. **Sombras sutis**: Sombras com tom de verde para integração
8. **Scroll horizontal**: Carrossel de depoimentos com snap
