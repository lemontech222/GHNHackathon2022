import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled from 'styled-components';

const SearchBoxContainer = styled.div`
  width: 800px;
  display: flex;
  align-items: center;
`;

const Box = styled.input`
  width: 100%;
  height: 50px;
  outline: none;
  border: 1px solid rgba(200, 200, 200, 0.9);
  border-left: 0;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  padding: 0 20px;
  transition: all, 200ms ease-in-out;
  box-sizing: border-box;
  //   border-bottom: 2px solid #072a40;
  font-size: 16px;
  background-color: #ecedf2;

  &::placeholder {
    color: rgba(74, 79, 85, 0.4);
    font-weight: bold;
  }

  &:focus {
    outline: none;
    box-shadow: 0px 0px 2px rgba(200, 200, 200, 1);
    border-bottom: 2px solid #34abde;
  }
`;

const BoxIcon = styled.span`
  width: 50px;
  height: 50px;
  outline: none;
  border: 1px solid rgba(200, 200, 200, 0.9);
  border-right: 0;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #34abde;
  color: #fff;
`;

export function SearchBox(props) {
  return (
    <SearchBoxContainer>
      <BoxIcon>
        <FontAwesomeIcon icon={faSearch} />
      </BoxIcon>
      <Box placeholder="SEARCH" />
    </SearchBoxContainer>
  );
}
