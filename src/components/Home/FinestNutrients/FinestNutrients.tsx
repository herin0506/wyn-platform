import Grid from '@mui/material/Grid';
import IconWithTextCardComponent from '@wyn/components/Common/IconWithText/IconWithText';
import SectionHeadingComponent from '@wyn/components/Common/SectionHeading/SectionHeading';
import SectionSpanComponent from '@wyn/components/Common/SectionHeading/SectionSpan';
import { finestNutrients } from '@wyn/utils/constants';
import React from 'react';
import { StyledHomeFinestNutrients } from './styled';

const FinestNutrientsContainer = () => {
  return (
    <StyledHomeFinestNutrients>
      <SectionHeadingComponent textAlign="center">
        Designed to deliver nature’s
        <SectionSpanComponent content=" finest nutrients." />
      </SectionHeadingComponent>
      <Grid spacing={3} container>
        {finestNutrients.map((item, index) => (
          <Grid key={index} xs={6} item md={2} lg={2} xl={2} sm={4}>
            <IconWithTextCardComponent
              iconUrl={item?.icon}
              label={item?.label}
            />
          </Grid>
        ))}
      </Grid>
    </StyledHomeFinestNutrients>
  );
};

export default FinestNutrientsContainer;
