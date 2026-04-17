# ✅ Casos de Teste

---

## 🔹 TC001 - Validação de clique no logo

**Descrição:** Validar se o logo redireciona corretamente  

**Passos:**
1. Acessar sistema
2. Clicar no logo

**Resultado esperado:**  
Redirecionar para home/dashboard

**Resultado obtido:**  
Não redireciona

---

## 🔹 TC002 - Funcionamento do menu do usuário

**Descrição:** Validar menu do usuário   

**Passos:**
1. Logar no sistema
2. Clicar em "Candidato" no canto superior direito

**Resultado esperado:**  
Exibir opções de usuário

**Resultado obtido:**  
Nenhuma ação ocorre

---

## 🔹 TC003 - Navegação via menu lateral

**Descrição:** Validar acesso ao menu   

**Passos:**
1. Clicar no botão lateral
2. Visualizar opções  

**Resultado esperado:**  
Menu claro e acessível 

**Resultado obtido:**  
Ícone pouco intuitivo

---

## 🔹 TC004 - Acesso à opção Colmeia Forms

**Descrição:** Validar navegação para formulário   

**Passos:**
1. Abrir menu campanha (Megafone)
2. Clicar em "Colmeia Forms" 

**Resultado esperado:**  
Redirecionar corretamente

**Resultado obtido:**  
Não navega (não mostra nada)

---

## 🔹 TC005 - Recuperação de senha

**Descrição:** Validar funcionamento do link de recuperação de senha  

**Passos:**
1. Acessar página de login  
2. Clicar em "Esqueceu sua senha?"  

**Resultado esperado:**  
Usuário deve ser redirecionado para recuperação de senha  

**Resultado obtido:**  
Nenhuma ação ocorre

---

## 🔹 TC006 - Validação de mensagem de erro no login

**Descrição:** Validar exibição de erro para credenciais inválidas  

**Passos:**
1. Inserir email inválido  
2. Inserir senha inválida  
3. Clicar em "Entrar"  

**Resultado esperado:**  
Mensagem clara e bem posicionada para o usuário  

**Resultado obtido:**  
Mensagem duplicada nos campos e pouco clara

---

## 🔹 TC007 - Validação de mensagem após login válido

**Descrição:** Validar comportamento do sistema ao informar credenciais corretas  

**Passos:**
1. Acessar login  
2. Inserir email válido  
3. Inserir senha válida  
4. Clicar em "Entrar"  

**Resultado esperado:**  
Sistema deve realizar login ou exibir mensagem coerente com autenticação válida  

**Resultado obtido:**  
Popup exibe mensagem incorreta informando que o login está incorreto

---

## 🔹 TC008 - Comportamento do popup de login ao clicar fora

**Descrição:** Validar persistência do modal durante fluxo de autenticação  

**Passos:**
1. Inserir credenciais válidas  
2. Clicar em "Entrar"  
3. Clicar fora do popup exibido  

**Resultado esperado:**  
Modal deve permanecer aberto ou fluxo de login deve continuar sem perda de estado  

**Resultado obtido:**  
Modal fecha e usuário precisa clicar novamente em "Entrar"

---

## 🔹 TC009 - Fechamento do modal de criação de item

**Descrição:** Validar comportamento do modal ao cancelar criação de item  

**Passos:**
1. Acessar "Bancos de dados"  
2. Clicar em "Criar"  
3. Digitar um nome no campo  
4. Clicar fora do modal  

**Resultado esperado:**  
Modal deve possuir cancelamento explícito e evitar perda involuntária dos dados  

**Resultado obtido:**  
Modal fecha ao clicar fora e o conteúdo digitado é perdido

---

## 🔹 TC010 - Validação de duplicidade no cadastro de itens

**Descrição:** Validar criação de item com nome já existente  

**Passos:**
1. Criar um item com determinado nome  
2. Tentar criar outro item com o mesmo nome  

**Resultado esperado:**  
Sistema deve validar duplicidade ou informar claramente que nomes repetidos são aceitos  

**Resultado obtido:**  
Sistema permite criar múltiplos itens com o mesmo nome sem validação

---

## 🔹 TC011 - Validação de campo obrigatório na criação de item

**Descrição:** Validar bloqueio de criação com campo vazio  

**Passos:**
1. Acessar "Bancos de dados"  
2. Clicar em "Criar"  
3. Deixar o campo vazio  
4. Clicar em "Salvar"  

**Resultado esperado:**  
Sistema deve impedir a criação do item  

**Resultado obtido:**  
Mesmo com validação exibida, o item pode ser criado

---

## 🔹 TC012 - Validação de caracteres especiais no nome do item

**Descrição:** Validar comportamento ao cadastrar nome com caracteres especiais  

**Passos:**
1. Acessar "Bancos de dados"  
2. Criar item contendo apenas caracteres especiais  

**Resultado esperado:**  
Sistema deve validar ou informar claramente a regra aceita  

**Resultado obtido:**  
Sistema aceita sem validação ou feedback

---

## 🔹 TC013 - Validação de limite de tamanho do nome do item

**Descrição:** Validar criação de item com nome muito longo  

**Passos:**
1. Acessar "Bancos de dados"  
2. Criar item com nome extenso  

**Resultado esperado:**  
Sistema deve limitar o tamanho ou tratar visualmente o conteúdo  

**Resultado obtido:**  
Layout da tabela é quebrado

---

## 🔹 TC014 - Recarregamento da listagem por botão de refresh

**Descrição:** Validar comportamento do botão de refresh  

**Passos:**
1. Criar um ou mais itens na aba Banco de dados 
2. Clicar no botão de refresh  

**Resultado esperado:**  
Sistema deve apenas atualizar a tela mantendo os itens  

**Resultado obtido:**  
Itens desaparecem da listagem

---

## 🔹 TC015 - Arquivamento de item

**Descrição:** Validar envio de item para área de arquivados  

**Passos:**
1. Criar item  
2. Arquivar item  
3. Acessar visualização de arquivados  

**Resultado esperado:**  
Item deve estar disponível em arquivados  

**Resultado obtido:**  
Item some da listagem principal, mas não aparece em arquivados

---

## 🔹 TC016 - Isolamento funcional entre ações da listagem

**Descrição:** Validar se cada ação executa apenas sua função esperada  

**Passos:**
1. Criar item  
2. Executar ações diferentes disponíveis na listagem  
3. Comparar comportamento obtido com a função esperada de cada ação  

**Resultado esperado:**  
Cada ação deve ter comportamento próprio e não destrutivo, exceto delete  

**Resultado obtido:**  
Outras ações também removem itens indevidamente
