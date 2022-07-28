import { ChatWrapper } from './Chat.styles';
import Logo from '../../../images/fabhublogo.png';
import { ContainerWrap } from '../PostsContainer/ContainerWrap';

const Chat = () => {
  return (
    <ContainerWrap noPadding>
      <ChatWrapper>
        <div className="chat-header">
          <h2>Chat</h2>
        </div>
        <div className="chats">
          <div className="chat-wrapper">
            <div className="profile-pic">
              <img src={Logo} alt="logo" />
            </div>
            <div className="message-section">
              <h1>HOPin Academy</h1>
              <p>Please attached report for...</p>
            </div>
          </div>
          <div className="chat-wrapper">
            <div className="profile-pic">
              <img src={Logo} alt="logo" />
            </div>
            <div className="message-section">
              <h1>HOPin Academy</h1>
              <p>Please attached report for...</p>
            </div>
          </div>
          <div className="chat-wrapper">
            <div className="profile-pic">
              <img src={Logo} alt="logo" />
            </div>
            <div className="message-section">
              <h1>HOPin Academy</h1>
              <p>Please attached report for...</p>
            </div>
          </div>
        </div>
      </ChatWrapper>
    </ContainerWrap>
  );
};

export default Chat;
