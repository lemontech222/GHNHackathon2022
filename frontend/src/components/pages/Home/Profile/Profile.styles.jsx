import styled from 'styled-components';
import HeroBackground from '../../../../images/hero-background.png';

export const ProfileWrapper = styled.div`
  width: 100%;
  background: #ffffff;
  border-radius: 10px;
  box-shadow: 0px 1px 0px 0px #cac1c1;
  display: flex;
  flex-direction: column;
  align-items: ${({ align }) => (align ? align : 'flex-start')};

  & .hero-section {
    width: 100%;
    height: 233.75px;

    background: url(${HeroBackground});
  }

  & .hero-filter {
    width: 100%;
    height: 220px;
    background: rgba(52, 171, 222, 0.8);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 5px 5px 0px 0px;
    padding: 0 25px;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    & h1,
    h2,
    h3,
    h4 {
      font-style: normal;
      color: #ffffff;
    }

    & h1 {
      font-weight: 700;
      font-size: 22px;
      line-height: 23px;
    }

    & h4 {
      font-weight: 600;
      font-size: 16px;
      line-height: 17px;
    }
  }

  & .info-section {
    width: 100%;
    height: 260px;
    background: #ffffff;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  & .info {
    width: 100%;
    height: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid rgba(72, 72, 72, 0.2);

    & h3 {
      font-style: normal;
      font-weight: 500;
      font-size: 18px;
      line-height: 17px;
      color: #000000;
    }
  }

  & .action {
    width: 100%;
    padding: 20px 0;
    text-align: center;
    // border-bottom-radius: 15px;

    & p {
      font-weight: 400;
      font-size: 16px;
      line-height: 18px;
      color: var(--primary-color);
    }
  }
`;
