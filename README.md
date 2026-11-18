# Micro Frontends de Pedidos

Projeto acadêmico desenvolvido com Next.js 14, React, JavaScript e Webpack Module Federation.

O projeto demonstra a integração de três aplicações independentes: um container principal, um micro frontend de cardápio e um micro frontend de pedidos.

## Tecnologias utilizadas

- Next.js 14 (Pages Router)
- React 18
- JavaScript
- Webpack 5
- Module Federation (`@module-federation/nextjs-mf`)
- Eventos globais do navegador para comunicação entre componentes

## Requisitos

- Node.js 20 LTS
- npm
- Visual Studio Code

## Como executar no Windows

É necessário iniciar as três aplicações em terminais separados.

### 1. Instalar as dependências

Abra a pasta principal do projeto no VS Code.

No terminal integrado, execute:

```bash
npm install
```

Depois, instale as dependências dos dois micro frontends:

```bash
cd micro-cardapio
npm install
```

```bash
cd ../micro-pedido
npm install
```

### 2. Iniciar o micro frontend Cardápio

Abra um terminal integrado na pasta `micro-cardapio` e execute:

```bash
npm run dev
```

Aplicação disponível em:

http://localhost:3001

### 3. Iniciar o micro frontend Pedido

Abra outro terminal integrado na pasta `micro-pedido` e execute:

```bash
npm run dev
```

Aplicação disponível em:

http://localhost:3002

### 4. Iniciar o Container principal

Abra um terceiro terminal integrado na pasta raiz do projeto e execute:

```bash
npm run dev
```

Aplicação disponível em:

http://localhost:3000

**Importante:** mantenha os três servidores em execução simultaneamente para que a integração funcione.

## Funcionalidades implementadas

- Cardápio com três opções de pratos.
- Adição de pratos ao pedido.
- Exibição dos itens selecionados.
- Remoção de itens do pedido.
- Cálculo automático do valor total.
- Carregamento dos micro frontends pelo container.
- Comunicação entre aplicações por eventos globais do navegador.
- Carregamento sob demanda dos módulos com React.lazy e Suspense.
- Interface responsiva.

## Arquitetura do projeto

O projeto está organizado em três aplicações Next.js independentes:

```text
micro-frontends-pedidos-pronto/
│
├── pages/
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
│   └── package.json
│
├── micro-pedido/
│   ├── components/
│   │   └── Pedidos.js
│   ├── pages/
│   ├── next.config.js
│   └── package.json
│
├── next.config.js
├── package.json
└── readme.md
```

## Module Federation

A integração utiliza o plugin `@module-federation/nextjs-mf`.

Os micro frontends expõem seus componentes para consumo pelo container:

- `micro_cardapio/Cardapio`: componente de cardápio, disponibilizado na porta 3001.
- `micro_pedido/Pedido`: componente de pedidos, disponibilizado na porta 3002.

O container principal, executado na porta 3000, configura os remotes e carrega os componentes das aplicações independentes.

## Comunicação entre os componentes

A comunicação entre Cardápio e Pedido acontece por eventos personalizados do navegador:

- `adicionar-item`: enviado quando um prato é selecionado.
- `remover-item`: enviado quando um item é removido.

O container recebe esses eventos, atualiza o estado do pedido e repassa os itens ao componente de pedidos.

## Compatibilidade

Os projetos utilizam `enhanced-resolve` na versão `5.18.3`, fixada por meio de `overrides` nos arquivos `package.json`, para evitar o erro de resolução de dependências identificado durante os testes.

## Testes realizados

As três aplicações foram iniciadas simultaneamente e a integração foi verificada:

- Container iniciado na porta 3000.
- Micro Cardápio iniciado na porta 3001.
- Micro Pedido iniciado na porta 3002.
- Carregamento dos componentes remotos.
- Adição de pratos ao pedido.
- Remoção de pratos.
- Atualização do valor total.