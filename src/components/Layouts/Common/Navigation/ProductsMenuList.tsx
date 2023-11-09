import List from '@mui/material/List';
import React from 'react';
import { ListItemText } from '@mui/material';
import { productCategories } from '@wyn/utils/constants';
import { StyledListItemButton } from './styled';
import { useRouter } from 'next/navigation';

interface ProductsMenuListProps {
  onClose: (event: any) => void;
}

const ProductsMenuList = ({ onClose }: ProductsMenuListProps) => {
  const router = useRouter();
  return (
    <List disablePadding>
      {productCategories.map((product, index) => (
        <StyledListItemButton
          key={index}
          onClick={(e) => {
            onClose(e);
            router.push(product?.route);
          }}
        >
          <ListItemText sx={{ color: product?.colorCode }}>
            {product.title}
          </ListItemText>
        </StyledListItemButton>
      ))}
    </List>
  );
};

export default ProductsMenuList;
