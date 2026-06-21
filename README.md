# Serviço de Pagamento

Projeto desenvolvido como atividade da disciplina **Programação para Automação de Testes**, da Pós-Graduação em **Automação de Testes de Software**.

> Exercício acadêmico desenvolvido para praticar conceitos de programação orientada a objetos e testes automatizados com JavaScript, Node.js e Mocha.

## Objetivo

Implementar uma classe responsável por realizar e consultar pagamentos, aplicando regras de negócio para categorização dos pagamentos de acordo com o valor informado.

Além disso, implementar uma pipeline de Integração Contínua (CI) utilizando GitHub Actions para automatizar a execução dos testes e a geração de relatórios.

## Requisitos da Atividade

* Criar uma classe `ServicoDePagamento`;
* Implementar o método `pagar()`;
* Implementar o método `consultarUltimoPagamento()`;
* Armazenar pagamentos em uma lista de objetos JavaScript;
* Adicionar a propriedade `categoria`:

  * `cara` para pagamentos com valor superior a 100,00;
  * `padrão` para pagamentos com valor menor ou igual a 100,00;
* Desenvolver testes automatizados utilizando **Mocha** e **Node Assert**;
* Implementar pipeline de Integração Contínua utilizando GitHub Actions;
* Gerar e publicar relatórios de execução dos testes.

## Estrutura do Projeto

```text
.
├── .github
│    └── workflows
│        └── ci.yml
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
* Node Assert
* Mochawesome
* GitHub Actions

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

## Pipeline de Integração Contínua

A pipeline foi implementada utilizando GitHub Actions e contempla:

### Execução por Push

A execução ocorre automaticamente sempre que um push é realizado na branch principal (main).

### Execução Manual

A execução pode ser iniciada manualmente através da opção Run workflow disponível na aba Actions do GitHub.

### Execução Agendada

A pipeline possui execução automática diária configurada através do recurso schedule.

schedule:
  - cron: '15 6 * * *'

### Execução dos Testes

Os testes unitários são executados automaticamente através do comando:
```
npm test
```
### Geração de Relatório

Os resultados da execução são gerados utilizando o reporter Mochawesome.

### Publicação de Artefatos

Os relatórios são armazenados e disponibilizados como artefatos da execução da pipeline utilizando a action upload-artifact.

## Autor

**Nayra Braga**
