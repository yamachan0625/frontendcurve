import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen, fireEvent } from '@testing-library/react';
import { cleanup } from '@testing-library/react-hooks';
import DashboardIcon from '@material-ui/icons/Dashboard';

import { DrawerItem } from '~/components/molecules/DrawerItem';

afterEach(() => cleanup());

describe('<DrawerItem />', () => {
  it('itemsが存在する場合のdrawer開閉時のアイコンの挙動', () => {
    render(
      <DrawerItem
        name="Dashboard"
        items={[
          {
            name: 'Coming soon...',
            link: '',
          },
        ]}
        Icon={DashboardIcon}
        index={0}
      />
    );
    expect(screen.getByTestId('close-icon')).not.toBeNull();
    fireEvent.click(screen.getByTestId('drawer-open-button'));
    expect(screen.getByTestId('open-icon')).not.toBeNull();
  });
});
