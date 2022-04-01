import React, { FC } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
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

type OrganizationType = {
  name: string;
  id: string;
};

enum ProfessionTypes {
  DEVELOPER = 'Developer',
  TEACHER = 'Teacher',
  CASHIER = 'Cashier',
}
const Professions = [ProfessionTypes.DEVELOPER, ProfessionTypes.TEACHER, ProfessionTypes.CASHIER];

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
          <Select
            labelId='organization-label'
            id='organization'
            onChange={onChange}
            value={organizationValue}
            renderValue={e => <Typography>{JSON.parse(e).name}</Typography>}>
            {/*add uuid with useMemo*/}
            {Professions.map(profession => (
              <MenuItem key={profession} value={JSON.stringify({ id, name })}>
                <RadioGroup aria-label={name} name={name}>
                  <FormControlLabel
                    control={<Radio checked={Boolean(organizationValue && id === JSON.parse(organizationValue).id)} />}
                    label={name}
                  />
                </RadioGroup>
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      )}
    />
  );
};

export default ProfessionsField;
