import React, { FC } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { v4 as uuid } from 'uuid';
import {
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  Typography,
} from '@mui/material';

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
      name='organization'
      control={control}
      render={({ field: { onChange } }) => (
        <FormControl fullWidth>
          <InputLabel id='organization-label' style={{ backgroundColor: '#fff' }}>
            Organisation
          </InputLabel>
          <Select labelId='organization-label' id='organization' onChange={onChange} value={organizationValue}>
            {/*// renderValue={e => <Typography>{JSON.parse(e).name}</Typography>}>*/}
            {Professions.map(({ name, id }) => (
              <MenuItem key={id} value={name}>
                {name}
                {/*<RadioGroup aria-label={name} name={name}>*/}
                {/*  <FormControlLabel*/}
                {/*    control={<Radio checked={Boolean(organizationValue && id === JSON.parse(organizationValue).id)} />}*/}
                {/*    label={name}*/}
                {/*  />*/}
                {/*</RadioGroup>*/}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      )}
    />
  );
};

export default ProfessionsField;
