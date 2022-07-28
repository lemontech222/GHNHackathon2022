import { Modal } from 'react-bootstrap';
import { Button } from '..';
import { useTokens } from '../../../context/TokensContext';
import { Marginer } from '../Marginer';
import { CreateEventForm, PostModalWrapper } from './CreatePost.style';
import 'react-bootstrap';
import AddImage from '../../../images/icons/photos 1.png';

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
          <Marginer direction="vertical" margin={20} />
          <CreateEventForm>
            <input class="form-control" type="text" placeholder="Title" />
            <textarea
              class="form-control"
              type="text"
              placeholder="Description"
            />
            <input
              class="form-control"
              type="text"
              placeholder="Physical Address"
            />
            <input class="form-control" type="text" placeholder="GPS Address" />
            <input
              class="form-control"
              type="text"
              placeholder="Seats Available"
            />
            <input
              class="form-control"
              type="text"
              placeholder="Contact Person"
            />
            <input class="form-control" type="date" placeholder="Start Date" />
            <input class="form-control" type="date" placeholder="End Date" />
            <label for="photo">
              <img src={AddImage} alt="icon" />
              <h3>Choose Image...</h3>
            </label>
            <input id="photo" type="file" style={{ visibility: 'hidden' }} />
          </CreateEventForm>
          <Marginer direction="vertical" margin={20} />
          <Button width="100%">Post</Button>
        </PostModalWrapper>
      </Modal.Body>
    </Modal>
  );
}

export default CreateEventModal;
