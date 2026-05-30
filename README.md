# Serviço de Pagamento

Projeto desenvolvido como atividade da disciplina **Programação para Automação de Testes**, da Pós-Graduação em **Automação de Testes de Software**.

> Exercício acadêmico desenvolvido para praticar conceitos de programação orientada a objetos e testes automatizados com JavaScript, Node.js e Mocha.

## Objetivo

Implementar uma classe responsável por realizar e consultar pagamentos, aplicando regras de negócio para categorização dos pagamentos de acordo com o valor informado.

## Requisitos da Atividade

* Criar uma classe `ServicoDePagamento`;
* Implementar o método `pagar()`;
* Implementar o método `consultarUltimoPagamento()`;
* Armazenar pagamentos em uma lista de objetos JavaScript;
* Adicionar a propriedade `categoria`:

  * `cara` para pagamentos com valor superior a 100,00;
  * `padrão` para pagamentos com valor menor ou igual a 100,00;
* Desenvolver testes automatizados utilizando **Mocha** e **Node Assert**.

## Estrutura do Projeto

```text
.
├── assets
│   └── tests-passing.png
├── src
│   └── servicoDePagamento.js
├── test
│   └── SsrvicoDePagamento.test.js
├── .gitignore
├── package-lock.json
├── package.json
└── README.md
```

## Tecnologias Utilizadas

* JavaScript (ES Modules)
* Node.js
* Mocha
* Assert

## Funcionalidades

### Realizar Pagamento

Permite registrar um novo pagamento informando:

* Código de barras;
* Empresa;
* Valor.

A categoria do pagamento é definida automaticamente:

| Valor              | Categoria |
| ------------------ | --------- |
| Até R$ 100,00      | padrão    |
| Acima de R$ 100,00 | cara      |

### Consultar Último Pagamento

Retorna o último pagamento registrado no sistema.

## Executando os Testes

Instale as dependências:

```bash
npm init -y
```
No arquivo `package.json`, altere:

```json
"type": "commonjs"
```

para:

```json
"type": "module"
```

Instale o Mocha:

```bash
npm i mocha
```

Execute os testes:

```bash
npx mocha
```

## Exemplo de Uso

```javascript
const servico = new ServicoDePagamento();

servico.pagar('0123-7666-3413', 'Samar', 100.01);

console.log(servico.consultarUltimoPagamento());
```

Saída:

```javascript
{
  codigoBarras: '0123-7666-3413',
  empresa: 'Samar',
  valor: 100.01,
  categoria: 'cara'
}
```

## Autor

**Nayra Braga**
