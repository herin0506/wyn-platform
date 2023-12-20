import {
  Box,
  Button,
  Container,
  Link,
  TextField,
  Typography,
} from '@mui/material';
import { useRouter } from 'next/router';
import { Fragment } from 'react';
import DiscoverCategoriesComponent from '@wyn/components/Home/DiscoverCategories/DiscoverCategories';

const WhyWynPage = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push('/signUp');
  };

  const handleNaviagte = () => {
    router.push('/forgotPassword');
  };

  const handleLogin = () => {
    router.push('/home');
  };
  return (
    <Fragment>
      <Box mt={14}>
        <Container maxWidth="xs" className="text-center">
          <Typography variant="h4" mb={2}>
            Log in to Access Women's Wellness Hub
          </Typography>
          <Typography variant="body2" mb={2}>
            Access WYN for Women's Wellness
          </Typography>

          <TextField
            fullWidth
            id="outlined-basic"
            label="Email"
            variant="outlined"
            className="my-4"
          />
          <TextField
            fullWidth
            id="outlined-basic"
            label="Password"
            variant="outlined"
            className="mb-4"
          />
          <Typography align="left" mb={3} variant="subtitle2">
            <Link onClick={handleNaviagte} sx={{ cursor: 'pointer' }}>
              Forgot your password?
            </Link>
          </Typography>
          <Button
            variant="contained"
            size="large"
            color="primary"
            onClick={handleLogin}
          >
            Sign In
          </Button>
          <Typography my={3} variant="subtitle2">
            <Link onClick={handleClick} mb={3} sx={{ cursor: 'pointer' }}>
              Create account?
            </Link>
          </Typography>
        </Container>
        <DiscoverCategoriesComponent />

      </Box>
    </Fragment>
  );
};

export default WhyWynPage;
