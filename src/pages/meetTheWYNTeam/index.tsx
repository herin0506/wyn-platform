import BannerComponent from '@wyn/components/Common/Banner/Banner'
import { Container,Hidden } from '@mui/material';

import React ,{Fragment} from 'react'
import HorizontalSplitComponent from '@wyn/components/Common/HorizontalSplit/HorizontalSplit';
import HorizontalContentSectionComponent from '@wyn/components/Common/HorizontalContentSection/HorizontalContentSection';
import { meetTheWynTeam } from '@wyn/utils/constants';
import DiscoverCategoriesComponent from '@wyn/components/Home/DiscoverCategories/DiscoverCategories';
import HorizontalImageSectionComponent from '@wyn/components/Common/HorizontalImageSection/HorizontalImageSection';
import MainBlog from '@wyn/components/MeetTheWYNTeam/MainBlog';

const index = () => {
  return (
    <Fragment>
        <BannerComponent 
        alt='Meet-The-Team'
        desktopImgUrl="/images/meetTheWynTeam_banner.png"
        mobileImgUrl="/images/meetTheWynTeam_banner.png"
         
        />
        
        <MainBlog/>
      <Container maxWidth="xl">
        <Hidden only={"xs"}>
          <HorizontalSplitComponent 
          leftComponent={
            <HorizontalContentSectionComponent {...meetTheWynTeam[1]}></HorizontalContentSectionComponent>
          }
          rightComponent={
            <HorizontalImageSectionComponent
            alt='Mr.Snehal Gersappa'
            src='/images/snehal-gersappa.png'/>
          }
          />
          <HorizontalSplitComponent
          leftComponent={
            <HorizontalImageSectionComponent
            alt='Dr.Satish Vaidya'
            src='/images/satish-vaidya.png'/>
          }
          rightComponent={
            <HorizontalContentSectionComponent {...meetTheWynTeam[2]}/>
          }/>
          <HorizontalSplitComponent
          leftComponent={
            <HorizontalContentSectionComponent {...meetTheWynTeam[3]}/>
          }
          rightComponent={
            <HorizontalImageSectionComponent
            alt='Mr. Sagar Tungare'
            src='/images/sagar-tungare.png'/>
          }/>
        </Hidden>
        <Hidden only={["xl","lg","sm","md"]}>
          <HorizontalSplitComponent 
          leftComponent={
            <HorizontalImageSectionComponent
            alt='Mr.Snehal Gersappa'
            src='/images/snehal-gersappa.png'/>
            
          }
          rightComponent={
            <HorizontalContentSectionComponent {...meetTheWynTeam[1]}></HorizontalContentSectionComponent>
          }
          />
          <HorizontalSplitComponent
          leftComponent={
            <HorizontalImageSectionComponent
            alt='Dr.Satish Vaidya'
            src='/images/satish-vaidya.png'/>
          }
          rightComponent={
            <HorizontalContentSectionComponent {...meetTheWynTeam[2]}/>
          }/>
          <HorizontalSplitComponent
          leftComponent={
            <HorizontalImageSectionComponent
            alt='Mr. Sagar Tungare'
            src='/images/sagar-tungare.png'/>
          }
          rightComponent={
            <HorizontalContentSectionComponent {...meetTheWynTeam[3]}/>
 
            
          }/>

          </Hidden>
        </Container>
        <DiscoverCategoriesComponent/>
    </Fragment>
  )
}

export default index