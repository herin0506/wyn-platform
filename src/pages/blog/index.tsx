import React from 'react';
import { Box, Container,Grid, Hidden, Typography } from '@mui/material';
import BannerComponent from '@wyn/components/Common/Banner/Banner';
import { Fragment } from 'react';
import {Blog1,Blog2,Blog3,Blog4,Blog5} from '@wyn/components/Blog/Blog1'; 



const BlogPage = () => {
  return ( 
  <Fragment>
    <BannerComponent
      alt="main-banner"
      desktopImgUrl="/images/blog-banner.png"
      mobileImgUrl="/images/blog_mobile_banner.png"
    />
    <Container maxWidth="xl">
      <Typography variant='h4' pt={5} pb={2} mb={2} sx={{borderBottom:"1px solid black"}}>
        Our Blog posts
      </Typography>
      <Grid container spacing={2} pb={8}>
         
          <Grid item xs={12} pb={2} lg={4} md={6} sm={6} xl={4}>
            <Blog1 />
          </Grid>
          <Grid item xs={12} lg={4} md={6} sm={6} xl={4}>
            <Blog2 />
          </Grid>
          <Grid item xs={12} lg={4} md={6} sm={6} xl={4}>
            <Blog3 />
          </Grid>
          <Grid item xs={12} lg={4} md={6} sm={6} xl={4}>
            <Blog4 />
          </Grid>
          <Grid item xs={12} lg={4} md={6} sm={6} xl={4}>
            <Blog5 />
          </Grid>
        </Grid>
    </Container>
  </Fragment>
  );
};

export default BlogPage;
