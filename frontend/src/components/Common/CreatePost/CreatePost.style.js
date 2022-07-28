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

export const CreateEventForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  & h3 {
    font-size: 30px;
    font-weight: 400;
  }

  & input,
  textarea {
    box-sizing: border-box;
    width: ${({ width }) => (width ? width + 'px' : '100%')};
    // height: 60px;
    margin: 5px 0;
    padding: 10px 23px;
    font-size: 24px;
    line-height: 29px;
    resize: vertical;
    overflow: hidden;

    border: 1px solid #34abde;
    border-radius: 5px;

    & placeholder {
      font-style: normal;
      font-weight: 300;
      font-size: 18px;
      line-height: 29px;

      color: #322f2f;
    }

    & focus {
      border: 2px solid #34abde;
    }

    & textarea {
      resize: vertical;
      overflow: hidden;
    }
  }
`;
