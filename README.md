# Delivery App

Este projeto é um aplicativo com foco na arquitetura MVVM no React Native, baseado no conteúdo dessa live https://www.youtube.com/watch?v=XfAJUW5z4ws

<img src="https://raw.githubusercontent.com/jardelbordignon/rn-mvvm/refs/heads/main/assets/screen-all-products.jpeg" alt="Tela de todos os produtos" width="300"/>
<img src="https://raw.githubusercontent.com/jardelbordignon/rn-mvvm/refs/heads/main/assets/screen-products-by-category.jpeg" alt="Tela de produtos por categoria" width="300"/>

## Tecnologias Utilizadas

- **React Native**: Base do aplicativo mobile.
- **Expo**: Facilita o desenvolvimento, build e deploy do app.
- **TypeScript**: Tipagem estática para maior segurança e produtividade.
- **React Query (@tanstack/react-query)**: Gerenciamento de cache e requisições assíncronas.
- **Tailwind CSS (via NativeWind)**: Estilização rápida e responsiva.

## Estrutura do Projeto

```
├── app.json                # Configurações do Expo
├── babel.config.js         # Configuração do Babel
├── global.css              # Estilos globais
├── metro.config.js         # Configuração do Metro bundler
├── nativewind-env.d.ts     # Tipagens do NativeWind
├── tailwind.config.js      # Configuração do Tailwind CSS
├── tsconfig.json           # Configuração do TypeScript
├── assets/                 # Imagens e ícones do app
└── src/
    ├── app/
    │   ├── _layout.tsx     # Layout principal do app
    │   ├── index.tsx       # Entry point da aplicação
    │   └── mvvm/
    │       └── home/
    │           ├── home.model.ts   # Lógica e estado da tela Home (MVVM)
    │           ├── home.view.tsx   # Componente visual da tela Home
    │           └── index.tsx       # Entry point da feature Home
    ├── http/
    │   ├── api-client.ts         # Configuração do cliente HTTP KY
    │   ├── get-category-list.ts  # Função para buscar lista de categorias
    │   ├── get-product.ts        # Função para buscar um produto
    │   └── get-products.ts       # Função para buscar lista de produtos
    └── providers/
        └── index.tsx        # Providers globais do app
```

## Padrão MVVM
O projeto adota o padrão MVVM (Model-View-ViewModel) para separar responsabilidades:
- **Model**: Lida com dados e lógica de negócio (ex: `home.model.ts`).
- **View**: Responsável pela interface (ex: `home.view.tsx`).
- **ViewModel**: Integrado ao Model, conecta dados à View.

## Como rodar o projeto
1. Instale as dependências:
   ```bash
   npm install
   ```
2. Inicie o projeto:
   ```bash
   npx expo start
   ```

## Observações
- O projeto utiliza React Query para paginação e cache de produtos.
- O agrupamento de produtos por categoria é feito no Model da Home.
- O uso de NativeWind permite estilização rápida e consistente.

