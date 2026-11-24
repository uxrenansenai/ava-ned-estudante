# AVA NED — Estudante

Protótipo navegável da experiência de Estudante do AVA NED, preparado para testes de usabilidade. A aplicação é estática e funciona inteiramente no navegador com HTML, CSS, JavaScript, dados mockados e `localStorage`.

## Estrutura

```text
/
├── estudante/
│   ├── index.html
│   ├── styles.css
│   └── script.js
├── AVA-NED-DOCUMENTACAO.md
└── .gitignore
```

A pasta `estudante` é independente e não depende de backend, API, banco de dados ou autenticação real.

## Executar localmente

A partir da raiz do projeto:

```powershell
npx --yes serve estudante
```

Abra a URL exibida pelo servidor, normalmente `http://localhost:3000`.

## Credenciais do teste

- Login/CPF: `123`
- Senha: `teste`

A sessão simulada é armazenada em `localStorage` na chave `ava_student_session`.

Para restaurar o cenário inicial:

```text
/index.html?resetTest=true
```

Quando o projeto estiver servido a partir da raiz do repositório, use:

```text
/estudante/index.html?resetTest=true
```

## Publicar no Vercel

1. Importe o repositório no Vercel.
2. Defina **Root Directory** como `estudante`.
3. Use **Framework Preset: Other**.
4. Deixe **Build Command** vazio.
5. Deixe **Output Directory** vazio.
6. Deixe **Install Command** vazio.
7. Faça o deploy.

Como o Root Directory aponta para `estudante`, o `index.html` será a página inicial do domínio publicado. As rotas internas usam hash routing, portanto não exigem configuração de rewrite.

## Observação sobre imagens

Todas as imagens são servidas localmente a partir de `estudante/assets/` (sem dependência de URLs temporárias do Figma):

- `assets/logo-ned.png` — logo oficial da Nossa Escola Digital (sidebar, login e cabeçalho das aulas).
- `assets/courses/` e `assets/trails/` — capas exportadas do Figma, otimizadas em JPEG (máx. 800px).
- `assets/ui/` — decoração do banner da página inicial e marca d'água da sidebar, exportadas do Figma.

O mapeamento capa ↔ curso fica em `COURSE_IMAGES` e `TRAIL_IMAGES`, no início de `script.js`. Cursos sem capa correspondente no Figma (`null` no mapa) exibem um placeholder com o gradiente da marca.
