import { Modal } from 'react-bootstrap';
import { useState } from 'react';
import styled from 'styled-components';
import { LogoImage } from '../../../components/BrandLogo';
import { Button } from '../../../components/Button';
import { SubContainer } from '../../../components/SideBar/profile';
import { Marginer } from '../../../components/Marginer';
import UploadPhotos from '../../../components/DropZone';
import Axios from 'axios';
import { Input, TextArea } from '../../../components/Input';
import Cookies from 'js-cookie';
import { SubText } from '../../../components/Comon';

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
  width: 60%;
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

const FormContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 10px;
`;

export const AdjustHeight = (e) => {
  e.target.style.height = e.target.scrollHeight + 'px';
};

function CreatePostModal(props) {
  const { hubProfile } = props;
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
          <LogoImage size={6}>
            <img src={hubProfile.hub_profile_pic} alt="hub logo" />
          </LogoImage>
          <SubText color="#34abde" fontWeight={500}>
            {hubProfile.hub_name}
          </SubText>
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
          width="765px"
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
  const { hubProfile } = props;
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [seats, setSeats] = useState(0);
  const [address, setAddress] = useState('');
  const [contact, setContact] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [recur, setRecur] = useState(false);
  // const [error, setError] = useState({});

  const PostEvent = async (e) => {
    e.preventDefault();
    const token = Cookies.get('jwt_access');

    Axios({
      method: 'post',
      url: 'api/events/',
      data: {
        hub: hubProfile.id,
        title: title,
        description: description,
        location: location,
        number_of_seats: seats,
        gps_address: address,
        contact_person: contact,
        start_date: startDate,
        end_date: endDate,
        recurring: recur,
      },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then(
      (response) => {
        console.log(response);
      },
      (err) => {
        console.log('Error: ', err);
        // setError(err.response.data);
      }
    );
  };

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
          <LogoImage size={6}>
            <img src={hubProfile.hub_profile_pic} alt="hub logo" />
          </LogoImage>
          <SubText color="#34abde" fontWeight={500}>
            {hubProfile.hub_name}
          </SubText>
        </Identifier>
        <ModalScroll>
          <FormContainer>
            <Input
              type="text"
              placeholder="Title"
              onChange={(e) => setTitle(e.target.value)}
            />
            <TextArea
              placeholder="Description"
              onChange={(e) => (AdjustHeight, setDescription(e.target.value))}
            />
            <Input
              type="text"
              placeholder="Location"
              onChange={(e) => setLocation(e.target.value)}
            />
            <Input
              type="text"
              placeholder="GPS Address"
              onChange={(e) => setAddress(e.target.value)}
            />
            <Input
              type="text"
              placeholder="Number of Seats"
              onChange={(e) => setSeats(e.target.value)}
            />
            <Input
              type="text"
              placeholder="Contact Person"
              onChange={(e) => setContact(e.target.value)}
            />
            <Input
              type="text"
              placeholder="Start Date"
              onfocus={(e) => (e.target.type = 'date')}
              onblur={(e) => (e.target.type = 'text')}
              onChange={(e) => setStartDate(e.target.value)}
            />
            <Input
              type="text"
              placeholder="End Date"
              onfocus={(e) => (e.target.type = 'date')}
              onblur={(e) => (e.target.type = 'text')}
              onChange={(e) => setEndDate(e.target.value)}
            />
            <label htmlFor="recur"> Recurring </label>
            <input
              type="checkbox"
              id="recur"
              name="recur"
              value="true"
              onChange={(e) => e.target.checked && setRecur(true)}
            ></input>
          </FormContainer>
        </ModalScroll>

        <Marginer direction="vertical" margin={20} />
        <Button
          width="765px"
          height={50}
          size={17}
          font-weight={400}
          bradius={10}
          click={PostEvent}
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

export function CreatePost(props) {
  const { hubProfile } = props;
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
          <img src={hubProfile.hub_profile_pic} alt="hub logo" />
        </LogoImage>
        <ActionButtons>
          <Button
            width="40%"
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
            width="40%"
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
            width="40%"
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
      <CreatePostModal
        hubProfile={hubProfile}
        show={showPost}
        onHide={handleClose}
      />
      <CreateEventModal
        hubProfile={hubProfile}
        show={showEvent}
        onHide={handleClose}
      />
    </SubContainer>
  );
}
