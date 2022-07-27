import styled from 'styled-components'


export const NavBar = styled.nav`
    display:grid;
    grid-template-columns: 1fr 3fr 1fr;

    & .app-logo{
        max-height:80px;
        padding:5px 0px;
        display:flex;
        align-items:center;
    }
    & .app-logo img{
        height:100%;
    }
    & .search-form{
        display:flex;
        justify-content:center;
        align-items:center;
    }
    & .search-form input{
        width: 90%;
        background-color:#ccc;
        border:1px solid #ccc;
        border-top-left-radius:5px;
        border-bottom-left-radius:5px;
        font-size:1.4em;
        padding: 5px;
    }
    & .search-form button{
        font-size:1.4em;
        padding: 5px 10px;
        border-top-right-radius:5px;
        border-bottom-right-radius:5px;
        border:1px solid var(--primary-color);
        background-color:var(--primary-color);
        color:#fff;
    }
    & .navLinks{
        border:1px solid black;
        display:flex;
        justify-content:flex-end;
    }
`

