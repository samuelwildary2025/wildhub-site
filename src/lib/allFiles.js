// Este arquivo contém a estrutura de arquivos para o sistema de backup
// Em um ambiente real, isso seria gerado dinamicamente

export const allFiles = [
  {
    path: "README.md",
    content: `# Wild Hub Website

Este é o código-fonte do site Wild Hub.

## Tecnologias Utilizadas
- React 18
- Vite
- TailwindCSS
- Framer Motion
- Radix UI

## Como executar
1. npm install
2. npm run dev

## Build para produção
npm run build
`,
    isBinary: false
  },
  {
    path: "package.json",
    content: JSON.stringify({
      "name": "wild-hub-website",
      "version": "1.3.0",
      "type": "module",
      "scripts": {
        "dev": "vite",
        "build": "vite build",
        "preview": "vite preview"
      }
    }, null, 2),
    isBinary: false
  },
  {
    path: "src/main.jsx",
    content: `import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)`,
    isBinary: false
  }
  // Mais arquivos seriam adicionados aqui em um sistema real
];