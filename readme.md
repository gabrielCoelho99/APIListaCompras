# API de Lista de Compras 🛒
 _Esta é uma API simples de Lista de Compras criada com Node.js e Express. A API permite criar, visualizar e deletar itens de uma lista de compras._

# Requisitos
- _Node.js_
- _Postman_

# Instalação
1. Clone o meu repositório 👇🏻

- `git clone https://github.com/seu-usuario/seu-repositorio.git`

- ``cd seu-repositorio``

2. Instale as dependências
- `npm install`

# Como executar? 🤔

1. Iniciar o servidor
`npm start`
- O servidor vai rodar na URL: `http://localhost:3000`

# Endpoints da API 🤓

1. Adicionando um item à lista de compras:
- Método: `POST`
- URL `/items`
- Corpo da requisição (JSON)
```
{
  "nome": "Nome do item",
  "quantidade": 5
}
```
- ``nome`` (obrigatório): Nome do item que vai ser adicionado a lista.
- ``quantidade``(opicional): Quantidade do item. O valor padrão é ``1`` se não for fornecido.

- Resposta de Sucesso (Status 201):

```
{
  "id": 1,
  "name": "Nome do item",
  "quantity": 5
}

```

# Como fazer isso no postman? 🤔
1. Selecione o método `POST`
2. No campo de URL, coloque seu URL `http://localhost:3000/items`
3. Vá até a aba ``Body`` e selecione `raw` > ``JSON``
4. Insira o corpo no formato JSON, que foi passado mais acima.
5. CLique em `SEND`

# Como listar todos os itens da lista de compras? 🤔

- Utilizando o método `GET` e a URL `/items`;
- Usando isso, retornará todos os itens da lista de compras.
- Se tudo deu certo irá retornar uma resposta de sucesso ``(Status 200)``

```
[
  {
    "id": 1,
    "name": "Nome do item",
    "quantity": 5
  },
  {
    "id": 2,
    "name": "Outro item",
    "quantity": 2
  }
]`
```
# Exemplo no Postman:

1. Selecione o método GET.
2. No campo de URL, insira: ``http://localhost:3000/items``
3. Clique em Send para visualizar os itens.

# Deletar um item da lista de compras
- Utilizando o método ``DELETE``

- URL: ``/items/:id``

- Descrição: Deleta um item da lista de compras com base no seu ID.

- Parâmetro da URL:

    - id (obrigatório): O ID do item a ser deletado.
- Resposta de Sucesso (Status 200):

```
{
  "id": 1,
  "name": "Nome do item",
  "quantity": 5
}

```

Resposta de Erro (Status 404):

``` 
{
  "error": "Item não encontrado"
}

```

# Exemplo no Postman:

1. Selecione o método DELETE.
2. No campo de URL, ```insira:http://localhost:3000/items/1 (substitua 1 pelo ID do item a ser deletado)```
3. Clique em Send.