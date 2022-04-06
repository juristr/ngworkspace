describe('ngui', () => {
  beforeEach(() => cy.visit('/iframe.html?id=helloworldcomponent--primary'));
  it('should render the component', () => {
    cy.get('ngworkspace-helloworld').should('exist');
  });
});