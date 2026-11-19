# Micro Frontends de Pedidos

Projeto acadêmico desenvolvido com Next.js 14, React, JavaScript e Webpack Module Federation.

O objetivo é demonstrar a arquitetura de Micro Frontends por meio de três aplicações independentes: uma aplicação principal (Container), um microfrontend de Cardápio e um microfrontend de Pedidos.

## Tecnologias utilizadas

- Next.js 14 (Pages Router)
- React 18
- JavaScript
- Webpack 5
- Module Federation (`@module-federation/nextjs-mf`)
- React.lazy e Suspense
- Eventos personalizados do navegador (`window.dispatchEvent`)
- CSS3 e Media Queries

## Requisitos

- Node.js 20 LTS
- npm
- Visual Studio Code

## Arquitetura do projeto

O projeto está organizado em três aplicações Next.js:

```text
micro-frontends-pedidos-pronto/
│
├── pages/
│   ├── _app.js
│   └── index.js
│
├── styles/
│   └── globals.css
│
├── micro-cardapio/
│   ├── components/
│   │   └── Cardapio.js
│   ├── pages/
│   ├── next.config.js
│   ├── package.json
│   └── package-lock.json
│
├── micro-pedido/
│   ├── components/
│   │   └── Pedidos.js
│   ├── pages/
│   ├── next.config.js
│   ├── package.json
│   └── package-lock.json
│
├── next.config.js
├── package.json
├── package-lock.json
└── README.md
```

## Responsabilidade de cada aplicação

### Container (aplicação principal)

Localizado na raiz do projeto.

Responsável por integrar os dois microfrontends, consumir seus componentes remotos e gerenciar o estado dos pedidos.

### Micro Cardápio

Localizado na pasta `micro-cardapio`.

Responsável por apresentar os pratos disponíveis, incluindo nome, descrição, preço e botão para adicionar ao pedido.

### Micro Pedido

Localizado na pasta `micro-pedido`.

Responsável por exibir os pratos selecionados, permitir a remoção de itens e apresentar o valor total do pedido.

## Como executar o projeto

É necessário instalar as dependências e iniciar as três aplicações em terminais separados.

### 1. Instalar as dependências

Na pasta principal do projeto, abra o terminal integrado do VS Code e execute:

```bash
npm install
```

Depois, instale as dependências do Micro Cardápio:

```bash
cd micro-cardapio
npm install
```

Em seguida, instale as dependências do Micro Pedido:

```bash
cd ../micro-pedido
npm install
```

### 2. Iniciar o Micro Cardápio

Abra um terminal na pasta `micro-cardapio` e execute:

```bash
npm run dev
```

Endereço: http://localhost:3001

### 3. Iniciar o Micro Pedido

Abra outro terminal na pasta `micro-pedido` e execute:

```bash
npm run dev
```

Endereço: http://localhost:3002

### 4. Iniciar o Container

Abra um terceiro terminal na pasta principal do projeto e execute:

```bash
npm run dev
```

Endereço: http://localhost:3000

**Importante:** mantenha os três servidores em execução simultaneamente para que a integração entre as aplicações funcione corretamente.

## Module Federation

A integração utiliza Webpack Module Federation por meio do plugin `@module-federation/nextjs-mf`.

Os microfrontends disponibilizam seus componentes para consumo pelo Container:

- `micro_cardapio/Cardapio`: componente de cardápio disponibilizado na porta 3001.
- `micro_pedido/Pedido`: componente de pedidos disponibilizado na porta 3002.

O Container configura as aplicações remotas e carrega seus componentes utilizando `React.lazy` e `Suspense`, permitindo a integração de aplicações independentes.

## Comunicação entre os microfrontends

A comunicação acontece por meio de eventos personalizados do navegador.

São utilizados os seguintes eventos:

- `adicionar-item`: disparado quando um prato é adicionado ao pedido.
- `remover-item`: disparado quando um prato é removido do pedido.

O Container recebe esses eventos, atualiza o estado dos pedidos e disponibiliza os dados atualizados para o componente de pedidos.

Dessa forma, os microfrontends conseguem se comunicar sem depender diretamente da implementação interna um do outro.

## Funcionalidades implementadas

- Exibição de três pratos no cardápio.
- Apresentação do nome, descrição e preço de cada prato.
- Adição de pratos ao pedido.
- Exibição dos itens selecionados.
- Remoção individual de pratos do pedido.
- Cálculo automático do valor total.
- Integração dos componentes remotos pelo Module Federation.
- Comunicação entre aplicações por eventos globais.
- Carregamento sob demanda com React.lazy e Suspense.
- Interface responsiva para diferentes tamanhos de tela.

## Compatibilidade

O projeto utiliza:

- Next.js 14.2.35.
- React 18.3.1.
- Webpack 5.
- `@module-federation/nextjs-mf` na versão 8.8.31.
- `@module-federation/enhanced` na versão 0.15.0.

A dependência `enhanced-resolve` está fixada na versão 5.18.3 por meio da configuração `overrides` nos arquivos `package.json`, mantendo a mesma versão nas três aplicações.

## Testes realizados

Foram verificadas as seguintes funcionalidades:

- Inicialização simultânea das três aplicações.
- Carregamento dos componentes remotos no Container.
- Exibição dos pratos com nome, descrição e preço.
- Adição de pratos ao pedido.
- Remoção de pratos selecionados.
- Atualização automática do valor total.
- Comunicação entre os microfrontends.

---

**Projeto acadêmico — Micro Frontends de Pedidos.**