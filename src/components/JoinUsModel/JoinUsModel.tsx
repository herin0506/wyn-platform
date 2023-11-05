import React from 'react';
import { DialogProps } from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import Image from 'next/image';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { StyledDialog } from './styled';
import DialogHeaderComponent from './Header';
import JoinUsFormComponent from './Form';

interface JoinUsModelComponentProps {
  dialogProps: DialogProps;
  onClickCloseAction: () => void;
}

const JoinUsModelComponent = ({
  dialogProps,
  onClickCloseAction,
}: JoinUsModelComponentProps) => {
  return (
    <StyledDialog {...dialogProps}>
      <DialogContent>
        <Box component="div" className="_main_wrapper_box">
          <DialogHeaderComponent onClickCloseAction={onClickCloseAction} />
          <Box component="div" className="_form_box">
            <Grid height="100%" alignItems="stretch" container>
              <Grid
                container
                alignItems="flex-end"
                height="100%"
                item
                justifyContent="start"
                md={5}
              >
                <Grid item>
                  <Typography variant="h4">
                    Be a part of <br />
                    the <span>WYNing</span> revolution
                  </Typography>
                </Grid>
              </Grid>
              <JoinUsFormComponent />
            </Grid>
          </Box>
        </Box>
        <Image
          objectFit="cover"
          objectPosition="top center"
          fill
          alt="banner_img"
          src="/images/join_us_bg.png"
          style={{ zIndex: 0 }}
        />
      </DialogContent>
    </StyledDialog>
  );
};

export default JoinUsModelComponent;
