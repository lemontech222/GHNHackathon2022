import Cookies from 'js-cookie';
import jwt_decode from 'jwt-decode';
import { Navbar } from '../../components/Navbar';
import {
  InnerPageContainer,
  PageContainer,
} from '../../components/PageContainer';
import { RightSideBar } from '../../components/RightSideBar';
import { SideBar } from '../../components/SideBar';
import { MiddleSection } from './MiddleSection';

export function Dashboard() {
  const token = Cookies.get('jwt_access');
  const decoded = jwt_decode(token);
  console.log(decoded);
  return (
    <PageContainer>
      <Navbar username={decoded.username} />
      <InnerPageContainer>
        <SideBar />
        <MiddleSection />
        <RightSideBar />
      </InnerPageContainer>
    </PageContainer>
  );
}
