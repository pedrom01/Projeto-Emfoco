# Em Foco — projeto restaurado

Esta cópia foi reconstruída a partir do ZIP original, desfazendo o achatamento dos nomes de arquivos e recriando as pastas esperadas pelo HTML/CSS/JS.

## Como testar

### Front-end (HTML/CSS/JS)

Abra a pasta no VS Code e, no terminal, execute:

```bash
python -m http.server 8080
```

Depois abra:

http://localhost:8080/

O projeto também possui `.vscode/launch.json` apontando para `http://localhost:8080`.

### PHP

O arquivo `contact_process.php` precisa de um servidor com PHP (por exemplo, Apache + PHP/XAMPP). O servidor Python acima serve apenas o front-end e não executa PHP.

## Importante: imagens ausentes

O ZIP original não contém a pasta `img/` nem os arquivos de imagem referenciados pelo HTML/JS. Portanto, a estrutura de código foi restaurada, mas as imagens originais não puderam ser recuperadas a partir deste ZIP.

Entre os arquivos referenciados estão `img/logo.png`, `img/favicon.png`, imagens de cursos, blog, depoimentos, treinadores e banners.

Se existir uma cópia antiga da pasta `img`, basta colocá-la na raiz deste projeto:

```text
emfoco-restaurado/
└── img/
    ├── logo.png
    ├── favicon.png
    ├── courses/
    ├── blog/
    ├── testimonials/
    └── ...
```

## Estrutura recuperada

- `index.html` e demais páginas HTML
- `css/`
- `js/`
- `scss/`
- `vendors/`
- `fonts/`
- `contact_process.php`
- `.vscode/launch.json`
- `prepros-6.config`
- documentação original do template em `Edustage Education - doc/`
- metadados antigos de IDE em `.idea/`

## Observação

Não foram introduzidos React, Vite, npm ou outras ferramentas modernas, porque o projeto original não dependia delas.
