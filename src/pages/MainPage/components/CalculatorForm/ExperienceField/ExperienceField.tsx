import React, { FC } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { FormControl, TextField } from '@mui/material';

const ExperienceField: FC = () => {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name='experience'
      defaultValue=''
      render={({ field: { onChange, value } }) => (
        <FormControl fullWidth>
          <TextField
            type='number'
            id='experience'
            label='Experience'
            inputProps={{ inputMode: 'numeric', pattern: '[0-9]*', min: 0, max: 50 }}
            value={value}
            onChange={onChange}
          />
        </FormControl>
      )}
    />
  );
};

export default ExperienceField;
