import React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import { footerMenuList } from '@wyn/utils/constants';
import { StyledFooterNavList } from './styled';
import SubscribeComponent from './Subscribe';
import { Typography } from '@mui/material';
import {useRouter} from "next/navigation";

const FooterComponent = () => {
  const router = useRouter();
  return (
    <Container maxWidth="lg">
      <SubscribeComponent />
      <Box mb={10} mt={5}>
        <Divider
          sx={(theme) => ({ backgroundColor: theme.palette.grey[100] })}
        />
      </Box>
      <Grid container>
        {footerMenuList.map((item) => (
          <Grid item key={item.name} lg={4} md={4} sm={4} xl={4}>
            <StyledFooterNavList
              aria-labelledby={`${item.name}-list`}
              subheader={
                <ListSubheader
                  disableGutters
                  component="div"
                  id={`${item.name}-list`}
                >
                  {item.name}
                </ListSubheader>
              }
            >
              {item.categories.map((category) => (
                <ListItemButton
                  disableGutters
                  key={category.title}
                  onClick={() => router.push(category.url)}
                >
                  <ListItemText primary={category.title} />
                </ListItemButton>
              ))}
            </StyledFooterNavList>
          </Grid>
        ))}
      </Grid>
      <Box mt={8}>
        <Grid container>
          <Grid item lg={4} md={4} sm={4} xl={4}>
            <StyledFooterNavList
              aria-labelledby={`contact-us`}
              subheader={
                <ListSubheader disableGutters component="div" id={`contact-us`}>
                  Contact Us
                </ListSubheader>
              }
            >
              <ListItemButton disableGutters onClick={() => {}}>
                <ListItemText primary="sales@wynatlife.com" />
              </ListItemButton>
            </StyledFooterNavList>
          </Grid>
          <Grid item lg={4} md={4} sm={4} xl={4}>
            <StyledFooterNavList
              aria-labelledby={`contact-us`}
              subheader={<Box mt={6} />}
            >
              <ListItemButton disableGutters onClick={() => {}}>
                <ListItemText
                  primary={
                    <>
                      <Typography>
                        BODYBLEND WELLNESS <br /> PRIVATE LIMITED <br />
                        A3 / B4 Kamdar <br />
                        Shopping Centre, Tejpal <br />
                        Road, Vile Parle E, <br />
                        Mumbai - Maharashtra <br />
                        400057
                      </Typography>
                    </>
                  }
                />
              </ListItemButton>
            </StyledFooterNavList>
          </Grid>
          <Grid item lg={4} md={4} sm={4} xl={4}>
            <StyledFooterNavList
              aria-labelledby={`contact-us`}
              subheader={<Box mt={6} />}
            >
              <ListItemButton disableGutters onClick={() => {}}>
                <ListItemText
                  primary={
                    <>
                      <Typography>
                        8828889872
                        <br />
                        8828889873
                      </Typography>
                    </>
                  }
                />
              </ListItemButton>
            </StyledFooterNavList>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default FooterComponent;
