import React, { createContext, useContext } from 'react';

export const SelectSkillContext = createContext({
  selectedSkills: ['React', 'VueJs', 'Angular'],
  callSetSelectSkills: (skills) => {},
});

export const SelectSkillProvider = ({ children }) => {
  const [selectedSkills, setSelectedSkills] = React.useState([
    'React',
    'VueJs',
    'Angular',
  ]);

  const callSetSelectSkills = (skills: string[]) => {
    setSelectedSkills(skills);
  };

  return (
    <SelectSkillContext.Provider
      value={{
        selectedSkills,
        callSetSelectSkills,
      }}
    >
      {children}
    </SelectSkillContext.Provider>
  );
};

export const useSelectSkill = () => {
  const context = useContext(SelectSkillContext);
  return context;
};
