/// <reference types="cypress" />

describe('My Firest Test', () => {
  it('Visits the kitchen sink', () => {
    cy.visit('localhost:5173');
    cy.contains('Add New User').click();
    cy.get('#fullname').type('Jerry Nwosu');
    cy.get('#photourl').type('https://example.com/jerry.jpg');
    cy.get('#description').type('I am a software engineer from Lagos, Nigeria');
    cy.contains('Submit').click();
  });
});
