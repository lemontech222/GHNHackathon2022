import styled from 'styled-components';

export const CarouselContainer = styled.div`
    position: relative;
    overflow:hidden;

    & .slider{
        /* position:absolute; */
        width:100%;
        padding:5px;
        height:100px;
        display:flex;
        z-index:10;
        justify-content:space-evenly;
    }
    & .slider img{
        cursor:pointer;
        max-height:100%;
    }
`