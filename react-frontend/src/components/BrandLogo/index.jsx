import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import LogoImg from '../../images/logo/ghnlogo.png';
import { useMediaQuery } from 'react-responsive';
import { deviceSize } from '../Responsive';

const BrandLogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const LogoImage = styled.div`
  width: ${({ size }) => (size ? size + 'px' : '2em')};
  height: ${({ size }) => (size ? size + 'px' : '2em')};

  img {
    width: 100%;
    height: 100%;
  }
`;

const LogoTitle = styled.h2`
  margin: 0;
  font-size: ${({ size }) => (size ? size + 'px' : '30px')};
  color: ${({ color }) => (color ? color : '#1F3F49')};
  font-weight: 900;
  margin-left: 6px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

export function BrandLogo(props) {
  const { logoSize, textSize, color, hideLogo, hideLogoTitle } = props;

  const isMobile = useMediaQuery({ maxWidth: deviceSize.mobile });

  return (
    <BrandLogoContainer>
      {!hideLogo && (
        <Link to="/home">
          <LogoImage size={logoSize}>
            <img src={LogoImg} alt="Ghana Hubs Network" />
          </LogoImage>
        </Link>
      )}
      {!isMobile && !hideLogoTitle && (
        <StyledLink to="/home">
          <LogoTitle size={textSize} color={color}>
            GHANAHUBSNETWORK
          </LogoTitle>
        </StyledLink>
      )}
    </BrandLogoContainer>
  );
}
