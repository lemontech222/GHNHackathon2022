import styled from 'styled-components';
import Advert1 from '../../images/ads/advert1.jpeg';
import Advert2 from '../../images/ads/advert2.jpeg';
import { Marginer } from '../Marginer';

const AdvertContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  img {
    width: 100%;
    height: auto;
  }
`;

export function Advert() {
  return (
    <AdvertContainer>
      <img src={Advert1} alt="ad1" />
      <Marginer direction="vertical" margin={30} />
      <img src={Advert2} alt="ad2" />
    </AdvertContainer>
  );
}
