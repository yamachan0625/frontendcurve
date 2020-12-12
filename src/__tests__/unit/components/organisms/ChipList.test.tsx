import React from 'react';
import { render, screen } from '@testing-library/react';
import { ChipList } from '~/components/molecules/ChipList';

describe('<ChipList />', () => {
  it('chipの数が3個存在する', () => {
    const chipList = ['React', 'Angular', 'Vue.js'];
    render(<ChipList chipList={chipList} />);

    const chipListLength = screen.getAllByTestId('chip-element').length;
    expect(chipListLength).toBe(chipList.length);
  });
});
