import { Avatar, Container, Typography,Hidden,Grid,Box} from '@mui/material'
import React from 'react'
import ImageView from '../Common/ImageViewComponent/ImageView'



export  const Blog1 = () => {
  return (

    <Container > 
      <ImageView src='/images/blog1.png' alt='Blog-1'/>
      <Typography variant='body2' pb={2} pt={2}>
      The WYN Way: Merging Nutrition & Ayurveda with Modern Wellness
      </Typography>
     
      <Typography variant='subtitle1'>
      To truly appreciate WYN's approach, we must embark on  a journey into the world of natural nutrients in Ayurveda—a... <Hidden only={["lg",'md',"sm","xl"]}>
      venerable traditional Indian system of medicine that has thrived for over 5,000 years in the Indian subcontinent. This ancient practice is rooted in the profound belief that health and wellness are intricately connected to achieving balance in...</Hidden>
      </Typography >
      
      <Hidden only={["lg",'md',"sm","xl"]}>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '90px',marginTop:'20px' }}>
      <Avatar alt="Dr. vaidya" src="/images/dr-vaidya-avatar.png" />
      <Typography variant="subtitle2" style={{ marginLeft: '10px',fontWeight: 'bold' }}>
        Dr. Vaidya | 19 September 2023
      </Typography>
      </div>
     </Hidden>
    </Container> 
    
     
  )
}
export  const Blog2 = () => {
  return (
  
    <Container>
      <ImageView src='/images/blog2.png' alt='Blog-2'/>
      <Typography variant='body2' pb={2} pt={2}>
      A Journey of Women Wellness through Time & Nature
      </Typography>
      <Typography variant='subtitle1'>
      In the heartland of India, where ancient 
      traditions and modernity coalesce, a 
      captivating story of transformation and...
      </Typography >
      <Hidden only={["lg",'md',"sm","xl"]}>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '90px',marginTop:'20px' }}>
      <Avatar alt="Dr. vaidya" src="/images/dr-vaidya-avatar.png" />
      <Typography variant="subtitle2" style={{ marginLeft: '10px',fontWeight: 'bold' }}>
        Dr. Vaidya | 19 September 2023
      </Typography>
      </div>
     </Hidden>
    </Container> 
    
     
  )
}

export  const Blog3 = () => {
  return (
    
    <Container>
      <ImageView src='/images/blog3.png' alt='Blog-3'/>
      <Typography variant='body2' pb={2} pt={2}>
      Empowerment in Every Mint
      </Typography>
      <Typography variant='subtitle1' >
      Life as a woman is a tapestry of 
      experiences woven with threads of 
      sunshine and rainbows, quirks, and...
      </Typography >
      <Hidden only={["lg",'md',"sm","xl"]}>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '90px',marginTop:'20px' }}>
      <Avatar alt="Dr. vaidya" src="/images/dr-vaidya-avatar.png" />
      <Typography variant="subtitle2" style={{ marginLeft: '10px',fontWeight: 'bold' }}>
        Dr. Vaidya | 19 September 2023
      </Typography>
      </div>
     </Hidden>
     
    </Container> 
     
  )
}
export  const Blog4 = () => {
  return (
    
    <Container>
      <ImageView src='/images/blog4.png' alt='Blog-4'/>
      <Typography variant='body2' pb={2} pt={2}>
      Embracing Holistic Wellness in a Rapid-Paced World
      </Typography>
      <Typography variant='subtitle1' >
      In today's fast-moving world, where life 
      rushes by and the world never seems to 
      stop, the importance of holistic wellness...
      </Typography >
      <Hidden only={["lg",'md',"sm","xl"]}>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '90px',marginTop:'20px' }}>
      <Avatar alt="Dr. vaidya" src="/images/dr-vaidya-avatar.png" />
      <Typography variant="subtitle2" style={{ marginLeft: '10px',fontWeight: 'bold' }}>
        Dr. Vaidya | 19 September 2023
      </Typography>
      </div>
     </Hidden>
    
    </Container> 
     
  )
}
export  const Blog5= () => {
  return (
    
     <Container > 
      <ImageView src='/images/blog5.png' alt='Blog-5'/>
      <Typography variant='body2' pb={2} pt={2}>
      Embracing Nature: How WYN Elevates with Botanical Ingredients
      </Typography>
      <Hidden only={['md', 'sm', 'xl']}>
      <Grid item  lg={20} >
      <Typography variant='subtitle1'style={{ overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical' }}>
      In an era where synthetic solutions often 
      eclipse the wisdom of nature, "What You 
      Need" (WYN) emerges as a pioneering...
      </Typography >
      </Grid>
      </Hidden>
      <Hidden only={["lg",'md',"sm","xl"]}>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '90px',marginTop:'20px' }}>
      <Avatar alt="Dr. vaidya" src="/images/dr-vaidya-avatar.png" />
      <Typography variant="subtitle2" style={{ marginLeft: '10px',fontWeight: 'bold' }}>
        Dr. Vaidya | 19 September 2023
      </Typography>
      </div>
     </Hidden>
    </Container> 
    
  )
}




