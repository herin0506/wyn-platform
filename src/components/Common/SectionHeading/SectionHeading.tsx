import React, { ReactNode } from 'react';
import Typography, { TypographyProps } from '@mui/material/Typography';

interface SectionHeadingComponentProps extends TypographyProps {
  children: ReactNode;
}

const SectionHeadingComponent = ({
  children,
  ...props
}: SectionHeadingComponentProps) => {
  return (
    <Typography variant="h1" {...props}>
      {children}
    </Typography>
  );
};

export default SectionHeadingComponent;
