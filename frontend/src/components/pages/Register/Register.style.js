import styled from 'styled-components';

export const DesgnationButtons = styled.button`
    &{
        width:100px;
        padding:15px;
        border: 1px solid ${(props)=>props.designation.set ? 'var(--primary-color)' : '#ccc'};
        border-top-left-radius: ${(props)=>props.designation.value==='register_hub' ? '10px' : '0px'};
        border-bottom-left-radius: ${(props)=>props.designation.value==='register_hub' ? '10px' : '0px'};
        border-top-right-radius: ${(props)=>props.designation.value==='register' ? '10px' : '0px'};
        border-bottom-right-radius: ${(props)=>props.designation.value==='register' ? '10px' : '0px'};
        background-color: ${(props)=>props.designation.set ? 'var(--primary-color)' : '#ccc'};
        color:${(props)=>props.designation.set ? '#fff' : '#333'};
        transition:0.4s all;
    }
    &:hover{
        background-color: var(--primary-color);
        color:#fff;
    }

`
