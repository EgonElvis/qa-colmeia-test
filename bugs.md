# 🐞 Bugs Encontrados

---

## ⚠️ BUG001 - Logo da Colmeia não é clicável

**Severidade:**  Média   
**Prioridade:**  Média 

**Descrição:** O logo da aplicação não possui ação ao ser clicado.

**Passos para reproduzir:**
1. Acessar o sistema (login)  
2. Clicar no logo da Colmeia (canto superior esquerdo) 

**Resultado esperado:**  
Redirecionar para a dashboard ou página inicial

**Resultado atual:**  
Nenhuma ação é executada (não é possivel clicar) 

**Evidência:**  
<img width="1301" height="947" alt="msedge_2026-04-16_00-46-15" src="https://github.com/user-attachments/assets/c9168865-2ff7-427d-88c8-1e1f1142bcc0" />


---

## 🔥 BUG002 - Dropdown "Candidato" não funciona

**Severidade:**  Alta  
**Prioridade:**  Alta  

**Descrição:** O dropdown do usuário não exibe nenhuma opção ao ser clicado.

**Passos para reproduzir:**
1. Acessar o sistema logado
2. Clicar em "Candidato" no canto superior direito 

**Resultado esperado:**  
Exibir opções como:
- Perfil
- Configurações
- Logout

**Resultado atual:**  
Nenhuma ação ocorre

**Evidência:**  
<img width="1076" height="947" alt="msedge_2026-04-16_01-05-52" src="https://github.com/user-attachments/assets/719ad6cd-3a2b-4ded-a813-f7ee85b1f338" />


---

## ⚠️ BUG003 - Botão de menu "Campanha" não é intuitivo

**Severidade:**  Baixa   
**Prioridade:**  Média   

**Descrição:** O botão representado por um ícone de megafone não é intuitivo para navegação.

**Passos para reproduzir:**
1. Acessar o sistema  
2. Observar o ícone lateral 

**Resultado esperado:**  
Um ícone mais claro (ex: menu/hamburger)

**Resultado atual:**  
Usuário não entende a função do botão

**Evidência:**  
<img width="1076" height="947" alt="image" src="https://github.com/user-attachments/assets/cad49dce-0749-4c03-83c2-7c73e7b8ba98" />


---

## 🔥 BUG004 - Link "Colmeia Forms" não funciona

**Severidade:**  Alta  
**Prioridade:**  Alta  

**Descrição:** O link "Colmeia Forms" não realiza navegação ao ser clicado.

**Passos para reproduzir:**
1. Clicar no botão de menu lateral (icone Megafone)
2. Clicar em "Colmeia Forms"

**Resultado esperado:**  
Redirecionar para página de formulários

**Resultado atual:**  
Nenhuma ação ocorre

**Observação técnica:**  
O elemento possui um atributo href (`/dashboard/campanha/colmeia-forms`), porém a navegação não acontece, indicando possível falha de roteamento ou evento não tratado.

**Evidência:**  
<img width="1347" height="1031" alt="msedge_2026-04-16_01-25-22" src="https://github.com/user-attachments/assets/d494023a-5fcb-4332-bb2c-ff27fce14d14" />


---

## 🔥 BUG005 - Link "Esqueceu sua senha?" não funciona

**Severidade:**  Alta  
**Prioridade:**  Alta  

**Descrição:** O link "Esqueceu sua senha?" apresenta comportamento de elemento clicável (cursor pointer), porém não executa nenhuma ação ao ser clicado.

**Passos para reproduzir:**
1. Acessar a página de login  
2. Passar o mouse sobre o texto "Esqueceu sua senha?" 
3. Clicar no link

**Resultado esperado:**  
Redirecionar para fluxo de recuperação de senha 

**Resultado atual:**  
Nenhuma ação é executada

**Observação técnica:**  
O elemento possui comportamento visual de link (cursor pointer), porém aparenta não possuir evento de clique ou rota associada, indicando possível falha na implementação ou binding de evento.

**Evidência:**  
<img width="1540" height="947" alt="msedge_2026-04-16_18-23-25" src="https://github.com/user-attachments/assets/69ce4fe0-ae75-4f19-81d1-528a80804b78" />


---

## 🟡 BUG006 - Mensagem de erro de login mal posicionada e pouco amigável

**Severidade:**  Baixa  
**Prioridade:**  Baixa  

