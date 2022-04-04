import { ProfessionTypes } from './ProfessionsField/ProfessionsField';

export const professionsBasicSalary = {
  [ProfessionTypes.DEVELOPER]: 30.0,
  [ProfessionTypes.TEACHER]: 27.0,
  [ProfessionTypes.CASHIER]: 25.0,
};

export const getBasicSalary = (profession: ProfessionTypes) => professionsBasicSalary[profession];
export const getExperienceInfluence = ({ experience, salary }: { experience: number; salary: number }) => {
  if (experience >= 0 && experience < 4) return salary;
  if (experience >= 4 && experience < 8) return salary * 1.2;
  if (experience >= 8 && experience < 11) return salary * 1.4;
  if (experience > 11) return salary * 1.6;
  return console.log('experience should be more then 0');
};
