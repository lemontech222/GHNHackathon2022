import { Modal } from 'react-bootstrap';
import { Button } from '..';
import { useTokens } from '../../../context/TokensContext';
import { Marginer } from '../Marginer';
import { CreateEventForm, PostModalWrapper } from './CreatePost.style';

function CreateEventModal(props) {
  const { user } = useTokens();
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton className="px-4">
        <Modal.Title id="contained-modal-title-vcenter" className="ms-auto">
          Create An Event
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <PostModalWrapper>
          <div className="identifier">
            <div className="logo-image">
              <img src={user?.hub.hub_profile_pic} alt="logo" />
            </div>
            <Marginer direction="horizontal" margin={10} />
            <p>{user?.hub.hub_name}</p>
          </div>
          <CreateEventForm>
            <input type="text" placeholder="Title" />
          </CreateEventForm>
          <Marginer direction="vertical" margin={20} />
          <Button width="100%">Post</Button>
        </PostModalWrapper>
      </Modal.Body>
    </Modal>
  );
}

export default CreateEventModal;
