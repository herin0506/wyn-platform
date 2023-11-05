import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Image from 'next/image';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

interface DialogHeaderComponentProps {
  onClickCloseAction: () => void;
}

const DialogHeaderComponent = ({ onClickCloseAction }: DialogHeaderComponentProps) => {
  return (
    <Box component="div" className="_header_box">
      <Grid container>
        <Grid pl={3} pt={3} item xs>
          <Image alt="logo" width={65} height={70} src="/logos/logo.png" />
        </Grid>
        <Grid pr={2} pt={3} item>
          <IconButton onClick={onClickCloseAction} sx={{ padding: 0 }}>
            <CloseIcon />
          </IconButton>
        </Grid>
      </Grid>
    </Box>
  );
};

export default DialogHeaderComponent;
