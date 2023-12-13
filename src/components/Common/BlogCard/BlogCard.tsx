import { Avatar, Box, Grid, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import React from 'react';
import Image from 'next/image';
import { fontFamilies } from '@wyn/styles/fonts/fonts';

interface StyledBlogCardComponentProps {
  imgUrl: string;
  title: string;
  description?: string;
  author?: string;
  authorImage?:string;
}

const StyledBlogCardComponent = styled(Box)(({ theme }) => ({
  width: '100%',
  '& .__image_wrapper': {
    width: '100%',
    height: 400,
    position: 'relative',
    marginBottom: 20,
  },
  '& .__title': {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    WebkitLineClamp: '2',
    WebkitBoxOrient: 'vertical',
    fontFamily: fontFamilies.workSans,
    fontWeight: 300,
    '&:hover': {
      textDecoration: 'underline',
    },
  },
  '& .__content': {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    WebkitLineClamp: '3',
    WebkitBoxOrient: 'vertical',
  },
  '& .__author': {
    fontSize: 16,
  },
}));

const BlogCardComponent = ({
  imgUrl,
  title,
  description,
  author,
  authorImage
}: StyledBlogCardComponentProps) => {
  return (
    <StyledBlogCardComponent>
      <Box component="div" className="__image_wrapper">
        <Image src={imgUrl} alt={title} fill objectFit="cover" />
      </Box>
      <Typography className="__title" variant="body1" mb={1}>
        {title}
      </Typography>
      <Typography className="__content" variant="body2">
        {description}
      </Typography>
      {author && (
        <Box mt={2} mb={2}>
          <Grid container alignItems="center" spacing={2}>
            <Grid item>
              <Avatar
                sx={{ width: 30, height: 30 }}
                alt={author}
                src={authorImage}
              />
            </Grid>
            <Grid item xs>
              <Typography className="__author" variant="body1">
                {author}
              </Typography>
            </Grid>
          </Grid>
        </Box>
      )}
    </StyledBlogCardComponent>
  );
};

export default BlogCardComponent;
