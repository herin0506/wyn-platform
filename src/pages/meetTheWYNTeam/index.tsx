import BannerComponent from '@wyn/components/Common/Banner/Banner'
import { Container } from '@mui/material';
import React ,{Fragment} from 'react'
import DiscoverCategoriesComponent from '@wyn/components/Home/DiscoverCategories/DiscoverCategories';
import MainBlog from '@wyn/components/MeetTheWYNTeam/MainBlog';
import TeamInfo from '@wyn/components/MeetTheWYNTeam/TeamInfo';

const index = () => {
  return (
    <Fragment>
      <BannerComponent 
        alt='Meet-The-Team'
        desktopImgUrl="/images/meetTheWynTeam_banner.png"
        mobileImgUrl="/images/meetTheWynTeam_banner.png"
      />
      <Container maxWidth="xl">
        <MainBlog/>
        <TeamInfo/>
      </Container>
      <DiscoverCategoriesComponent/>
    </Fragment>
  )
}

export default index