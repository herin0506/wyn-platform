import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

interface StepComponentProps {
  title: string;
  titleColor: string;
  description: string;
}

const StepComponent = ({
  titleColor,
  title,
  description,
}: StepComponentProps) => {
  return (
    <Box>
      <Typography color={titleColor} gutterBottom variant="h6">
        {title}
      </Typography>
      <Typography gutterBottom variant="body2">
        {description}
      </Typography>
    </Box>
  );
};

export default StepComponent;
