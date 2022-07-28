import React, {useState} from 'react';
import { Modal } from 'react-bootstrap';
import { PostModalWrapper } from './CreatePost.style';
import { Marginer } from '../Marginer';
import AddPhoto from '../../../images/icons/photos 1.png';
import AddTag from '../../../images/icons/tag 1.png';
import AddCheckin from '../../../images/icons/check-in 1.png';
import AddDoc from '../../../images/icons/doc 1.png';
import { Button } from '..';
import { useTokens } from '../../../context/TokensContext';

export const AdjustHeight = (e) => {
  e.target.style.height = e.target.scrollHeight + 'px';
};

function CreatePostModal(props) {
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
          Create Post
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
          <textarea
            placeholder="What are you posting about?"
            onChange={AdjustHeight}
          />
          <div className="addons">
              <h3>Add to post</h3>
              <div className="options">
                <img src={AddPhoto} alt="add photos" />
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
