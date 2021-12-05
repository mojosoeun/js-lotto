// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 4521d20 (로또 미션 1단계 구현 및 관련 테스트 구현)
Cypress.Commands.add("inputPrice", (price) => {
  cy.get('#LottoForm input[type="number"]').type(price);
  cy.get("#LottoForm form").submit();
});

Cypress.Commands.add("checkToggle", () => {
  cy.get(".lotto-numbers-toggle-button").check({ force: true });
});

Cypress.Commands.add("unCheckToggle", () => {
  cy.get(".lotto-numbers-toggle-button").uncheck({ force: true });
});
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> eb57930 (로또 미션 step1 개발환경 설정)
=======
>>>>>>> 4521d20 (로또 미션 1단계 구현 및 관련 테스트 구현)
=======

Cypress.Commands.add("clickRetry", () => {
  cy.get("#retry-btn").click();
});

Cypress.Commands.add("checkResult", () => {
  cy.get(".open-result-modal-button").click();
});

Cypress.Commands.add("inputWinningNumbers", ({ winningNumbers = [], bonusNumber = "" }) => {
  cy.get(".winning-number").each((el, index) => {
    console.log("winningNumbers[index]", winningNumbers[index]);
    cy.get(el).type(winningNumbers[index]);
  });

  cy.get(".bonus-number").type(bonusNumber);
});
>>>>>>> 4a90d7b ([클린코드 1기 이소은] 로또 미션 STEP 2)
