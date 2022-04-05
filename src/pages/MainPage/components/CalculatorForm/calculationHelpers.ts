import { ProfessionTypes } from './ProfessionsField/ProfessionsField';
import { Cities } from './CityField/CityField';
import { IncomeYears } from './IncomeYearField/IncomeYearField';

type GetBasicSalary = (profession: ProfessionTypes) => number;
type GetExperienceInfluence = (data: { experience: number; basicSalary: number }) => number;
type GetExtraHighTax = (salary: number) => number;
type GetBasicTaxRate = (data: { city: Cities; incomeYear: IncomeYears }) => number;
type GetSalaryAfterTaxes = (data: {
  profession: ProfessionTypes;
  experience: number;
  city: Cities;
  incomeYear: IncomeYears;
}) => number;

const professionsBasicSalary = {
  [ProfessionTypes.DEVELOPER]: 30000,
  [ProfessionTypes.TEACHER]: 27000,
  [ProfessionTypes.CASHIER]: 25000,
};

const basicTaxRate = {
  [Cities.STOCKHOLM]: {
    [IncomeYears.YEAR_2019]: 0.3,
    [IncomeYears.YEAR_2020]: 0.29,
  },
  [Cities.GOTHENBURG]: {
    [IncomeYears.YEAR_2019]: 0.25,
    [IncomeYears.YEAR_2020]: 0.22,
  },
};

const getBasicSalary: GetBasicSalary = profession => professionsBasicSalary[profession];

const getExperienceInfluence: GetExperienceInfluence = ({ experience, basicSalary }) => {
  if (experience >= 0 && experience < 4) return basicSalary;
  if (experience >= 4 && experience < 8) return basicSalary * 1.2;
  if (experience >= 8 && experience < 11) return basicSalary * 1.4;
  //todo not sure if last "if" need
  return basicSalary * 1.6;
};

const getExtraHighTax: GetExtraHighTax = salary => {
  let extraTaxes = 0;
  if (salary > 36000 && salary <= 45000) {
    extraTaxes += (salary - 36000) * 0.5;
  }
  if (salary > 45000) {
    extraTaxes += (salary - 45000) * 0.7;
  }

  return extraTaxes;
};

const getBasicTaxRate: GetBasicTaxRate = ({ city, incomeYear }) => basicTaxRate[city][incomeYear];

export const getSalaryAfterTaxes: GetSalaryAfterTaxes = ({ profession, experience, city, incomeYear }) => {
  const basicSalary = getBasicSalary(profession);
  const finalSalary = getExperienceInfluence({ experience: +experience, basicSalary });

  const basicTaxRate = getBasicTaxRate({ city, incomeYear });

  const baseTaxesAmount = finalSalary * basicTaxRate;
  const extraTaxesAmount = getExtraHighTax(finalSalary);

  return finalSalary - baseTaxesAmount - extraTaxesAmount;
};
