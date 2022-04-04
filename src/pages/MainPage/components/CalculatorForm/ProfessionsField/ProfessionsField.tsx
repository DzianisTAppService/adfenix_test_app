import React, { FC } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { v4 as uuid } from 'uuid';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

export enum ProfessionTypes {
  DEVELOPER = 'Developer',
  TEACHER = 'Teacher',
  CASHIER = 'Cashier',
}
const Professions = [
  { name: ProfessionTypes.DEVELOPER, id: uuid() },
  { name: ProfessionTypes.TEACHER, id: uuid() },
  { name: ProfessionTypes.CASHIER, id: uuid() },
];

const ProfessionsField: FC = () => {
  const { control } = useFormContext();

  return (
    <Controller
      name='profession'
      control={control}
      defaultValue=''
      render={({ field: { onChange, value } }) => (
        <FormControl fullWidth>
          <InputLabel id='profession-label' style={{ backgroundColor: '#fff' }}>
            Profession
          </InputLabel>
          <Select labelId='profession-label' id='profession' onChange={onChange} value={value}>
            {Professions.map(({ name, id }) => (
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

export default ProfessionsField;
