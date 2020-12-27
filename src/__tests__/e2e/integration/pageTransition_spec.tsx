describe('ページ遷移テスト', () => {
  it('各種ページに遷移できるかどうか', () => {
    // ログイン ~> /barChart
    cy.visit('/auth');
    cy.findByRole('textbox').type('test@test.com');
    cy.findByLabelText('パスワード').type('1234aiueo');
    cy.findByTestId('login-button').click();
    cy.url().should('include', '/barChart');

    // /lineChartに遷移
    cy.findAllByTestId('LineChart-link-button').eq(0).click();
    cy.url().should('include', '/lineChart');

    // /user/changePassword/${hash}に遷移
    cy.findByTestId('user-info-button').click();
    cy.findByTestId('changePassword-link-button').click();
    cy.contains('新しいパスワード再入力');

    // privacyPolucyページに遷移
    cy.contains('利用規約・プライバシーポリシー').click();
    cy.url().should('include', '/privacyPolicy');
  });
});

export {};
