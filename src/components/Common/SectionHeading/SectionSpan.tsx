import React from 'react';
import { StyledSectionSpan } from './styled';
interface SectionSpanComponentProps {
  content: string;
}

const SectionSpanComponent = ({ content }: SectionSpanComponentProps) => {
  return <StyledSectionSpan>{content}</StyledSectionSpan>;
};

export default SectionSpanComponent;
