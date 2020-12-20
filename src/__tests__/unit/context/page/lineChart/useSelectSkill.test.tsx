import React from 'react';
import { renderHook, act, cleanup } from '@testing-library/react-hooks';

import {
  SelectSkillProvider,
  useSelectSkill,
} from '~/contexts/page/lineChart/selectSkill';

afterEach(() => cleanup());

describe('useSelectSkill', () => {
  it('selectedSkillsの検証', () => {
    const wrapper = ({ children }) => (
      <SelectSkillProvider>{children}</SelectSkillProvider>
    );
    const { result } = renderHook(() => useSelectSkill(), {
      wrapper,
    });
    expect(result.current.selectedSkills).toEqual([
      'React',
      'VueJs',
      'Angular',
    ]);
    act(() => {
      result.current.callSetSelectSkills([
        'React',
        'VueJs',
        'Angular',
        'Node.js',
      ]);
    });
    expect(result.current.selectedSkills).toEqual([
      'React',
      'VueJs',
      'Angular',
      'Node.js',
    ]);
  });
});
