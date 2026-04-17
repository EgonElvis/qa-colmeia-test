describe('Login Colmeia', () => {
  beforeEach(() => {
    cy.visit('https://teste-colmeia-qa.colmeia-corp.com/')
  })

  it('Deve acessar a tela de login', () => {
    cy.contains('Login').should('be.visible')
  })

  it('Deve exibir os campos de email e senha', () => {
    cy.get('input').should('have.length.at.least', 2)
  })

  it('Deve exibir popup após login com credenciais válidas', () => {
    cy.get('input').eq(0).type('qa@test.com')
    cy.get('input').eq(1).type('123456')
    cy.contains('Entrar').click()

    cy.contains('Seu login está incorreto, quer continuar?').should('be.visible')
    cy.contains('Continuar').should('be.visible')
  })

  it('Deve acessar o dashboard ao clicar em continuar', () => {
    cy.get('input').eq(0).type('qa@test.com')
    cy.get('input').eq(1).type('123456')
    cy.contains('Entrar').click()
    cy.contains('Continuar').click()

    cy.url().should('include', '/dashboard')
    cy.contains('Candidato').should('be.visible')
  })
})