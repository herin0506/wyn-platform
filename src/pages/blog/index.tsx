import React from 'react';
import {  Container,Grid,Typography } from '@mui/material';
import BannerComponent from '@wyn/components/Common/Banner/Banner';
import { Fragment } from 'react';
import {Blog1,Blog2,Blog3,Blog4,Blog5} from '@wyn/components/Blog/Blog1'; 



const blogs = [Blog1, Blog2, Blog3, Blog4, Blog5];

const BlogPage = () => {
  return (
    <Fragment>
      <BannerComponent
        alt="main-banner"
        desktopImgUrl="/images/blog-banner.png"
        mobileImgUrl="/images/blog_mobile_banner.png"
      />
      <Container maxWidth="xl">
        <Typography variant='h4' pt={5} pb={2} mb={2} sx={{ borderBottom: "1px solid black" }}>
          Our Blog posts
        </Typography>
        <Grid container spacing={2} pb={8}>
          {blogs.map((Blog, index) => (
            <Grid key={index} item xs={12} lg={4} md={6} sm={6} xl={4}>
              <Blog />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Fragment>
  );
};

export default BlogPage;
