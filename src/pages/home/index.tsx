import { Typography, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useRouter } from 'next/router';

const useStyles = makeStyles(() => ({
  sectionOne: {
    margin: '24px',
    height: '100%',
    textAlign: 'center',
  },
  signinButton: {
    background: '#000000',
    color: '#ffffff',
    marginTop:'24px'
  },
}));
export default function Home() {
  const classes = useStyles();
  const router = useRouter();

  const handleLogout = () => {
    router.push('/login');
  };
  return (
    <>
      <section className={classes.sectionOne}>
        <div>
          <Typography variant="h2">Welcome !</Typography>
          <Button
          classes={{root:classes.signinButton}}
            variant="contained"
            size="large"
            color="primary"
            onClick={handleLogout}
          >
            Logout
          </Button>
        </div>
      </section>
    </>
  );
}
