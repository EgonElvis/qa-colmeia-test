# 🧪 Teste Técnico QA - Colmeia

Este repositório contém os testes realizados como parte do processo seletivo para a vaga de Analista de Testes (QA).

---

## 📌 Objetivo

Explorar o sistema disponibilizado, identificar comportamentos inesperados, falhas funcionais e problemas de usabilidade, documentando de forma clara os cenários testados e os bugs encontrados.

---

## 🧪 Abordagem de Teste

Foram utilizadas as seguintes estratégias:

- Testes exploratórios
- Testes negativos (inputs inválidos)
- Testes de validação de formulário
- Testes de usabilidade (UX)
- Testes de comportamento de interface (modais, botões e navegação)
- Automação de cenários de teste com Cypress

---

## 📂 Estrutura do Repositório

qa-colmeia-test
├── docs/
│   ├── bugs.md
│   ├── exploratory-notes.md
│   └── test-cases.md
├── cypress/
│   └── e2e/
│       ├── login.cy.js
│       └── bancos-dados.cy.js
├── cypress.config.js
├── package.json
├── package-lock.json
├── README.md

- `bugs.md` → Bugs identificados durante a análise  
- `exploratory-notes.md` → Registro da abordagem exploratória e insights
- `test-cases.md` → Casos de teste executados 
- `login.cy.js` → Testes automatizados focados no login
- `banco-dados.cy.js` → Testes automatizados focados na aba de banco de dados

---

## 🔍 Principais áreas testadas

### 🔐 Login
- Validação de credenciais
- Mensagens de erro
- Recuperação de senha
- Comportamento do fluxo de autenticação

### 🧭 Navegação
- Menu lateral
- Dropdown do usuário
- Links e redirecionamentos

### 🧾 Bancos de dados
- Criação de itens
- Validação de campos
- Duplicidade de dados
- Comportamento de ações (criar, arquivar, deletar, refresh)

---

## 🐞 Principais problemas encontrados

Durante a execução dos testes, foram identificados diversos problemas, incluindo:

- Falhas de navegação (links e botões não funcionais)
- Inconsistências no fluxo de login
- Problemas de validação de formulário
- Falhas de usabilidade (UX)
- Comportamentos inesperados em modais
- Problemas críticos de integridade de dados (remoção indevida de itens)

### 🔥 Destaques críticos

- Ações diferentes executando comportamento de exclusão  
- Botão de refresh removendo dados da listagem  
- Arquivamento não persistindo corretamente  
- Sistema permitindo salvar dados inválidos  

---

## 🧠 Principais aprendizados e observações

- Há inconsistência entre comportamento visual e funcional em diversos componentes  
- O sistema apresenta fragilidade na validação de dados  
- Algumas ações não estão isoladas corretamente, causando efeitos colaterais críticos  
- A experiência do usuário pode ser impactada por mensagens pouco claras e fluxos quebrados  

---

## 🛠 Ferramentas utilizadas

- Navegador: Google Chrome  
- DevTools (inspeção de elementos e console)  
- GitHub para documentação e versionamento  

---

## 🧪 Técnicas aplicadas

- Teste exploratório  
- Teste negativo  
- Teste de limite (inputs longos)  
- Teste de insistência (repetição de ações)  
- Teste de comportamento inesperado  

---

## 🚀 Conclusão

O sistema apresenta inconsistências relevantes tanto em nível funcional quanto de experiência do usuário, incluindo falhas críticas relacionadas à integridade dos dados e comportamento das ações.

As evidências indicam necessidade de revisão nas regras de negócio, validações e tratamento de eventos na interface.

---

## 📎 Observação final

Este trabalho foi realizado com foco em demonstrar a abordagem analítica, organização e clareza na comunicação de problemas, além da capacidade de identificar riscos e inconsistências em sistemas web.

Durante os testes, foram identificados outros comportamentos inconsistentes.  
Neste repositório foram priorizados os bugs com maior impacto funcional e de experiência do usuário.
