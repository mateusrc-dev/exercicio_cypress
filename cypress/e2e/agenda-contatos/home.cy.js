/// <reference types="cypress" />

describe('testes para a home', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })

    it('deve ser possível adicionar um novo contato', () => {
        cy.get('input[type="text"]').type('mateus carvalho')
        cy.get('input[type="email"]').type('mateus@email.com')
        cy.get('input[type="tel"]').type('11 12345678')
        cy.get('.adicionar').click()

        cy.get('.sc-eDDNvR li').should('contain.text', 'mateus carvalho')
    })

    it('deve ser possível alterar um novo existente', () => {
        cy.get('.edit').last().click()
        cy.get('input[type="text"]').clear().type('Mateus Raimundo de Carvalho')
        cy.get('.alterar').click()

        cy.get('.sc-eDDNvR li').should('contain.text', 'Mateus Raimundo de Carvalho')
    })

    it('deve ser possível deletar um contato', () => {
        cy.get('.delete').last().click()

        cy.get('.sc-eDDNvR li').should('not.contain.text', 'Mateus Raimundo de Carvalho')
    })
})