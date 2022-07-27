import styled from 'styled-components';

export const EventContainer = styled.div`
    & .hub-link{
        display:inline-block;
        text-decoration:none;
        max-width:220px;
    }
    & .hub-link .hub-name-logo{
        display:flex;
        justify-content:space-between;
    }
    & .hub-link .hub-name-logo .hub-logo{
        height:40px;
        width:40px;
        margin-right:5px;
    }
    & .hub-link .hub-name-logo .hub-name{
        color:#000;
    }
    & .hub-link .hub-name-logo .hub-name h6{
        margin:0px;
        color:#000;
    }
    & .hub-link .hub-name-logo .hub-logo img{
        height:100%;
        width:100%;
        border-radius:50%;
        border:1px solid var(--primary-color);
    }
    & .event-flyer{
        width:100%;
    }
    & .event-flyer img{
        width:100%;
    }
    & .apply-btn{
        width:fit-content;
        padding:10px 20px;
        background-color:var(--primary-color);
        border:1px solid var(--primary-color);
        color:#fff;
        font-weight:bolder;
        border-radius:5px;
    }
`
