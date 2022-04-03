import React, { FC, useEffect } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { Box, Button, Divider, Grid } from '@mui/material';

import ProfessionsField from './ProfessionsField';

const CalculatorForm: FC = () => {
  const methods = useForm();
  const { handleSubmit, watch, setValue } = methods;

  const organizationValue: string = watch('organization');

  useEffect(() => {
    setValue('users', []);
  }, [organizationValue]);

  const onSubmit = (data: any) => {
    console.log(data, 'submitted data');
  };

  return (
    <FormProvider {...methods}>
      <form>
        <Grid container direction='column' spacing={3}>
          <Grid item>
            <ProfessionsField />
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
      </form>
    </FormProvider>
  );
};

export default CalculatorForm;
