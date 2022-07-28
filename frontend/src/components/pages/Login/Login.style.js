import styled from "styled-components";

export const AuthContainer = styled.div`
    position:relative;
    display: flex;
    flex-direction:column;
    position:relative;
    max-width: 600px;
    margin: 10% auto 0% auto;

    & h6{
        margin-bottom:20px;        
        font-size:1.4em;
    }
    & .new-user{
        text-align:center;
        font-size:1.4em;
    }
    & form{
        width:100%;
        display:grid;
        gap:15px;
        align-items:center;
        font-size:1.4em;
        
    }
    & form div{
        display:flex;
    }
    & form div.email-field{
        margin-bottom:30px;
    }
    & form div input{
        width:100%;
        font-size:1.4em;
        padding:10px 15px;
        border-radius:5px;
        border:1px solid black;
        background-color:#fff;
    }
    & form div input:focus{
        outline:none;
    }
    & form aside{
        display:block;
        font-weight:bolder;
    }
    & form .login-btn button{
        width:100%;
        display:block;
        border:1px solid var(--primary-color);
        border-radius:35px;
        background-color:var(--primary-color);
        color:#fff;
        font-weight:bolder;
        padding: 20px;
        margin: 15px 0px;
        transition:0.4s all;
    }
    & form .login-btn button:hover{
        background-color:var(--faded-primary);
    }
    & form .google-login-btn button{
        width:100%;
        display:block;
        border:1px solid #000;
        border-radius:35px;
        background-color:#fff;
        color:#000;
        font-weight:light;
        padding: 20px;
        margin: 15px 0px;
        transition:0.4s all;
    }
    & form .separator{
        flex-direction:column;
        position:relative;
        padding:30px 0px;
    }
    & form .separator .line{
        height: 1px;
        width:100%;
        background-color:#000;
    }
    & form .separator p{
        position:absolute;
        top:0;
        left:50%;
        transform:translate(-50%,-10%);
        padding:20px;
        background-color:#fff;
        border-radius:50%;
    }
`
