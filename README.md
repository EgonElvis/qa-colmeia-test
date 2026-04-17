# 🧪 Teste Técnico QA - Colmeia

Este repositório contém os testes realizados como parte do processo seletivo para a vaga de Analista de Testes (QA).

---

## 📌 Objetivo

Validar funcionalidades críticas da aplicação, garantindo a qualidade do sistema através de:

- Testes manuais estruturados
- Testes exploratórios
- Identificação e documentação de bugs
- Automação de cenários críticos

---

## 🧪 Testes Manuais

Os testes manuais foram documentados de forma estruturada na pasta `/docs`, contendo:

- 📄 `test-cases.md` → Casos de teste detalhados  
- 🐞 `bugs.md` → Registro de falhas encontradas  
- 🔍 `exploratory-notes.md` → Testes exploratórios  

---

## 🤖 Testes Automatizados (Cypress)

Foi implementada automação de testes utilizando **Cypress**, com foco na validação de fluxos críticos da aplicação.

A automação foi desenvolvida seguindo boas práticas como:

- Separação de cenários por responsabilidade
- Uso de seletores robustos (evitando posições fixas)
- Validações claras de comportamento esperado
- Organização em testes independentes

---

## 🚀 Cenários Automatizados

### 🔐 Login
- Login com credenciais válidas
- Validação de redirecionamento para dashboard

### 📊 Bancos de Dados
- Acesso à funcionalidade
- Criação de novo banco de dados
- Validação de campo obrigatório (nome)
- Tentativa de criação sem nome (validação de erro)
- Teste de duplicidade de banco de dados

---

## ⚙️ Tecnologias Utilizadas

- JavaScript
- Cypress
- Node.js

---

## ▶️ Como executar o projeto

```bash
# Instalar dependências
npm install

# Abrir o Cypress
npx cypress open

```

---

## 💡 Considerações

A automação foi aplicada apenas nos fluxos mais críticos do sistema, priorizando:

Funcionalidades essenciais
Cenários de maior risco
Validações importantes de negócio

Os testes foram organizados para facilitar manutenção, leitura e escalabilidade.

---

## 👨‍💻 Autor

Egon Elvis Jorge
