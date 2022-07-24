import { HubCard } from '../../../components/HubCard';
import { MultiCarousel } from '../../../components/MultiCarousel';
import { SubContainer } from '../../../components/SideBar/profile';
import Logo from '../../../images/logo/ghnlogo.png';

export function HubCarousel() {
  return (
    <SubContainer height={20}>
      <MultiCarousel>
        <HubCard hubName="GHN" hubLogo={Logo} />
        <HubCard hubName="GHN" hubLogo={Logo} />
      </MultiCarousel>
    </SubContainer>
  );
}
