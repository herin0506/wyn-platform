import React from 'react';
import { Typography, TextField, Button } from '@mui/material';
import { useRouter } from 'next/router';
import styles from '../../styles/authentication.module.css';

export default function Login() {
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
    <>
      <section className={`row  justify-content-center`}>
        <div className={'col-12 col-md-6 col-lg-4 text-center px-4'}>
          <Typography variant="h4" className={`mt-4 text-center`}>
            Login
          </Typography>
          <TextField
            fullWidth
            id="outlined-basic"
            label="Email"
            variant="outlined"
            className="my-4"
            InputProps={{ className: styles.inputFieldStyles }}
          />
          <TextField
            fullWidth
            id="outlined-basic"
            label="Password"
            variant="outlined"
            className="mb-4"
            InputProps={{ className: styles.inputFieldStyles }}
          />
          <Typography
            onClick={handleNaviagte}
            className={`text-start mb-3`}
            variant="subtitle2"
          >
            <u>Forgot your password?</u>
          </Typography>
          <Button
            className={`text-center mb-3 ${styles.mainBoxButton}`}
            variant="contained"
            size="large"
            color="primary"
            onClick={handleLogin}
          >
            Sign In
          </Button>
          <Typography
            onClick={handleClick}
            variant="subtitle2"
            className={`mb-4`}
          >
            Create account?
          </Typography>
        </div>
      </section>

      <section className={`row justify-content-center ${styles.container}`}>
        <div className={`col-8 text-center py-5 px-0`}>
          <Typography className={`mb-4 ${styles.customTextSize}`}>
            We are <b>dependable ally</b> in your hourney to better health &
            wellness.
          </Typography>
          <Button
            className={styles.mainRoundButton}
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
