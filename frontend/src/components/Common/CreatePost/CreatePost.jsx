import { useState } from 'react';
import { Button } from '..';
import { Marginer } from '../Marginer';
import { ContainerWrap } from '../PostsContainer/ContainerWrap';
import { CreatePostWrapper } from './CreatePost.style';
import CreatePostModal from './CreatePostModal';

const CreatePost = () => {
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
    <ContainerWrap noPadding>
      <CreatePostWrapper>
        <div className="top-design"></div>
        <div className="create-posts">
          <Button onClick={handleShow}>Create Event</Button>
          <Marginer direction="horizontal" margin={10} />
          <Button id="post" onClick={handleShow}>
            Create Post
          </Button>
          <Marginer direction="horizontal" margin={10} />
          <Button>Open Forum</Button>
        </div>
      </CreatePostWrapper>
      <CreatePostModal show={showPost} onHide={handleClose} />
    </ContainerWrap>
  );
};

export default CreatePost;
