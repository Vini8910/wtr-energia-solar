# SEO e Performance

## 1. Estratégia de SEO

### 1.1 Meta Tags Essenciais

```html
<!-- Meta Tags Básicas -->
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="WTR Energia Solar - Soluções em energia solar para residencial, comercial e industrial. Economize até 95% na sua conta de energia.">
<meta name="keywords" content="energia solar, placas fotovoltaicas, financiamento solar, sustentabilidade, WTR Energia Solar">
<meta name="author" content="WTR Energia Solar">

<!-- Open Graph -->
<meta property="og:title" content="WTR Energia Solar - Energia Limpa e Sustentável">
<meta property="og:description" content="Reduza sua conta de energia em até 95% com nossas soluções em energia solar">
<meta property="og:image" content="/assets/images/og-image.jpg">
<meta property="og:url" content="https://www.wtrenergiasolar.com.br">
<meta property="og:type" content="website">
<meta property="og:locale" content="pt_BR">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="WTR Energia Solar">
<meta name="twitter:description" content="Energia solar para um futuro sustentável">
<meta name="twitter:image" content="/assets/images/twitter-card.jpg">
```

### 1.2 Schema.org

```html
<!-- Organization Schema -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "WTR Energia Solar",
  "url": "https://www.wtrenergiasolar.com.br",
  "logo": "https://www.wtrenergiasolar.com.br/assets/images/logo.png",
  "description": "Soluções em energia solar para residencial, comercial e industrial",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Cidade",
    "addressState": "Estado",
    "addressCountry": "BR"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+55-11-99999-9999",
    "contactType": "customer service"
  }
}
</script>

<!-- LocalBusiness Schema -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "WTR Energia Solar",
  "image": "/assets/images/logo.png",
  "@id": "",
  "url": "https://www.wtrenergiasolar.com.br",
  "telephone": "+55-11-99999-9999",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Endereço",
    "addressLocality": "Cidade",
    "postalCode": "00000-000",
    "addressState": "SP",
    "addressCountry": "BR"
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday"
    ],
    "opens": "08:00",
    "closes": "18:00"
  }
}
</script>
```

## 2. Sitemap

### 2.1 sitemap.xml

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://www.wtrenergiasolar.com.br/</loc>
    <lastmod>2024-01-01</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://www.wtrenergiasolar.com.br/services</loc>
    <lastmod>2024-01-01</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://www.wtrenergiasolar.com.br/about</loc>
    <lastmod>2024-01-01</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://www.wtrenergiasolar.com.br/projects</loc>
    <lastmod>2024-01-01</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://www.wtrenergiasolar.com.br/contact</loc>
    <lastmod>2024-01-01</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
</urlset>
```

### 2.2 robots.txt

```
User-agent: *
Allow: /

Sitemap: https://www.wtrenergiasolar.com.br/sitemap.xml

User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /
```

## 3. Performance

### 3.1 Métricas Alvo

| Métrica | Meta |
|---------|------|
| LCP (Largest Contentful Paint) | < 2.5s |
| FID (First Input Delay) | < 100ms |
| CLS (Cumulative Layout Shift) | < 0.1 |
| Score Lighthouse | > 90 |
| Tempo de carregamento | < 3s |

### 3.2 Otimizações

#### 3.2.1 Imagens

- Formato WebP para imagens modernas
- Lazy loading com `loading="lazy"`
- Tamanhos responsivos com `srcset`
- Compressão otimizada

```html
<img 
  src="image.webp" 
  srcset="image-480w.webp 480w, image-800w.webp 800w"
  sizes="(max-width: 600px) 480px, 800px"
  loading="lazy"
  alt="Descrição da imagem"
>
```

#### 3.2.2 CSS

- Critical CSS inline no head
- Minificação para produção
- Purge de CSS não utilizado
- Carregamento assíncrono

```html
<link rel="preload" href="main.css" as="style" onload="this.onload=null;this.rel='stylesheet'">
```

#### 3.2.3 JavaScript

- Code splitting
- Lazy loading de componentes
- Minificação
- Cache busting

```html
<script src="main.js" type="module" defer></script>
```

## 4. Cache e CDN

### 4.1 Headers de Cache

```apache
# .htaccess
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType text/css "access plus 1 year"
  ExpiresByType application/javascript "access plus 1 year"
  ExpiresByType image/webp "access plus 1 year"
</IfModule>
```

## 5. PWA (Preparado)

### 5.1 manifest.json

```json
{
  "name": "WTR Energia Solar",
  "short_name": "WTR Solar",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#FFFFFF",
  "theme_color": "#FDB813",
  "icons": [
    {
      "src": "/assets/icons/icon-192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/assets/icons/icon-512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ]
}
```

## 6. Analytics

### 6.1 Google Analytics 4

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 7. Monitoramento

- Google Search Console
- Google Analytics
- Lighthouse CI
- PageSpeed Insights