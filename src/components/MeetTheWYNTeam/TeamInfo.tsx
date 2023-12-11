
import { Container, Hidden } from '@mui/material';
import { teamMembers } from '@wyn/utils/constants';
import React from 'react';
import HorizontalSplitComponent from '../Common/HorizontalSplit/HorizontalSplit';
import HorizontalContentSectionComponent from '../Common/HorizontalContentSection/HorizontalContentSection';
import HorizontalImageSectionComponent from '../Common/HorizontalImageSection/HorizontalImageSection';

const TeamInfo = () => {
  return (
        <Container maxWidth="xl" sx={{padding:"0"}}>
            {
                teamMembers.map((member,index) => (
                    <Container>
                        <Hidden only={["lg","md","xl"]}>
                        <HorizontalImageSectionComponent alt={member.imgProps.alt} src={member.imgProps.src}/>
                        <HorizontalContentSectionComponent {...member.contentProps}/>
                    </Hidden>
                    <Hidden only={["xs","sm"]}>
                        <HorizontalSplitComponent
                            key={index}
                            leftComponent={
                                index % 2 === 0 
                                ? <HorizontalContentSectionComponent {...member.contentProps}/> 
                                : <HorizontalImageSectionComponent alt={member.imgProps.alt} src={member.imgProps.src}/>
                            }
                            rightComponent={
                                index % 2 === 0 
                                ? <HorizontalImageSectionComponent alt={member.imgProps.alt} src={member.imgProps.src}/> 
                                : <HorizontalContentSectionComponent {...member.contentProps}/>
                            }
                        />
                        </Hidden>
                    </Container>
                ))}
        </Container>     
    )
}

export default TeamInfo;
