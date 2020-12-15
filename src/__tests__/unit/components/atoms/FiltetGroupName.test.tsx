import React from 'react';
import { render, screen } from '@testing-library/react';
import { FilterGroupName } from '~/components/atoms/FilterGroupName';

describe('<FilterGroupName />', () => {
  it('chipの数が3個存在する', () => {
    const name = '並び順';
    render(<FilterGroupName name={name}></FilterGroupName>);

    const filterName = screen.getByTestId('filter-name');
    expect(filterName.innerHTML).toBe('並び順');
  });
});
