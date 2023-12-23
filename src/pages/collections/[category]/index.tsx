import React, { useEffect, useState } from 'react';
import CollectionInfoComponent from '@wyn/components/Common/CollectionInfo/CollectionInfo';
import Grid from '@mui/material/Grid';
import ProductCardComponent from '@wyn/components/Common/ProductCard/ProductCard';
import { ourProducts } from '@wyn/utils/constants';
import Container from '@mui/material/Container';
import { styled } from '@mui/material/styles';
import { useParams } from 'next/navigation';
import {
  Box,
  Button,
  Card,
  Checkbox,
  Link,
  TextField,
  Typography,
  Divider,
} from '@mui/material';
import _ from 'lodash';

const StyledCollectionPageContainer = styled(Container)(() => ({
  paddingTop: 150,
  paddingBottom: 150,
}));

const DailyHealth = () => {
  const params = useParams();
  const [category, setCategory] = useState<any>(null);

  useEffect(() => {
    const _findCategory = _.filter(
      ourProducts,
      (category) => category.label === params?.category,
    );
    console.log(_findCategory);
    if (_findCategory) {
      setCategory({
        ..._findCategory[0],
      });
    }
  }, [params?.category]);

  return (
    <StyledCollectionPageContainer maxWidth="xl">
      <Typography variant="h3" mt={0} mb={0}>
        {category?.heading}
      </Typography>
      <Box mt={4} mb={4}>
        <Grid container spacing={5}>
          {category?.products?.map((product: any) => (
            <Grid key={product?._id} item md={3}>
              <ProductCardComponent product={product} />
            </Grid>
          ))}
        </Grid>
      </Box>
      <CollectionInfoComponent
        title={category?.title}
        subTitle={category?.subTitle}
        infoContent={category?.description}
      />
    </StyledCollectionPageContainer>
  );
};

export default DailyHealth;
