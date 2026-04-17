describe('Bancos de dados - Colmeia', () => {

  beforeEach(() => {
    cy.visit('https://teste-colmeia-qa.colmeia-corp.com/')

    cy.get('input').eq(0).type('qa@test.com')
    cy.get('input').eq(1).type('123456')
    cy.contains('Entrar').click()
    cy.contains('Continuar').click()

    cy.url().should('include', '/dashboard')
    cy.contains('Candidato').should('be.visible')

    cy.get('a[routerlink="/dashboard/campanha"]').click({ force: true })
    cy.contains('Bancos de dados').click()
  })

  it('Deve acessar a área de Bancos de dados', () => {
    cy.contains('Nome do banco de dados').should('be.visible')
  })

  it('Deve abrir o modal de criação de item', () => {
    cy.contains('Criar').click()

    cy.contains('Adicionar novo item').should('be.visible')
    cy.contains('Salvar').should('be.visible')
  })

  it('Deve exibir validação ao tentar salvar item sem nome', () => {
    cy.contains('Criar').click()
    cy.contains('Salvar').click()

    cy.contains('O nome do item é obrigatório').should('be.visible')
  })

  it('Deve criar um novo banco de dados', () => {
    const nomeBanco = `Banco Cypress ${Date.now()}`

    cy.contains('Criar').click()
    cy.get('input[placeholder="Nome do item"]').type(nomeBanco)
    cy.contains('Salvar').click()

    cy.contains(nomeBanco).should('be.visible')
  })

  it('Deve permitir criar bancos de dados com nomes duplicados', () => {
    const nomeBanco = `Banco Duplicado ${Date.now()}`

    // Primeiro item
    cy.contains('Criar').click()
    cy.get('input[placeholder="Nome do item"]').type(nomeBanco)
    cy.contains('Salvar').click()

    cy.contains(nomeBanco).should('be.visible')

    // Segundo item com mesmo nome
    cy.contains('Criar').click()
    cy.get('input[placeholder="Nome do item"]').type(nomeBanco)
    cy.contains('Salvar').click()

    // Valida duplicidade
    cy.get('body').then(($body) => {
      const ocorrencias = $body.find(`:contains("${nomeBanco}")`).length
      expect(ocorrencias).to.be.greaterThan(1)
    })
  })

})