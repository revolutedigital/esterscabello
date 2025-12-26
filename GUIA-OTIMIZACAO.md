# Guia de Otimização - Site Ester Scabello

## Status Atual

### Arquivos Minificados Criados
- `css/style.min.css` (32KB - redução de ~27%)
- `css/blog.min.css` (21KB - redução de ~20%)
- `js/main.min.js` (9KB - redução de ~60%)

### Imagens Otimizadas (qualidade 70%)
Arquivos criados com sufixo `-opt.jpg`:
- ester-about-optimized.jpg
- ester-profile-2-opt.jpg
- ester-profile-3-opt.jpg
- ester-profile-4-opt.jpg
- ester-profile-5-opt.jpg
- ester-profile-6-opt.jpg
- ester-profile-7-opt.jpg
- ester-scabello-hero-opt.jpg

### Arquivos Atualizados para Usar Minificados
- [x] index.html
- [x] blog/index.html
- [x] blog/lideranca-feminina-desafios/index.html
- [x] blog/ansiedade-sintomas-causas-tratamento/index.html
- [x] privacidade/index.html
- [x] termos/index.html

---

## Como Configurar Google Search Console

1. Acesse: https://search.google.com/search-console
2. Adicione a propriedade: https://esterscabello.com.br
3. Escolha "Prefixo de URL"
4. Baixe o arquivo de verificação HTML do Google
5. Faça upload na raiz do site (substituindo google-site-verification.html)
6. Clique em "Verificar"
7. Após verificado, vá em "Sitemaps" e envie: `sitemap.xml`

---

## Como Converter Imagens para WebP (Futuro)

Instale a ferramenta cwebp:
```bash
brew install webp
```

Converta as imagens:
```bash
cd site/images
for img in *.jpg; do
  cwebp -q 80 "$img" -o "${img%.jpg}.webp"
done
```

---

## Template para Novos Artigos (1500+ palavras)

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <!-- Google Analytics 4 -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-RT1Q2CW7GE"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-RT1Q2CW7GE');
    </script>

    <!-- CSS Minificado -->
    <link rel="stylesheet" href="../../css/style.min.css">
    <link rel="stylesheet" href="../../css/blog.min.css">

    <!-- Schema Article + FAQPage -->
</head>
<body>
    <!-- Conteúdo: mínimo 1500 palavras -->
    <!-- Incluir: Referências científicas, FAQ, CTA -->

    <!-- Footer com links legais -->
    <p class="footer-legal">
        <a href="../../privacidade/">Política de Privacidade</a> |
        <a href="../../termos/">Termos de Uso</a>
    </p>

    <!-- JS Minificado -->
    <script src="../../js/main.min.js"></script>
</body>
</html>
```

---

## Checklist para Cada Artigo

- [ ] GA4 instalado
- [ ] CSS/JS minificados
- [ ] Schema Article completo
- [ ] FAQPage schema (3+ perguntas)
- [ ] Mínimo 1500 palavras
- [ ] Referências científicas (quando aplicável)
- [ ] CTA box com WhatsApp
- [ ] Disclaimer (CVV 188)
- [ ] Links legais no footer
- [ ] Alt text nas imagens
