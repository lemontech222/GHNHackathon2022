import styled from 'styled-components';

const InputContainer = styled.input`
  box-sizing: border-box;

  position: absolute;
  width: ${({ width }) => (width ? width + 'px' : '432px')};
  height: 70px;
  left: ${({ left }) => (left ? left + 'px' : '26px')};
  top: ${({ top }) => (top ? top + 'px' : '163px')};
  margin: 5px 0;
  padding: 0 23px;
  font-size: 24px;
  line-height: 29px;

  border: 1px solid #000000;
  border-radius: 5px;

  &::placeholder {
    position: absolute;
    width: 248px;
    height: 32px;
    left: 23px;
    top: 19px;

    font-style: normal;
    font-weight: 300;
    font-size: 24px;
    line-height: 29px;

    color: #322f2f;
  }
`;

export function InputField(props) {
  const { placeholder, top, type, width, left } = props;
  return (
    <InputContainer
      placeholder={placeholder}
      top={top}
      left={left}
      type={type}
      width={width}
    />
  );
}
