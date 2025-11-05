# API Financeiro

API Financeiro pessoal desenvolvida em Node.js e Express, com estrutura MVC e dados em memória.

## Como rodar

1. Instale as dependências:
   ```bash
   npm install
   ```

2. Inicie o servidor:
   ```bash
   npm run dev
   ```

3. Acesse no navegador:
   [http://localhost:3000](http://localhost:3000)

## 🧩 Rotas disponíveis

### Usuários
- `GET /usuarios` → lista usuários
- `POST /usuarios` → cria novo usuário
- `PUT /usuarios/:id` → atualiza usuário
- `DELETE /usuarios/:id` → remove usuário

### Categorias
- `GET /categorias` → lista categorias
- `POST /categorias` → cria categoria
- `PUT /categorias/:id` → atualiza categoria
- `DELETE /categorias/:id` → remove categoria

### Transações
- `GET /transacoes` → lista transações
- `POST /transacoes` → cria transação
- `PUT /transacoes/:id` → atualiza transação
- `DELETE /transacoes/:id` → remove transação

## Observação
Os dados não são salvos permanentemente — se reiniciar o servidor, tudo é limpo.
