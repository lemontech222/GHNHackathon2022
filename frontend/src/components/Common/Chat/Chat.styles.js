import styled from 'styled-components';

export const ChatWrapper = styled.div`
  width: 100%;
  background: #ffffff;
  border-radius: 10px;
  box-shadow: 0px 1px 0px 0px #cac1c1;
  display: flex;
  flex-direction: column;
  align-items: ${({ align }) => (align ? align : 'flex-start')};

  & .chat-header {
    width: 100%;
    min-height: 50px;
    background: #ffffff;
    color: var(--primary-color);
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    border-bottom: 1px solid rgba(72, 72, 72, 0.2);
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    & h1,
    h2,
    h3 {
      font-size: 20px;
    }
  }

  & .chats {
    width: 100%;
    height: 200px;
    overflow-x: hidden;
    overflow-y: auto;
  }

  & .chat-wrapper {
    width: 100%;
    padding: 15px;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    border-bottom: 1px solid rgba(72, 72, 72, 0.2);

    &:hover {
      cursor: pointer;
      filter: contrast(0.8);
      box-shadow: -3px 2px 5px 1px rgba(248, 99, 29, 0.4);
      -webkit-box-shadow: -3px 2px 5px 1px rgba(248, 99, 29, 0.4);
      -moz-box-shadow: -3px 2px 5px 1px rgba(248, 99, 29, 0.4);
    }
  }

  & .profile-pic {
    width: 20%;
    border: 3px solid var(--primary-color);
    border-radius: 50%;

    img {
      width: 100%;
      height: 100%;
    }
  }

  & .message-section {
    width: 70%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;

    & h1 {
      font-size: 20px;
      font-weight: 400px;
    }
    p {
      font-size: 14px;
    }
  }
`;
