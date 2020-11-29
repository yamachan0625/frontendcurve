import React, { createContext, useContext } from 'react';

const SelectSkillContext = createContext({
  selectedSkills: ['React', 'VueJs', 'Angular'],
  callSetSelectedSkills: (skills) => {},
});

export const SelectSkillProvider = ({ children }) => {
  const [selectedSkills, setSelectedSkills] = React.useState([
    'React',
    'VueJs',
    'Angular',
  ]);

  const callSetSelectedSkills = (skills: string[]) => {
    setSelectedSkills(skills);
  };

  return (
    <SelectSkillContext.Provider
      value={{
        selectedSkills,
        callSetSelectedSkills,
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
