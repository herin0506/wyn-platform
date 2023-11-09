'use client';
import React from 'react';
import Grow from '@mui/material/Grow';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import { StyledMenuPaper, StyledMenuPopper } from './styled';
import ProductsMenuList from './ProductsMenuList';
import Box from '@mui/material/Box';

interface ProductsMenuProps {
  anchorEl?: any;
  open: boolean;
  handleClose: (event: Event | React.SyntheticEvent) => void;
  onKeyDown?: React.KeyboardEventHandler<HTMLUListElement>;
  zIndex: number | null;
}

const ShopMenuComponent = ({
  anchorEl,
  open,
  handleClose,
}: ProductsMenuProps) => {
  return (
    <StyledMenuPopper
      open={open}
      anchorEl={anchorEl}
      role={undefined}
      transition
      placement="bottom-end"
    >
      {({ TransitionProps }) => (
        <Grow {...TransitionProps}>
          <StyledMenuPaper>
            <ClickAwayListener onClickAway={handleClose}>
              <Box>
                <ProductsMenuList onClose={(e) => handleClose(e)} />
              </Box>
            </ClickAwayListener>
          </StyledMenuPaper>
        </Grow>
      )}
    </StyledMenuPopper>
  );
};
export default ShopMenuComponent;
