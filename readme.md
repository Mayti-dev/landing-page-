# MTI | Portfólio de Programador

Landing page pessoal de um programador em formação, criada para apresentar conhecimentos, projetos e formas de contato.

🔗 **Site:** https://maysonprogrammer.com

## Funcionalidades

- **Página única** com seções: Home, Sobre, Serviços, Projetos e Contato
- **Foto de perfil circular** ao lado da seção Home (em telas menores, ela passa para cima da seção)
- **Título "MTI" pulsando**, com animação de crescimento e brilho em CSS (desativada para quem prefere menos movimento)
- **Menu fixo** no topo com rolagem suave entre as seções
- **Menu sanduíche**: abre com as opções Home, Sobre, Serviços, Projetos e Contatos; fecha ao clicar em um link, fora do menu ou com a tecla Esc
- **Botão "Trocar cor"**: alterna entre tema escuro e claro e lembra a escolha (via `localStorage`)
- **Formulário de contato** com envio de e-mail pelo **EmailJS**, sem servidor próprio
- **reCAPTCHA v2** ("Não sou um robô") para evitar envios de robôs
- **Layout responsivo**: celular em pé, celular na horizontal e computador, com suporte a telas com entalhe (notch)
- **SEO básico**: `sitemap.xml` e `robots.txt`

## Tecnologias

- HTML5
- CSS3 (variáveis CSS, Flexbox, media queries, animações com `@keyframes`, `env(safe-area-inset)`)
- JavaScript (DOM, eventos, `localStorage`, `async/await`)
- [EmailJS](https://www.emailjs.com/) para envio de e-mails
- [Google reCAPTCHA v2](https://www.google.com/recaptcha/)

## Estrutura do projeto

```
landing page/
├── index.html
├── style.css
├── main.js
├── foto.png
├── sitemap.xml
├── robots.txt
└── readme.md
```

## Como executar

1. Clone ou baixe o repositório.
2. Abra a pasta no VS Code.
3. Inicie com a extensão **Live Server** (clique direito no `index.html` > *Open with Live Server*).

> O reCAPTCHA não funciona abrindo o arquivo direto (`file://`). Use o Live Server (`localhost`) ou o site publicado.

## Personalização

- **Foto de perfil:** substitua o arquivo `foto.png` por outra imagem. Use uma foto quadrada ou com o rosto centralizado e reduza para cerca de 400x400px. Se mudar a extensão, atualize o `src` no `index.html`.
- **Cores:** os temas escuro e claro ficam nas variáveis CSS (`:root` e `body.tema-claro`) no `style.css`.
- **Animação do título:** ajuste a duração e a intensidade em `@keyframes pulsar` e `header h1`.

## Configuração do formulário

O envio depende de três valores do EmailJS, definidos no início do bloco de formulário em `main.js`:

| Constante | Onde encontrar |
|---|---|
| `EMAILJS_PUBLIC_KEY` | EmailJS > Account > General |
| `EMAILJS_SERVICE_ID` | EmailJS > Email Services |
| `EMAILJS_TEMPLATE_ID` | EmailJS > Email Templates |

O template do EmailJS deve usar as variáveis `{{nome}}`, `{{email}}` e `{{mensagem}}`, idênticas aos atributos `name` dos campos do formulário.

### reCAPTCHA

1. Crie um site em [google.com/recaptcha/admin](https://www.google.com/recaptcha/admin) (tipo **v2, caixa de seleção**).
2. Cadastre os domínios `maysonprogrammer.com` e `localhost`.
3. Coloque a **chave do site** (pública) no atributo `data-sitekey` do `index.html`.
4. A **chave secreta** nunca deve ir no código. Cadastre-a apenas no painel do serviço que faz a validação.

## Segurança

- A Public Key do EmailJS e a chave do site do reCAPTCHA são públicas por natureza.
- Chaves secretas não são versionadas neste repositório.
- Como o envio ocorre no navegador, a proteção real contra abuso vem das configurações dos painéis (restrição de domínio e validação do reCAPTCHA).

## Acessibilidade

- Botão do menu com `aria-label`, `aria-expanded` e `aria-controls`
- Menu fecha com a tecla Esc
- Animação do título desativada para quem usa "reduzir movimento" no sistema
- Foto com texto alternativo (`alt`)

## SEO

- `sitemap.xml`: lista a URL principal do site (as seções `#sobre`, `#servicos` etc. são âncoras e não precisam de entrada própria).
- `robots.txt`: libera a indexação e aponta para o sitemap.
- Após publicar, envie o sitemap no [Google Search Console](https://search.google.com/search-console).

## Próximos passos

- [ ] Adicionar os projetos reais na seção "Meus Projetos"
- [ ] Atualizar o link do LinkedIn
- [ ] Adicionar meta description e Open Graph

## Autor

**MTI** | Programador em formação
Instagram: [@maysonbittencourt](https://www.instagram.com/maysonbittencourt)
GitHub: [Mayti-dev](https://github.com/Mayti-dev)

© 2026 MTI. Todos os direitos reservados.