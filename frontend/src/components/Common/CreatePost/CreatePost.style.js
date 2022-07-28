import styled from 'styled-components';
import IdentityBg from '../../../images/ghidentity.png';

export const CreatePostWrapper = styled.div`
  width: 100%;

  background: #ffffff;
  border-radius: 10px;
  //   box-shadow: 0px 1px 0px 0px #cac1c1;
  display: flex;
  flex-direction: column;
  align-items: ${({ align }) => (align ? align : 'flex-start')};

  & .top-design {
    width: 100%;
    background: #34abde;
    min-height: 8px;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
  }

  & .create-posts {
    width: 100%;
    min-height: 180px;
    padding: 10px 20px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    background: url(${IdentityBg});
    background-repeat: no-repeat;
    // background-attachment: fixed;
    background-position: center;
    background-size: 100%;
  }
`;

export const PostModalWrapper = styled.div`
  width: 100%;

  & .identifier {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
  }

  & .logo-image {
    width: 4em;
    height: 4em;
    border-radius: 50%;
    border: 3px solid var(--primary-color);

    img {
      width: 100%;
      height: 100%;
    }
  }

  & p {
    font-style: normal;
    font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : '400')};
    font-size: ${({ fontSize }) => (fontSize ? fontSize + 'px' : '20px')};
    // line-height: 24px;
    text-align: ${({ align }) => (align ? align : 'left')};
    margin: 0;

    color: ${({ color }) => (color ? color : '#000000')};
  }

  & textarea {
    width: 100%;
    min-height: 220px;
    height: auto;
    border: none;
    padding: 8px;
    outline: none;
    resize: vertical;
    overflow: hidden;
    font-size: 20px;

    &::placeholder {
      font-size: 30px;
    }
  }

  & .addons {
    width: 100%;
    border: 4px solid #000000;
    border-radius: 10px;
    padding: 20px 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    & h3 {
      font-size: 30px;
      font-weight: 400;
    }

    & .options {
      display: flex;
      justify-content: space-around;
      align-items: center;

      & img {
        width: 3em;
        height: 4em;
        margin: 0 10px;
      }
    }
  }
`;
