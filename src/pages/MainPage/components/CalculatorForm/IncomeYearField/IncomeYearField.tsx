import React, { FC } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { v4 as uuid } from 'uuid';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

enum IncomeYears {
  YEAR_2020 = 2020,
  YEAR_2019 = 2019,
}
const IncomeYearsList = [
  { name: IncomeYears.YEAR_2020, id: uuid() },
  { name: IncomeYears.YEAR_2019, id: uuid() },
];

const IncomeYearField: FC = () => {
  const { control } = useFormContext();

  return (
    <Controller
      name='income-year'
      control={control}
      defaultValue=''
      render={({ field: { onChange, value } }) => (
        <FormControl fullWidth>
          <InputLabel id='income-year-label' style={{ backgroundColor: '#fff' }}>
            Income year
          </InputLabel>
          <Select labelId='income-year-label' id='income-year' onChange={onChange} value={value}>
            {IncomeYearsList.map(({ name, id }) => (
              <MenuItem key={id} value={name}>
                {name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      )}
    />
  );
};

export default IncomeYearField;
