import React, { FC } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { Box, Button, Divider, Grid } from '@mui/material';

import ProfessionsField from './ProfessionsField';
import ExperienceField from './ExperienceField';
import CityField from './CityField';
import IncomeYearField from './IncomeYearField';

const CalculatorForm: FC = () => {
  const methods = useForm();
  const { handleSubmit, getValues, watch } = methods;
  const profession = watch('profession');

  const onSubmit = (data: any) => {
    console.log(data, 'submitted data');
    console.log(getValues(), 'getValues');
    console.log(profession, 'profession');
  };

  return (
    <FormProvider {...methods}>
      <form>
        <Box width={500} p={3} border='1px solid grey' borderRadius={5}>
          <Grid container direction='column' spacing={3}>
            <Grid item>
              <ProfessionsField />
            </Grid>

            <Grid item>
              <ExperienceField />
            </Grid>

            <Grid item>
              <CityField />
            </Grid>

            <Grid item>
              <IncomeYearField />
            </Grid>

            <Box my={3}>
              <Divider />
            </Box>

            <Grid item container justifyContent='flex-end'>
              <Button onClick={handleSubmit(onSubmit)} variant='outlined'>
                Submit
              </Button>
            </Grid>
          </Grid>
        </Box>
      </form>
    </FormProvider>
  );
};

export default CalculatorForm;
