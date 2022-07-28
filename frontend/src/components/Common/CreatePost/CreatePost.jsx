import { Button } from '..';
import { Marginer } from '../Marginer';
import { ContainerWrap } from '../PostsContainer/ContainerWrap';
import { CreatePostWrapper } from './CreatePost.style';

const CreatePost = () => {
  return (
    <ContainerWrap noPadding>
      <CreatePostWrapper>
        <div className="top-design"></div>
        <div className="create-posts">
          <Button>Create Event</Button>
          <Marginer direction="horizontal" margin={10} />
          <Button>Create Post</Button>
          <Marginer direction="horizontal" margin={10} />
          <Button>Open Forum</Button>
        </div>
      </CreatePostWrapper>
    </ContainerWrap>
  );
};

export default CreatePost;
