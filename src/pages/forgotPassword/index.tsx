import React from 'react';
import { Typography, TextField, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useRouter } from 'next/router';

const useStyles = makeStyles(() => ({
  sectionOne: {
    marginBottom: '24px',
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100%',
    boxShadow: 'none !important',
    margin: '0',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    rowGap: '20px',
    width: '30%',
  },
  forgotText: {
    textDecoration: 'underline',
    textAlign: 'left',
  },
  signinButton: {
    background: '#000000',
    color: '#ffffff',
  },
  title: {
    textAlign: 'center',
    paddingTop: 24,
  },
  discoveries: {
    background: '#EFF9FF',
    textAlign: 'center',
    padding: '24px 24px 50px 24px',
  },
  categoriesButton: {
    borderRadius: '30px !important',
    background: '#000000',
    color: '#ffffff',
    marginTop: 24,
  },
}));
export default function SignUp() {
  const classes = useStyles();
  const router = useRouter();
  const handleClick = () => {
    router.push('/login');
  };
  return (
    <>
      <section className={classes.sectionOne}>
        <div className={classes.container}>
          <div className={classes.card}>
            <Typography variant="h4" className={classes.title}>
              Forgot Password
            </Typography>
            <TextField
              fullWidth
              id="outlined-basic"
              label="Email"
              variant="outlined"
            />
            <Typography
              onClick={handleClick}
              className={classes.forgotText}
              variant="subtitle2"
            >
              Go to Login
            </Typography>
            <Button
              classes={{ root: classes.signinButton }}
              variant="contained"
              size="large"
              color="primary"
            >
              Get a reset password link
            </Button>
          </div>
        </div>
      </section>
      <section className={classes.discoveries}>
        <div>
          <Typography variant="h4" className={classes.title}>
            We are dependable ally in your hourney to
          </Typography>
          <Typography variant="h4" className={classes.title}>
            better health & wellness{' '}
          </Typography>
          <Button
            classes={{ root: classes.categoriesButton }}
            variant="contained"
            size="large"
            color="primary"
          >
            DISCOVER CATEGROIES
          </Button>
        </div>
      </section>
    </>
  );
}
