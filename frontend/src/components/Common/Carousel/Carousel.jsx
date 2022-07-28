import React from 'react'
import { ContainerWrap } from '../PostsContainer/ContainerWrap';
import { CarouselContainer } from './Carousel.style';
import { useNavigate } from 'react-router-dom';

import appLogo from '../../../images/logo/ghnlogo.png';
import flyer from '../../../images/nuru.jpg';

const ItemsCarousel = () => {

    const navigate=useNavigate()
    
  const goToHomepage = ()=>{
    navigate('/')
  }

  return (
    <ContainerWrap>
        <CarouselContainer>
            <div className="slider">
                <img onClick={goToHomepage} src={appLogo} alt="hub" />
                <img onClick={goToHomepage} src={flyer} alt="hub" />
                <img onClick={goToHomepage} src={appLogo} alt="hub" />
            </div>
        </CarouselContainer>
    </ContainerWrap>
  )
}

export default ItemsCarousel