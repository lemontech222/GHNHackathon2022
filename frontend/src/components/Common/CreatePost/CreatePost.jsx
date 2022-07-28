import { useState } from 'react';
import { Button } from '..';
import { Marginer } from '../Marginer';
import { ContainerWrap } from '../PostsContainer/ContainerWrap';
import CreateEventModal from './CreateEventModal';
import CreateForumModal from './CreateForumModal';
import { CreatePostWrapper } from './CreatePost.style';
import CreatePostModal from './CreatePostModal';

const CreatePost = () => {
  const [showPost, setShowPost] = useState(false);
  const [showEvent, setShowEvent] = useState(false);
  const [showForum, setShowForum] = useState(false);

  const handleClose = () => {
    setShowPost(false);
    setShowEvent(false);
    setShowForum(false);
  };
  const handleShow = (e) => {
    e.target.id === 'post' && setShowPost(true);
    e.target.id === 'event' && setShowEvent(true);
    e.target.id === 'forum' && setShowForum(true);
  };
  return (
    <ContainerWrap noPadding>
      <CreatePostWrapper>
        <div className="top-design"></div>
        <div className="create-posts">
          <Button id="event" onClick={handleShow}>
            Create Event
          </Button>
          <Marginer direction="horizontal" margin={10} />
          <Button id="post" onClick={handleShow}>
            Create Post
          </Button>
          <Marginer direction="horizontal" margin={10} />
          <Button id="forum" onClick={handleShow}>
            Open Forum
          </Button>
        </div>
      </CreatePostWrapper>
      <CreatePostModal show={showPost} onHide={handleClose} />
      <CreateEventModal show={showEvent} onHide={handleClose} />
      <CreateForumModal show={showForum} onHide={handleClose} />
    </ContainerWrap>
  );
};

export default CreatePost;
