import styled from 'styled-components';

export const DesgnationButtons = styled.button`
    &{
        padding:15px;
        border: 1px solid ${(props)=>props.designation.set ? 'var(--primary-color)' : '#ccc'};
        background-color: ${(props)=>props.designation.set ? 'var(--primary-color)' : '#ccc'};
        color:${(props)=>props.designation.set ? '#ccc' : 'var(--primary-color)'};
        transition:0.4s all;
    }
    &:hover{
        background-color: var(--primary-color);
        color:#fff;
    }

`
