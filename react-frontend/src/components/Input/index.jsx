import styled from 'styled-components';

const InputWrapper = styled.input`
  box-sizing: border-box;
  width: ${({ width }) => (width ? width + 'px' : '100%')};
  height: 60px;
  margin: 5px 0;
  padding: 0 23px;
  font-size: 24px;
  line-height: 29px;

  border: 1px solid #34abde;
  border-radius: 5px;

  &::placeholder {
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    line-height: 29px;

    color: #322f2f;
  }

  &:focus {
    border: 2px solid #34abde;
  }
`;

export const TextArea = styled.textarea`
  box-sizing: border-box;
  width: ${({ width }) => (width ? width + 'px' : '100%')};
  height: 60px;
  margin: 5px 0;
  padding: 10px 23px;
  font-size: 24px;
  line-height: 29px;
  resize: vertical;
  overflow: hidden;

  border: 1px solid #34abde;
  border-radius: 5px;

  &::placeholder {
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    line-height: 29px;

    color: #322f2f;
  }

  &:focus {
    border: 2px solid #34abde;
  }
`;

export function Input(props) {
  const {
    placeholder,
    type,
    width,
    onChange,
    onClick,
    onfocus,
    onblur,
    required,
  } = props;
  return (
    <InputWrapper
      placeholder={placeholder}
      type={type}
      width={width}
      onChange={onChange}
      onClick={onClick}
      onFocus={onfocus}
      onBlur={onblur}
      required={required}
    />
  );
}
