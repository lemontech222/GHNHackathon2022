import styled from 'styled-components';

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
    height: 180px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    margin-bottom: 100px;
    display: flex;
    justify-content: center;
    background: var(--primary-color);
  }

  & .profile-photo {
    position: relative;
    width: 180px;
    min-height: 120px;
    top: 50%;
    background: #ffffff;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;

    & img {
      width: 100%;
      height: 100%;
    }
  }

  & .profile-name {
    width: 100%;
    text-align: center;

    & h2 {
      font-style: normal;
      font-weight: 600;
      font-size: 22px;
      line-height: 17px;
      color: var(--primary-color);
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
