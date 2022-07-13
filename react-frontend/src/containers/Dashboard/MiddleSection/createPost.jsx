import { Modal } from 'react-bootstrap';
import { useState } from 'react';
import styled from 'styled-components';
import { LogoImage } from '../../../components/BrandLogo';
import { Button } from '../../../components/Button';
import { SubContainer } from '../../../components/SideBar/profile';
import Logo from '../../../images/logo/ghnlogo.png';
import { Marginer } from '../../../components/Marginer';
import UploadPhotos from '../../../components/DropZone';

const TopDesign = styled.div`
  width: 100%;
  background: #34abde;
  min-height: 8px;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
`;

const CreatePostContainer = styled.div`
  width: 100%;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Identifier = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`;

const Name = styled.h4`
  font-weight: 600;
  font-size: 16px;
  margin: 8px;
`;

const PostText = styled.textarea`
  width: 100%;
  height: auto;
  border: none;
  padding: 8px;
  outline: none;
  resize: vertical;
  overflow: hidden;

  &::placeholder {
    font-size: 20px;
  }
`;

const ActionButtons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ModalScroll = styled.div`
  width: 100%;
  height: 400px;
  overflow-x: hidden;
  overflow-y: auto;
  //   display: flex;
  //   flex-direction: column;
  //   justify-content: space-around;
  //   align-items: flex-start;
`;

const AdjustHeight = (e) => {
  e.target.style.height = e.target.scrollHeight + 'px';
};

function CreatePostModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton className="px-4">
        <Modal.Title id="contained-modal-title-vcenter" className="ms-auto">
          Create Post
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Identifier>
          <LogoImage size={5}>
            <img src={Logo} alt="hub logo" />
          </LogoImage>
          <Name>GHN</Name>
        </Identifier>
        <ModalScroll>
          <Marginer direction="vertical" margin={20} />
          <PostText placeholder="What is new at GHN?" onChange={AdjustHeight} />
          <Marginer direction="vertical" margin={20} />
          <UploadPhotos />
        </ModalScroll>

        <Marginer direction="vertical" margin={20} />
        <Button
          click={props.onHide}
          width={765}
          height={50}
          size={17}
          font-weight={400}
          bradius={10}
        >
          Post
        </Button>
      </Modal.Body>
      {/* <Modal.Footer>
        <Button click={props.onHide}>Close</Button>
      </Modal.Footer> */}
    </Modal>
  );
}

function CreateEventModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton className="px-4">
        <Modal.Title id="contained-modal-title-vcenter" className="ms-auto">
          Create Event
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Identifier>
          <LogoImage size={5}>
            <img src={Logo} alt="hub logo" />
          </LogoImage>
          <Name>GHN</Name>
        </Identifier>
        <ModalScroll>
          <Marginer direction="vertical" margin={20} />
          <PostText placeholder="What is new at GHN?" onChange={AdjustHeight} />
          <Marginer direction="vertical" margin={20} />
          <UploadPhotos />
        </ModalScroll>

        <Marginer direction="vertical" margin={20} />
        <Button
          click={props.onHide}
          width={765}
          height={50}
          size={17}
          font-weight={400}
          bradius={10}
        >
          Post
        </Button>
      </Modal.Body>
      {/* <Modal.Footer>
        <Button click={props.onHide}>Close</Button>
      </Modal.Footer> */}
    </Modal>
  );
}

export function CreatePost() {
  const [showPost, setShowPost] = useState(false);
  const [showEvent, setShowEvent] = useState(false);

  const handleClose = () => {
    setShowPost(false);
    setShowEvent(false);
  };
  const handleShow = (e) => {
    e.target.id === 'post' && setShowPost(true);
    e.target.id === 'event' && setShowEvent(true);
  };

  return (
    <SubContainer>
      <TopDesign />
      <CreatePostContainer>
        <LogoImage size={6}>
          <img src={Logo} alt="hub logo" />
        </LogoImage>
        <ActionButtons>
          <Button
            width={150}
            height={50}
            size={17}
            font-weight={400}
            bradius={10}
            click={handleShow}
            margin={5}
            id="post"
          >
            Create a Post
          </Button>
          <Button
            width={150}
            height={50}
            size={17}
            font-weight={400}
            bradius={10}
            click={handleShow}
            margin={5}
            id="event"
          >
            Create an Event
          </Button>
          <Button
            width={150}
            height={50}
            size={17}
            font-weight={400}
            bradius={10}
            click={handleShow}
            margin={5}
          >
            Open a Forum
          </Button>
        </ActionButtons>
      </CreatePostContainer>
      <CreatePostModal show={showPost} onHide={handleClose} />
      <CreateEventModal show={showEvent} onHide={handleClose} />
    </SubContainer>
  );
}
