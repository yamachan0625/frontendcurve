describe('パスワード変更', () => {
  it('パスワードが変更されるかどうか', () => {
    // ログイン
    cy.visit('/auth');
    cy.findByRole('textbox').type('pstest@example.com');
    cy.findByLabelText('パスワード').type('pstest0000');
    cy.findByTestId('login-button').click();
    cy.url().should('include', '/barChart');

    // パスワード変更ページに遷移
    cy.findByTestId('user-info-button').click();
    cy.findByTestId('changePassword-link-button').click();

    // パスワード再設定
    cy.findAllByRole('textbox').eq(0).type('pstest0000');
    cy.findAllByRole('textbox').eq(1).type('pstest0001');
    cy.findAllByRole('textbox').eq(2).type('pstest0001');
    cy.findByTestId('changePassword-submit-button').click();

    //ログアウト
    cy.findByTestId('user-info-button').click();
    cy.findByTestId('logout-button').click();
    cy.url().should('include', '/auth');

    // 新しいパスワードを利用し再ログイン
    cy.findByRole('textbox').type('pstest@example.com');
    cy.findByLabelText('パスワード').type('pstest0001');
    cy.findByTestId('login-button').click();
    cy.url().should('include', '/barChart');

    // パスワード変更ページに遷移
    cy.findByTestId('user-info-button').click();
    cy.findByTestId('changePassword-link-button').click();

    // テスト用パスワードを元に戻す
    cy.findAllByRole('textbox').eq(0).type('pstest0001');
    cy.findAllByRole('textbox').eq(1).type('pstest0000');
    cy.findAllByRole('textbox').eq(2).type('pstest0000');
    cy.findByTestId('changePassword-submit-button').click();
  });
});
export {};
