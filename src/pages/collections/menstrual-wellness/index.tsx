import React from 'react';
import CollectionInfoComponent from '@wyn/components/Common/CollectionInfo/CollectionInfo';
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { menstrualWellnessProducts } from '@wyn/utils/constants';
import ProductCardComponent from '@wyn/components/Common/ProductCard/ProductCard';
const StyledCollectionPageContainer = styled(Container)(() => ({
  paddingTop: 150,
  paddingBottom: 150,
}));

const MenstrualWellness = () => {
  return (
    <StyledCollectionPageContainer maxWidth="xl">
      <CollectionInfoComponent
        title="Menstrual wellness"
        subTitle="Discover WYN's Ayurvedic Medicine for Irregular Periods"
        infoContent="Ayurvedic Medicine for Irregular Periods by WYN"
      />
      <Box mt={4}>
        <Grid container spacing={{xs:2,md:5}}>
          {menstrualWellnessProducts.map((product) => (
            <Grid key={product?._id} item md={3} xs={6} sm={4} lg={3}>
              <ProductCardComponent {...product} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </StyledCollectionPageContainer>
  );
};

export default MenstrualWellness;
