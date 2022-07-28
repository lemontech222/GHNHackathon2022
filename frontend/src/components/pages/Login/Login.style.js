import styled from "styled-components";

export const AuthContainer = styled.div`
    display: flex;
    flex-direction:column;
    position:relative;
    top:50%;
    left:50%;
    transform:translate(-50%,50%);
    max-width: 600px;

    & form{
        width:100%;
        display:grid;
        gap:15px;
        align-items:center;
        
    }
    & form div{
        display:flex;
    }
    & form div input{
        width:100%;
        font-size:1.6em;
        padding:10px 15px;
        border-radius:5px;
        border:1px solid black;
        background-color:#fff;
    }
    & form aside{
        display:block;
        font-size:1.4em;
        font-weight:bolder;
    }
    & form .login-btn{
        display:block;
    }
`
