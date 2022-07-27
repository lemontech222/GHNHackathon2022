import Container from 'react-bootstrap/Container';
import { SideBarWrapper } from './SideBar.styles';

const SideBar = (props) => {
  return (
    <Container>
      <SideBarWrapper>{props.children}</SideBarWrapper>
    </Container>
  );
};

export default SideBar;
