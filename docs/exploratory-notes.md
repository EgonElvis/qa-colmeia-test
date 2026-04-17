# 🔍 Testes Exploratórios

## 📌 Objetivo

Explorar o sistema para identificar inconsistências funcionais, problemas de usabilidade (UX) e falhas de validação.

---

## 🧪 Abordagem de Teste

Foram utilizadas as seguintes abordagens:

- Testes exploratórios livres
- Testes negativos (inputs inválidos)
- Testes de validação de formulário
- Testes de usabilidade (UX)
- Testes de comportamento de componentes (modais, botões, navegação)

---

## 📍 Fluxos explorados

### 🔐 Login
- Login com dados válidos
- Login com dados inválidos
- Validação de campos obrigatórios
- Interação com "Esqueceu sua senha?"
- Comportamento de mensagens de erro
- Comportamento do modal de confirmação

---

### 🧭 Navegação
- Clique no logo
- Dropdown do usuário
- Menu lateral
- Acesso a "Colmeia Forms"
- Acesso a "Bancos de dados"

---

### 🧾 Bancos de dados
- Criação de novos itens
- Validação de campo obrigatório
- Inserção de caracteres especiais
- Inserção de nomes duplicados
- Inserção de nomes muito longos
- Comportamento do modal de criação
- Teste das ações disponíveis (criar, arquivar, deletar, refresh)

---

## 🧠 Principais descobertas

- Elementos interativos não funcionais (botões e links)
- Falhas de validação de formulário (campo obrigatório e duplicidade)
- Inconsistência entre comportamento visual e funcional
- Problemas graves de integridade de dados (remoção indevida de itens)
- Falhas no fluxo de autenticação
- Problemas de UX (mensagens confusas e componentes não intuitivos)
- Falta de tratamento para inputs extremos (strings longas)

---

## ⚠️ Pontos críticos identificados

- Ações diferentes executando comportamento de exclusão
- Refresh removendo dados da listagem
- Arquivamento inconsistente (dados desaparecem)
- Validação inconsistente permitindo dados inválidos
- Mensagens incorretas durante login

---

## 💡 Sugestões de melhoria

- Implementar validações robustas no backend e frontend
- Padronizar mensagens de erro e feedback ao usuário
- Garantir consistência entre ações e seus efeitos
- Melhorar usabilidade de menus e botões
- Implementar controle de estado em modais (evitar perda de dados)
- Definir e comunicar regras de negócio (ex: duplicidade)

---

## 🧪 Técnicas adicionais aplicadas

- Teste de insistência (repetição de ações para validar comportamento)
- Teste de entrada inválida (inputs inesperados)
- Teste de limite (strings longas)
- Teste de comportamento inesperado (ações fora do fluxo padrão)

---

## 📌 Conclusão

O sistema apresenta inconsistências relevantes tanto em nível funcional quanto de experiência do usuário, incluindo falhas críticas relacionadas à integridade dos dados e comportamento das ações.
As evidências indicam necessidade de revisão nas regras de negócio, validações e tratamento de eventos na interface.
