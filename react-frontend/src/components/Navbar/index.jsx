import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { deviceSize } from '../Responsive';
import { BrandLogo } from '../BrandLogo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faDoorOpen, faUser } from '@fortawesome/free-solid-svg-icons';
import { SearchBox } from '../SearchBox';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Cookies from 'js-cookie';
import { Button } from '../Button';
import { Marginer } from '../Marginer';

const NavbarContainer = styled.nav`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
  background-color: ${({ useTransparent }) =>
    useTransparent ? 'transparent' : '#ffffff'};
  box-shadow: 0px 5px 8px 0px rgba(191, 190, 190, 0.75);
  -webkit-box-shadow: 0px 5px 8px 0px rgba(191, 190, 190, 0.75);
  -moz-box-shadow: 0px 5px 8px 0px rgba(191, 190, 190, 0.75);

  position: sticky;
  top: 0;
  z-index: 9999;

  @media screen and (max-width: ${deviceSize.mobile}px) {
    padding: 0;
  }
`;

const TopNav = styled.div`
  width: 100%;
  height: 60%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 250px;
  margin: 0;
  // border-bottom: 0.5px solid #d8dad9;
`;

const BottomNav = styled.div`
  width: 100%;
  min-height: 40px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0;
  margin: 0;
  background: #484848;
  color: #ffffff;
`;

const AccessibilityContainer = styled.div`
  width: 15%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const SearchBar = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const NavContainer = styled.div`
  height: 100%;
  width: 100%;
  padding: 0 250px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  color: #ffffff;
`;

const UserImage = styled.div`
  width: ${({ size }) => (size ? size + 'px' : '3em')};
  height: ${({ size }) => (size ? size + 'px' : '3em')};
  border-radius: 50%;
  background: #484848;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const AnchorLink = styled(Link)`
  font-size: ${({ linkSize }) => (linkSize ? linkSize + 'px' : '16px')};
  color: ${({ linkColor }) => (linkColor ? linkColor : '#ffffff')};
  cursor: pointer;
  text-decoration: none;
  outline: none;
  transition: all 200ms ease-in-out;
  font-weight: bold;

  &:hover {
    filter: contrast(0.6);
    color: #34abde;
  }
`;

const Dropdown = styled.div`
  font-size: 35;
  font-weight: bold;
  text-color: #1f3f49;
`;

export const Separator = styled.div`
  min-height: 50%;
  width: 1px;
  background-color: #fff;
`;

export function Navbar(props) {
  const { useTransparent, username } = props;
  const token = Cookies.get('jwt_access');
  const isMobile = useMediaQuery({ maxWidth: deviceSize.mobile });

  return (
    <>
      <NavbarContainer id="boxThis" useTransparent={useTransparent}>
        <TopNav>
          <BrandLogo hideLogoTitle logoSize={5} />

          <SearchBar>
            <SearchBox />
          </SearchBar>
          {token && (
            <AccessibilityContainer>
              <Link to="/customer/access/cart">
                <UserImage></UserImage>
              </Link>
              {/* <Marginer direction="horizontal" margin={30} /> */}
              {/* <Link to="/customer/access/signup">
              <Button size={20}>Logout</Button>
            </Link>
            <Marginer direction="horizontal" margin={30} />
            <Link to="/customer/access/cart">
              <FontAwesomeIcon icon={faCog} color="#1F3F49" fontSize={35} />
            </Link> */}
              <Dropdown>
                <NavDropdown
                  id="dark"
                  title={username}
                  menuVariant="dark"
                  active
                >
                  <NavDropdown.Item href="/change-password">
                    <FontAwesomeIcon icon={faUser} fontSize={15} /> Change
                    Password
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/settings">
                    <FontAwesomeIcon icon={faCog} fontSize={15} /> Settings
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item
                    href="/"
                    onClick={() => Cookies.set('jwt_access', '')}
                  >
                    <FontAwesomeIcon icon={faDoorOpen} fontSize={15} /> Logout
                  </NavDropdown.Item>
                </NavDropdown>
              </Dropdown>
            </AccessibilityContainer>
          )}
          {!token && (
            <AccessibilityContainer>
              <AnchorLink to="/signin" linkColor="#000000">
                Login
              </AnchorLink>
              <Marginer direction="horizontal" margin={10} />
              <Button
                type="button"
                width="60%"
                size={16}
                height={40}
                bradius={10}
                click={() => (window.location.href = '/signup')}
              >
                Sign Up
              </Button>
            </AccessibilityContainer>
          )}
        </TopNav>
        <BottomNav>
          {!isMobile && token && (
            <NavContainer>
              <AnchorLink to="/">Dashboard</AnchorLink>
            </NavContainer>
          )}
        </BottomNav>
      </NavbarContainer>
      {/* </div> */}
    </>
  );
}
