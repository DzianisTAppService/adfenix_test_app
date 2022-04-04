import React, { FC } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { v4 as uuid } from 'uuid';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

enum Cities {
  STOCKHOLM = 'Stockholm',
  GOTHENBURG = 'Gothenburg',
}
const ProfessionsList = [
  { name: Cities.STOCKHOLM, id: uuid() },
  { name: Cities.GOTHENBURG, id: uuid() },
];

const CityField: FC = () => {
  const { control } = useFormContext();

  return (
    <Controller
      name='city'
      control={control}
      defaultValue=''
      render={({ field: { onChange, value } }) => (
        <FormControl fullWidth>
          <InputLabel id='city-label' style={{ backgroundColor: '#fff' }}>
            City
          </InputLabel>
          <Select labelId='city-label' id='city' onChange={onChange} value={value}>
            {ProfessionsList.map(({ name, id }) => (
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

export default CityField;
