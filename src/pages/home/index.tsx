import { Typography, Button } from '@mui/material';
import { useRouter } from 'next/router';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { Fragment, useState } from 'react';
import JoinUsModelComponent from '@wyn/components/JoinUsModel/JoinUsModel';

//import styles from '../../styles/authentication.module.css';

export default function Home() {
  const router = useRouter();
  const [open, setOpen] = useState<boolean>(false);

  const handleLogout = () => {
    router.push('/login');
  };

  const StyledBannerBoxWrapper = styled(Box)(({ theme }) => ({
    minHeight: 400,
    backgroundColor: theme.palette.grey[100],
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    '& .MuiTypography-h3': {
      fontWeight: 300,
      '& span': {
        fontWeight: 600,
      },
    },
  }));

  return (
    <StyledBannerBoxWrapper>
      <Container maxWidth="lg">
        <Grid container>
          <Grid item md={6}>
            <Typography variant="h3">
              Explore your journey of change with <span>feminine care</span>
            </Typography>
            <Box mt={4}>
              <Grid container spacing={2}>
                <Grid item>
                  <Button
                    //  className="signinButton"
                    variant="contained"
                    size="large"
                    color="primary"
                    onClick={handleLogout}
                  >
                    Logout
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    //  className="signinButton"
                    variant="outlined"
                    size="large"
                    color="primary"
                    onClick={() => setOpen(true)}
                  >
                    Join Us
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Grid>
          <Grid item md={6}></Grid>
        </Grid>
      </Container>
      <JoinUsModelComponent
        dialogProps={{ open: open, maxWidth: 'lg' }}
        onClickCloseAction={() => setOpen(false)}
      />
    </StyledBannerBoxWrapper>
  );
}
