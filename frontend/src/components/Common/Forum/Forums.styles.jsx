import styled from 'styled-components';

export const ForumsWrapper = styled.div`
  width: 100%;
  min-height: ${({ height }) => (height ? height + 'vh' : '0')};
  background: #ffffff;
  border-radius: 10px;
  box-shadow: 0px 1px 0px 0px #cac1c1;
  display: flex;
  flex-direction: column;
  align-items: ${({ align }) => (align ? align : 'flex-start')};

  & .forums-header {
    width: 100%;
    min-height: 50px;
    background: #34abde;
    color: #ffffff;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    border-bottom: 1px solid rgba(72, 72, 72, 0.2);
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  & h1,
  h2,
  h3 {
    font-size: 20px;
    color: #ffffff;
  }

  & .forums {
    width: 100%;
    height: 400px;
    overflow-x: hidden;
    overflow-y: auto;
  }

  & .forum-wrapper {
    width: 100%;
    padding: 15px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    border-bottom: 1px solid rgba(72, 72, 72, 0.2);

    &:hover {
      cursor: pointer;
      filter: contrast(0.8);
      box-shadow: -3px 2px 5px 1px rgba(248, 99, 29, 0.4);
      -webkit-box-shadow: -3px 2px 5px 1px rgba(248, 99, 29, 0.4);
      -moz-box-shadow: -3px 2px 5px 1px rgba(248, 99, 29, 0.4);
    }
  }

  & .forum-title {
    width: 100%;
    font-style: normal;
    font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : '500')};
    font-size: ${({ fontSize }) => (fontSize ? fontSize + 'px' : '20px')};
    color: ${({ color }) => (color ? color : '#000000')};
  }

  & .forum-author {
    font-style: normal;
    font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : '400')};
    font-size: ${({ fontSize }) => (fontSize ? fontSize + 'px' : '12px')};
    margin: 0;

    color: ${({ color }) => (color ? color : '#000000')};
  }

  & .forum-body {
    font-style: normal;
    font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : '400')};
    font-size: ${({ fontSize }) => (fontSize ? fontSize + 'px' : '15px')};
    margin: 0;

    color: ${({ color }) => (color ? color : '#000000')};
  }

  & .forum-extras {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  & .forum-comments {
    font-style: normal;
    font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : '400')};
    font-size: ${({ fontSize }) => (fontSize ? fontSize + 'px' : '12px')};
    margin: 0;

    color: ${({ color }) => (color ? color : '#000000')};
  }

  & .forum-duration {
    font-style: normal;
    font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : '400')};
    font-size: ${({ fontSize }) => (fontSize ? fontSize + 'px' : '12px')};
    margin: 0;

    color: ${({ color }) => (color ? color : '#000000')};
  }
`;