**Descrição:** Ao inserir credenciais inválidas no login, a mensagem "Usuário ou senha inválidas" é exibida em ambos os campos (email e senha), causando confusão para o usuário. Além disso, a forma como a mensagem é apresentada não é clara nem amigável.

**Passos para reproduzir:**
1. Acessar a página de login 
2. Inserir email inválido 
3. Inserir senha inválida 
4. Clicar em "Entrar"

**Resultado esperado:**  
- Exibir mensagem de erro clara e centralizada (ex: acima do formulário ou abaixo do botão)  
- Ou indicar especificamente qual campo está incorreto (quando possível)

**Resultado atual:**  
- Mensagem exibida em ambos os campos  
- Falta de clareza na comunicação do erro

**Observação técnica:**  
A validação parece não distinguir corretamente o tipo de erro (credencial inválida vs. erro de campo), aplicando a mesma mensagem para múltiplos inputs.

**Evidência:**  
<img width="564" height="448" alt="msedge_2026-04-16_17-29-10" src="https://github.com/user-attachments/assets/6679dca4-0ab3-43a8-8385-41d2a3b8f9d5" />


---

## 🔥 BUG007 - Mensagem de confirmação de login exibe texto incorreto após credenciais válidas

**Severidade:**  Alta  
**Prioridade:**  Alta  

**Descrição:** Após informar credenciais válidas e clicar em "Entrar", o sistema exibe um popup com a mensagem: "Seu login está incorreto, quer continuar?". A mensagem é inconsistente com o comportamento esperado, já que as credenciais informadas estão corretas.

**Passos para reproduzir:**
1. Acessar a página de login
2. Inserir credenciais válidas
3. Clicar em "Entrar"

**Resultado esperado:**  
O sistema deve:
- autenticar o usuário diretamente, ou
- exibir uma mensagem coerente com sucesso no login, como confirmação de acesso

**Resultado atual:**  
O sistema exibe a mensagem: "Seu login está incorreto, quer continuar?"

**Observação técnica:**  
Há indício de falha na regra de exibição da mensagem ou inversão da lógica de validação/autenticação.

**Evidência:**  
<img width="1084" height="947" alt="image" src="https://github.com/user-attachments/assets/eb196a40-2cbf-4cd3-b11d-6a4b48dd2e21" />


---

## ⚠️ BUG008 - Modal de confirmação de login é fechado ao clicar fora, interrompendo o fluxo de autenticação

**Severidade:**  Baixa   
**Prioridade:**  Média   

**Descrição:** Ao clicar fora do modal de confirmação exibido após a tentativa de login, a caixa é fechada e o usuário retorna para a tela de login, sendo necessário clicar novamente em "Entrar" para retomar o fluxo.

**Passos para reproduzir:**
1. Acessar a página de login  
2. Inserir credenciais válidas
3. Clicar em "Entrar" 
4. Quando o modal for exibido, clicar fora da caixa de diálogo

**Resultado esperado:**  
O modal não deve ser fechado ao clicar fora, ou o sistema deve preservar o estado da autenticação sem exigir nova ação do usuário.

**Resultado atual:**  
O modal fecha, o usuário retorna para a tela de login e precisa clicar novamente em "Entrar".

**Observação técnica:**  
O modal aparenta permitir dismiss externo sem tratamento adequado do fluxo, causando quebra de experiência e possível perda de estado da ação iniciada.

**Evidência:**  
<img width="1084" height="947" alt="msedge_2026-04-16_18-59-23" src="https://github.com/user-attachments/assets/862e6c77-c8a8-4681-972b-1a01803b320d" />


---

## ⚠️ BUG009 - Modal de criação de item permite fechamento externo e não possui ação explícita de cancelamento

**Severidade:**  Baixa   
**Prioridade:**  Média   

**Descrição:** Ao clicar em "Criar" na tela de "Bancos de dados", é exibido um modal para adicionar novo item. Esse modal possui apenas o botão "Salvar" e não oferece uma ação explícita de cancelamento. Além disso, ao clicar fora do modal, ele é fechado e a informação digitada é perdida.

**Passos para reproduzir:**
1. Acessar a tela "Bancos de dados"
2. Clicar em "Criar" 
3. Digitar um nome no campo do modal  
4. Clicar fora da caixa de diálogo

