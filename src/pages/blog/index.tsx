import React, { Fragment } from 'react';
import BannerComponent from '@wyn/components/Common/Banner/Banner';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import { fontFamilies } from '@wyn/styles/fonts/fonts';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import BlogCardComponent from '@wyn/components/Common/BlogCard/BlogCard';
import { blogData } from '@wyn/utils/constants';
import DiscoverCategoriesComponent from '@wyn/components/Home/DiscoverCategories/DiscoverCategories';



const StyledBannerTitle = styled(Typography)(({ theme }) => ({
  fontSize: 80,
  fontFamily: fontFamilies.kameron,
  textAlign: 'center',
  [theme.breakpoints.only('xs')]: {
    fontSize: 40,
  },
}));

const StyledBlogSectionTitle = styled(Typography)(() => ({
  fontFamily: fontFamilies.workSans,
  textAlign: 'left',
  fontSize: 40,
}));

const BlogPage = () => {
  return (
    <Fragment>
      <BannerComponent
        alt="main-banner"
        desktopImgUrl="/images/blog_banner.svg"
        mobileImgUrl="/images/blog_banner.svg"
        contentNode={
          <StyledBannerTitle variant="h2">
            What You Need <br /> to know
          </StyledBannerTitle>
        }
      />
      <Box mt={5} mb={8}>
        <Container maxWidth="xl">
          <Box mb={4}>
            <StyledBlogSectionTitle variant="h2">
              Our blog posts
            </StyledBlogSectionTitle>
          </Box>
          <Grid container spacing={4}>
            {blogData.map((blog) => (
              <Grid key={blog._id} item md={4} lg={4} xs={12} xl={4}>
                <BlogCardComponent {...blog} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
      <DiscoverCategoriesComponent />
    </Fragment>
  );
};

export default BlogPage;
