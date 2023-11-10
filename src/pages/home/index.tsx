import { Fragment } from 'react';
import Container from '@mui/material/Container';
import HomeBannerComponent from '@wyn/components/Home/Banner/Banner';
import FinestNutrientsComponent from '@wyn/components/Home/FinestNutrients/FinestNutrients';
import ProductsSliderComponent from '@wyn/components/Home/ProductsSlider/ProductsSlider';
import WynIngProductsComponent from '@wyn/components/Home/WynIngProducts/WynIngProducts';
import TestimonialsSliderComponent from '@wyn/components/Home/TestimonialsSlider/TestimonialsSlider';
import DiscoverCategoriesComponent from '@wyn/components/Home/DiscoverCategories/DiscoverCategories';
import MintsScienceComponent from '@wyn/components/Home/MintsScience/MintsScience';
import NaturalHerbsContainer from '@wyn/components/Home/NaturalHerbs/NaturalHerbs';
import GeneralHealthIssuesComponent from '@wyn/components/Home/WomenGeneralHealthIssues/WomenGeneralHealthIssues';
import WomenWellnessComponent from '@wyn/components/Home/WomenWellness/WomenWellness';

const HomePage = () => {
  return (
    <Fragment>
      <HomeBannerComponent />
      <Container maxWidth="lg">
        <FinestNutrientsComponent />
      </Container>
      <Container disableGutters maxWidth="xl">
        <NaturalHerbsContainer />
        <MintsScienceComponent />
      </Container>
      <Container maxWidth="xl">
        <ProductsSliderComponent />
        <WynIngProductsComponent />
        <TestimonialsSliderComponent />
      </Container>
      <Container maxWidth="lg">
        <GeneralHealthIssuesComponent />
      </Container>
      <Container maxWidth="xl">
        <WomenWellnessComponent />
      </Container>
      <DiscoverCategoriesComponent />
    </Fragment>
  );
};
export default HomePage;
