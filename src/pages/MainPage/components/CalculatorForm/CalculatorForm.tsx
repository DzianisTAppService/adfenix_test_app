import React, { FC, useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { Box, Button, Divider, Grid } from '@mui/material';

import ProfessionsField from './ProfessionsField';
import ExperienceField from './ExperienceField';
import CityField from './CityField';
import IncomeYearField from './IncomeYearField';

const CalculatorForm: FC = () => {
  const [result, setResult] = useState<number>(0);

  const methods = useForm();
  const { handleSubmit } = methods;

  const onSubmit = (data: any) => {
    const { profession, experience, city, incomeYear } = data;

    console.log(data, 'submitted data');
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

            <Box mt={3}>
              <Divider />
            </Box>

            <Grid item container justifyContent='space-between' alignItems='center'>
              <Button onClick={handleSubmit(onSubmit)} variant='outlined'>
                Calculate
              </Button>

              <Grid item>{result ? `Result: ${result}` : 'No result was calculated'}</Grid>
            </Grid>
          </Grid>
        </Box>
      </form>
    </FormProvider>
  );
};

export default CalculatorForm;
