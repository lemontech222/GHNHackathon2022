import styled from 'styled-components';

const ButtonContainer = styled.button`
  position: ${({ absolute }) => (absolute ? 'absolute' : 'none')};
  width: ${({ width }) => (width ? width + 'px' : '432px')};
  height: ${({ height }) => (height ? height + 'px' : '75px')};
  left: ${({ left }) => (left ? left + 'px' : 'none')};
  top: ${({ top }) => (top ? top + 'px' : 'none')};
  font-style: normal;
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : '600')};
  font-size: ${({ size }) => (size ? size + 'px' : '24px')};
  line-height: 29px;
  color: ${({ color }) => (color ? color : '#ffffff')};
  outline: none;
  border: ${({ border }) => (border ? border : 'none')};

  background: ${({ bgcolor }) => (bgcolor ? bgcolor : '#34abde')};
  border-radius: ${({ bradius }) => (bradius ? bradius + 'px' : '60px')};

  &:hover {
    filter: contrast(0.8);
    box-shadow: -3px 2px 5px 1px rgba(248, 99, 29, 0.4);
    -webkit-box-shadow: -3px 2px 5px 1px rgba(248, 99, 29, 0.4);
    -moz-box-shadow: -3px 2px 5px 1px rgba(248, 99, 29, 0.4);
    cursor: pointer;
  }
`;

export function Button(props) {
  const {
    size,
    color,
    click,
    top,
    bgcolor,
    border,
    left,
    fontWeight,
    width,
    height,
    bradius,
  } = props;
  return (
    <ButtonContainer
      size={size}
      color={color}
      onClick={click}
      className={props.className}
      top={top}
      bgcolor={bgcolor}
      border={border}
      left={left}
      fontWeight={fontWeight}
      width={width}
      height={height}
      bradius={bradius}
    >
      {props.children}
    </ButtonContainer>
  );
}
