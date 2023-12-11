import React from 'react'
import HorizontalImageSectionComponent from '../Common/HorizontalImageSection/HorizontalImageSection'
import HorizontalContentSectionComponent from '../Common/HorizontalContentSection/HorizontalContentSection'
import { ShefaliTungareInfo } from '@wyn/utils/constants'
import { Container, Hidden } from '@mui/material'

const MainBlog = () => {
  return (
   <Container maxWidth="lg" sx={{marginTop:5}}>
    <Hidden only={["lg","md","sm","xl"]} >
    <HorizontalImageSectionComponent
    alt='Dr. SHefali Tungare' 
    src='/images/birth.png'/>
    </Hidden>
    <Hidden only={"xs"}>
      <HorizontalImageSectionComponent
      alt='Dr. Shefali Tungare' 
      src='/images/shefali-tungare-desktop.png' />
    </Hidden>
    <HorizontalContentSectionComponent {...ShefaliTungareInfo}/>
   </Container>
  )
}

export default MainBlog;
