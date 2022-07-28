import { Modal } from 'react-bootstrap';
import { PostModalWrapper } from './CreatePost.style';
import Logo from '../../../images/fabhublogo.png';
import { Marginer } from '../Marginer';
import AddPhoto from '../../../images/icons/photos 1.png';
import AddTag from '../../../images/icons/tag 1.png';
import AddCheckin from '../../../images/icons/check-in 1.png';
import AddDoc from '../../../images/icons/doc 1.png';
import { Button } from '..';

export const AdjustHeight = (e) => {
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
        <PostModalWrapper>
          <div className="identifier">
            <div className="logo-image">
              <img src={Logo} alt="logo" />
            </div>
            <Marginer direction="horizontal" margin={10} />
            <p>Fab Hub Ashanti</p>
          </div>
          <textarea
            placeholder="What are you posting about?"
            onChange={AdjustHeight}
          />
          <div className="addons">
            <h3>Add to post</h3>
            <div className="options">
              <img src={AddPhoto} alt="add photos" />
              <img src={AddTag} alt="add tags" />
              <img src={AddCheckin} alt="add Checkins" />
              <img src={AddDoc} alt="add Docs" />
            </div>
          </div>
          <Marginer direction="vertical" margin={20} />
          <Button width="100%">Post</Button>
        </PostModalWrapper>
      </Modal.Body>
    </Modal>
  );
}

export default CreatePostModal;