**Resultado esperado:**  
- O modal deve possuir botão de "Cancelar" ou ícone de fechar  
- O clique fora não deve fechar o modal sem confirmação, ou o sistema deve preservar o valor digitado

**Resultado atual:**  
- O modal fecha ao clicar fora  
- O dado preenchido é perdido  
- Não existe ação explícita de cancelamento além do fechamento externo 

**Observação técnica:**  
O modal aparenta permitir dismiss externo sem tratamento do estado do formulário, causando perda de dados e quebra de fluxo.

**Evidência:**  
<img width="1084" height="947" alt="msedge_2026-04-16_20-01-17" src="https://github.com/user-attachments/assets/4860baba-330c-4acd-ab9a-1507af6028b3" />



---

## ⚠️ BUG010 - Sistema permite cadastro de múltiplos itens com o mesmo nome sem validação de duplicidade

**Severidade:**  Média   
**Prioridade:**  Média   

**Descrição:** Na funcionalidade de criação de itens em "Bancos de dados", o sistema permite cadastrar múltiplos registros com o mesmo nome, sem qualquer mensagem de validação ou aviso ao usuário.

**Passos para reproduzir:**
1. Acessar a tela "Bancos de dados"  
2. Clicar em "Criar"  
3. Informar um nome de item já existente  
4. Clicar em "Salvar"  

**Resultado esperado:**  
O sistema deve:
- impedir duplicidade, caso o nome deva ser único, ou
- informar claramente que nomes repetidos são permitidos, caso isso faça parte da regra de negócio

**Resultado atual:**  
O sistema cria múltiplos itens com o mesmo nome sem qualquer validação ou feedback

**Observação técnica:**  
Não está claro se a duplicidade é permitida por regra de negócio. Na ausência dessa definição na interface, o comportamento deve ser tratado como possível falha de validação ou falta de feedback funcional.

**Evidência:**  
<img width="1084" height="947" alt="msedge_2026-04-16_19-24-34" src="https://github.com/user-attachments/assets/1a19ba39-40bb-4402-a408-d8fbb607c0b0" />


---

## ⚠️ BUG010 - 

**Severidade:**  Baixa   
**Prioridade:**  Média   

**Descrição:** 

**Passos para reproduzir:**
1. An  
2. Is
3. C 
4. Qo

**Resultado esperado:**  
1

**Resultado atual:**  
O 

**Observação técnica:**  
O .

**Evidência:**  
(Adicionar print, video ou link)

---

## ⚠️ BUG010 - 

**Severidade:**  Baixa   
**Prioridade:**  Média   

**Descrição:** 

**Passos para reproduzir:**
1. An  
2. Is
3. C 
4. Qo

**Resultado esperado:**  
1

**Resultado atual:**  
O 

**Observação técnica:**  
O .

**Evidência:**  
(Adicionar print, video ou link)

---

## ⚠️ BUG010 - 

**Severidade:**  Baixa   
**Prioridade:**  Média   

**Descrição:** 

**Passos para reproduzir:**
1. An  
2. Is
3. C 
4. Qo

**Resultado esperado:**  
1

**Resultado atual:**  
O 

**Observação técnica:**  
O .

**Evidência:**  
(Adicionar print, video ou link)

---

## ⚠️ BUG010 - 

**Severidade:**  Baixa   
**Prioridade:**  Média   

**Descrição:** 

**Passos para reproduzir:**
1. An  
2. Is
3. C 
4. Qo

**Resultado esperado:**  
1

**Resultado atual:**  
O 

**Observação técnica:**  
O .

**Evidência:**  
(Adicionar print, video ou link)

---

## ⚠️ BUG010 - 

**Severidade:**  Baixa   
**Prioridade:**  Média   

**Descrição:** 

**Passos para reproduzir:**
1. An  
2. Is
3. C 
4. Qo

**Resultado esperado:**  
1

**Resultado atual:**  
O 

**Observação técnica:**  
O .

**Evidência:**  
(Adicionar print, video ou link)

---

## ⚠️ BUG010 - 

**Severidade:**  Baixa   
**Prioridade:**  Média   

**Descrição:** 

**Passos para reproduzir:**
1. An  
2. Is
3. C 
4. Qo

**Resultado esperado:**  
1

**Resultado atual:**  
O 

**Observação técnica:**  
O .

**Evidência:**  
(Adicionar print, video ou link)
