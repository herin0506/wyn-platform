import React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import ListItemText from '@mui/material/ListItemText';
import ProductsMenuList from './ProductsMenuList';
import { StyledListItemButton } from './styled';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import { useRouter } from 'next/navigation';
import { APP_ROUTES } from '@wyn/utils/routes';

interface MobileNavigationComponentProps {
  onClose: () => void;
}

const MobileNavigationComponent = ({
  onClose,
}: MobileNavigationComponentProps) => {
  const [open, setOpen] = React.useState(true);
  const router = useRouter();
  const handleClick = () => {
    setOpen(!open);
  };

  const handleNavigation = (route: string) => {
    onClose();
    router.push(route);
  };

  return (
    <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      <StyledListItemButton
        sx={() => ({
          ...(open && {
            borderBottom: 'none',
          }),
        })}
        onClick={handleClick}
      >
        <ListItemText
          primary={
            <Box display="flex" justifyContent="space-between">
              <Typography>Shop</Typography>
              <Box>{open ? <ExpandLess /> : <ExpandMore />}</Box>
            </Box>
          }
        />
      </StyledListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <ProductsMenuList onClose={() => onClose()} />
      </Collapse>
      <StyledListItemButton
        onClick={() => handleNavigation(APP_ROUTES.KNOW_THE_SCIENCE)}
      >
        <ListItemText primary="Know the Science" />
      </StyledListItemButton>
      <StyledListItemButton
        onClick={() => handleNavigation(APP_ROUTES.ABOUT_US)}
      >
        <ListItemText primary="About Us" />
      </StyledListItemButton>
    </List>
  );
};

export default MobileNavigationComponent;
