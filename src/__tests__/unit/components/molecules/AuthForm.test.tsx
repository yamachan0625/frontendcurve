import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import {
  act,
  render,
  screen,
  fireEvent,
  waitFor,
} from '@testing-library/react';
import { cleanup } from '@testing-library/react-hooks';
import { MockedProvider } from '@apollo/client/testing';

import { AuthForm } from '~/components/molecules/auth/Form';
import { AuthButton } from '~/components/atoms/auth/AuthButton';
import { LOGIN } from '~/queries/queries';

afterEach(() => cleanup());

beforeEach(() => {
  render(
    <MockedProvider mocks={[]} addTypename={false}>
      <AuthForm type={LOGIN} dataKey={'login'} buttonText={'ログイン'}>
        <AuthButton type="submit" />
      </AuthForm>
    </MockedProvider>
  );
});

describe('<AuthForm />', () => {
  it('値が存在しない場合のバリデーションテスト', async () => {
    const button = screen.getByTestId('auth-submit-button');
    fireEvent.submit(button);
    await waitFor(() => {
      new Promise((resolve) => setTimeout(resolve, 0));
    });
    expect(
      await screen.findByText(/メールアドレスは必須です/)
    ).toBeInTheDocument();
    expect(await screen.findByText(/パスワードは必須です/)).toBeInTheDocument();
  });

  it('値が不正である場合のバリデーションテスト', async () => {
    const emailTextBox = screen.getAllByRole('textbox')[0];
    const passwordTextBox = screen.getAllByRole('textbox')[1];
    fireEvent.change(emailTextBox, {
      target: {
        value: 'test',
      },
    });

    fireEvent.change(passwordTextBox, {
      target: {
        value: 'test',
      },
    });

    const button = screen.getByTestId('auth-submit-button');
    fireEvent.submit(button);

    await waitFor(() => {
      new Promise((resolve) => setTimeout(resolve, 0));
    });

    expect(
      await screen.findByText(/フォーマットが不適切です/)
    ).toBeInTheDocument();

    expect(
      await screen.findByText(/8文字以上100文字以下で入力してください/)
    ).toBeInTheDocument();
  });
});
