import React, { FC } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { FormControl, TextField } from '@mui/material';

const ExperienceField: FC = () => {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name='experience'
      render={() => (
        <FormControl fullWidth>
          <TextField id='experience' label='Experience' inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} />
        </FormControl>
      )}
    />
  );
};

export default ExperienceField;
