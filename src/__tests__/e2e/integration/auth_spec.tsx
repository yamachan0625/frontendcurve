describe('ユーザー認証テスト', () => {
  it('末ログイン時に/barChartに遷移しようとすると/authにリダイレクトされる', () => {
    cy.visit('/barChart');
    cy.url().should('include', '/auth');
  });

  it('認証切り替えができる', () => {
    cy.visit('/auth');
    cy.findByTestId('change-auth-button').click();
    cy.findByTestId('auth-title').should('have.text', 'Sign Up');
    cy.findByTestId('change-auth-button').click();
    cy.findByTestId('auth-title').should('have.text', 'Login to your acount');
  });

  it('登録済みメールアドレスで新規登録するとバリデーションで弾かれる', () => {
    cy.visit('/auth');
    cy.findByTestId('change-auth-button').click();
    cy.findByTestId('auth-title').should('have.text', 'Sign Up');
    cy.findByRole('textbox').type('test@test.com');
    cy.findByLabelText('パスワード').type('12345aiueo');
    cy.findByTestId('signup-button').click();
    cy.url().should('include', '/auth');
  });

  it('不正メールアドレス入力時ログインできない(/authから遷移しない)', () => {
    cy.visit('/auth');
    cy.findByRole('textbox').type('test2@test.com');
    cy.findByLabelText('パスワード').type('12345aiueo');
    cy.findByTestId('login-button').click();
    cy.url().should('include', '/auth');
  });

  it('不パスワード入力時ログインできない(/authから遷移しない)', () => {
    cy.visit('/auth');
    cy.findByRole('textbox').type('test@test.com');
    cy.findByLabelText('パスワード').type('passpass');
    cy.findByTestId('login-button').click();
    cy.url().should('include', '/auth');
  });

  it('正しいメールアドレスとパスワードを入力しログインすると/barChartに遷移する', () => {
    cy.visit('/auth');
    cy.findByRole('textbox').type('test@test.com');
    cy.findByLabelText('パスワード').type('12345aiueo');
    cy.findByTestId('login-button').click();
    cy.url().should('include', '/barChart');
  });

  it('ログアウトが正常に動作する', () => {
    cy.findByTestId('user-info-button').click();
    cy.findByTestId('logout-button').click();
    cy.url().should('include', '/auth');
  });
});

export {};
