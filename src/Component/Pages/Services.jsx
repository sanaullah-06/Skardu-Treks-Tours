import React from 'react'
import { Link } from 'react-router-dom';
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP
} from '../ServicesElements'


const ServicesSection = () => {
  return (
    <>
      <ServicesContainer id="services">
        <ServicesH1>Our Services</ServicesH1>
        <ServicesWrapper>
          <Link to="/ServicePage" style={{ textDecoration: 'none', color: 'black'  }}>
          <ServicesCard>
            <ServicesIcon src="/gallery/Accomodation.png"></ServicesIcon>
            <ServicesH2>Accomodation</ServicesH2>
            <ServicesP>Interdum et malesuada fames ac ante ipsum primis in faucibus.</ServicesP>
          </ServicesCard>
          </Link>
           <Link to="/ServicePage" style={{ textDecoration: 'none', color: 'black'  }}>
          <ServicesCard>
            <ServicesIcon src="/gallery/ticket.jpg"></ServicesIcon>
            <ServicesH2>Ticketing</ServicesH2>
            <ServicesP>Praesent ac enim ultrices odio fringilla vestibulum non et lectus.</ServicesP>
          </ServicesCard>
           </Link>
           <Link to="/ServicePage" style={{ textDecoration: 'none', color: 'black'  }}>
          <ServicesCard>
            <ServicesIcon src="/gallery/food.png"></ServicesIcon>
            <ServicesH2>Foods</ServicesH2>
            <ServicesP>Aliquam tristique eget dui sit amet mattis. Nulla eget leo id purus hendrerit mollis.</ServicesP>
          </ServicesCard>
           </Link>
           
        </ServicesWrapper>
        <ServicesWrapper>
        <Link to="/ServicePage" style={{ textDecoration: 'none', color: 'black'  }}>
          <ServicesCard>
            <ServicesIcon src="/gallery/jeep.png"></ServicesIcon>
            <ServicesH2>Transportation</ServicesH2>
            <ServicesP>Interdum et malesuada fames ac ante ipsum primis in faucibus.</ServicesP>
          </ServicesCard>
           </Link>
           <Link to="/ServicePage" style={{ textDecoration: 'none', color: 'black'  }}>
          <ServicesCard>
            <ServicesIcon src="/gallery/photo.jpg"></ServicesIcon>
            <ServicesH2>Photography</ServicesH2>
            <ServicesP>Praesent ac enim ultrices odio fringilla vestibulum non et lectus.</ServicesP>
          </ServicesCard>
           </Link>
          
        </ServicesWrapper>
      </ServicesContainer>
    </>
  )
}

export default ServicesSection;