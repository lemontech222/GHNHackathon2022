import styled from 'styled-components';

export const CreatePostWrapper = styled.div`
  width: 100%;

  background: #ffffff;
  border-radius: 10px;
  //   box-shadow: 0px 1px 0px 0px #cac1c1;
  display: flex;
  flex-direction: column;
  align-items: ${({ align }) => (align ? align : 'flex-start')};

  & .top-design {
    width: 100%;
    background: #34abde;
    min-height: 8px;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
  }

  & .create-posts {
    width: 100%;
    min-height: 180px;
    padding: 10px 20px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
`;
