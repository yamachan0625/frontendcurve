import React from 'react';
import { NextPage } from 'next';

import { MainTemplate } from '~/components/templates/MainTemplate';
import { WithTheme } from '~/components/templates/WithTheme';
import { ChangePasswordTemplate } from '~/components/templates/changePassword/ChangePasswordTemplate';
import { useProtectRoute } from '~/contexts/auth';

const ChangePassword: NextPage = () => {
  useProtectRoute();

  return (
    <WithTheme>
      <MainTemplate>
        <ChangePasswordTemplate />
      </MainTemplate>
    </WithTheme>
  );
};

export default ChangePassword;
