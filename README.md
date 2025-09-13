# Wild Hub Website

Este é o código-fonte completo do site da Wild Hub, gerado pelo Hostinger Horizons.

## Como usar

1.  **Descompacte o arquivo:** Extraia o conteúdo do arquivo .zip que você baixou.
2.  **Instale as dependências:** Abra o terminal na pasta do projeto e execute o comando:
    ```bash
    npm install
    ```
3.  **Inicie o servidor de desenvolvimento:** Para visualizar o site localmente, execute:
    ```bash
    npm run dev
    ```
    O site estará disponível em `http://localhost:5173`.
4.  **Para produção (build):** Para criar uma versão otimizada para deploy, execute:
    ```bash
    npm run build
    ```
    Os arquivos prontos para produção estarão na pasta `dist/`.

## Estrutura do Projeto

-   `/public`: Arquivos estáticos.
-   `/src`: Código-fonte principal.
    -   `/components`: Componentes React reutilizáveis.
    -   `/lib`: Funções utilitárias e outros.
    -   `/pages`: Componentes de página (rotas).
    -   `App.jsx`: Componente raiz da aplicação.
    -   `main.jsx`: Ponto de entrada da aplicação.
-   `package.json`: Lista de dependências e scripts.
-   `vite.config.js`: Configurações do Vite.
-   `tailwind.config.js`: Configurações do TailwindCSS.
