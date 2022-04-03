import React, { FC } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { v4 as uuid } from 'uuid';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

enum ProfessionTypes {
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
  const { control, watch } = useFormContext();
  const organizationValue: string = watch('organization');

  return (
    <Controller
      name='profession'
      control={control}
      render={({ field: { onChange } }) => (
        <FormControl fullWidth>
          <InputLabel id='organization-label' style={{ backgroundColor: '#fff' }}>
            Organisation
          </InputLabel>
          <Select labelId='organization-label' id='organization' onChange={onChange} value={organizationValue}>
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
