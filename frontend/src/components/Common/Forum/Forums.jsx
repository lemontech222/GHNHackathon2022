import { ForumsWrapper } from './Forums.styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faMessage } from '@fortawesome/free-regular-svg-icons';

const Forums = () => {
  return (
    <ForumsWrapper>
      <div className="forums-header">
        <h1>Forums</h1>
        <a href="#">
          <h3>See All</h3>
        </a>
      </div>
      <div className="forums">
        <div className="forum-wrapper">
          <h3 className="forum-title">
            How are the MEST Portfolio startups generating funds through VCs.
          </h3>
          <p className="forum-author">posted by: Kwame John</p>
          <p className="forum-body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
            odio. Praesent....
          </p>
          <div className="forum-extras">
            <p className="forum-comments">
              <FontAwesomeIcon icon={faMessage} color="#34abde" fontSize={15} />{' '}
              234
            </p>
            <p className="forum-duration">
              {' '}
              <FontAwesomeIcon
                icon={faClock}
                color="#34abde"
                fontSize={15}
              />{' '}
              2hr ago
            </p>
          </div>
        </div>
        <div className="forum-wrapper">
          <h3 className="forum-title">
            How are the MEST Portfolio startups generating funds through VCs.
          </h3>
          <p className="forum-author">posted by: Kwame John</p>
          <p className="forum-body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
            odio. Praesent....
          </p>
          <div className="forum-extras">
            <p className="forum-comments">
              <FontAwesomeIcon icon={faMessage} color="#34abde" fontSize={15} />{' '}
              234
            </p>
            <p className="forum-duration">
              {' '}
              <FontAwesomeIcon
                icon={faClock}
                color="#34abde"
                fontSize={15}
              />{' '}
              2hr ago
            </p>
          </div>
        </div>
        <div className="forum-wrapper">
          <h3 className="forum-title">
            How are the MEST Portfolio startups generating funds through VCs.
          </h3>
          <p className="forum-author">posted by: Kwame John</p>
          <p className="forum-body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
            odio. Praesent....
          </p>
          <div className="forum-extras">
            <p className="forum-comments">
              <FontAwesomeIcon icon={faMessage} color="#34abde" fontSize={15} />{' '}
              234
            </p>
            <p className="forum-duration">
              {' '}
              <FontAwesomeIcon
                icon={faClock}
                color="#34abde"
                fontSize={15}
              />{' '}
              2hr ago
            </p>
          </div>
        </div>
      </div>
    </ForumsWrapper>
  );
};

export default Forums;
