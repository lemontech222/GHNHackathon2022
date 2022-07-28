import { AnchorLink } from '../..';
import { SideAdsWrapper } from './SideAds.styles';

const SideAds = (props) => {
  return (
    <AnchorLink to="">
      <SideAdsWrapper>{props.children}</SideAdsWrapper>
    </AnchorLink>
  );
};

export default SideAds;
