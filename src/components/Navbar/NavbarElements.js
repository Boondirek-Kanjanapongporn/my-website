import styled from "styled-components"
import {Link as LinkR} from "react-router-dom"
import {Link as LinkS} from "react-scroll"

export const Nav = styled.nav`
    background: ${({lightTheme, scrollNav})=>(lightTheme? (scrollNav? "#f6f6f6" : "#ffffffd9"): (scrollNav? "#121212" : "#00000080"))};
    height: 80px;
    // margin-top: -80px;
    display: flex;
    align-items:center;
    justify-content: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index:10;

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`;

export const NavbarDetail = styled.div`
    height: 80px;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
    display:flex;
    align-items:center;
    flex-wrap:nowrap;
`

export const ThemeIcon = styled.div`
    //padding-left: ${({lightTheme})=>(lightTheme? '25px': '30px')};
    margin-top: 5px;
    padding:0;
    margin-left: ${({lightTheme})=>(lightTheme? '30px': '35px')};
    font-size: ${({lightTheme})=>(lightTheme? '1.8rem': '1.5rem')};
    cursor: pointer;
    color: ${({lightTheme})=>(lightTheme? '#ebbf5d': '#ebbf5d')};

    &:hover{
        transition: all 0.2s ease-in-out;
        color: ${({lightTheme})=>(lightTheme? '#121212': '#ffffffd9')};
    }

    @media screen and (max-width: 768px){
        margin-right: 65px;
    }
`

export const NavbarContainer = styled.div`
    //background-color:green;  
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    height: 100%;
    //padding: 0 24px;
    //max-width: 1100px;
`;

export const Navlogo = styled(LinkR)`
    // background-color:white;
    color: ${({lightTheme})=>(lightTheme? '#121212': '#ffffffd9')};
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-left: 24px;
    font-weight: bold;
    text-decoration: none;

    &:hover{
        transition: all 0.2s ease-in-out;
        color: #ebbf5d;
    }

    @media screen and (max-width: 780px){
        font-size:1.5rem
    }

    @media screen and (max-width: 768px){
        font-size:1.5rem
    }
`;

export const MobileIcon = styled.div`
    display: none;
    @media screen and (max-width: 768px) {
        margin-top: 3px;
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: ${({lightTheme})=>(lightTheme? '#121212': '#ffffffd9')};

        &:hover{
            transition: all 0.2s ease-in-out;
            color: #ebbf5d;
        }
    }
`;

export const NavMenu = styled.ul`
    // background-color:white;
    display: flex;
    width: 450px;
    justify-content: space-evenly;
    align-items: flex;
    list-style: none;
    text-align: center;
    margin-right: -20px;
    @media screen and (max-width: 768px){
        display:none;
    }
`;

export const NavItem = styled.li`
    height: 100%;
`

export const NavLinks = styled(LinkS)`
    color: ${({lightTheme})=>(lightTheme? '#121212': '#ffffffd9')};
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor:pointer;

    &:hover{
        transition: all 0.2 ease-in-out;
        color: #ebbf5d;
        border-bottom: 3px solid #282418;
    };
    &.active{
        border-bottom: 3px solid #ebbf5d;
    };
`

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;

    @media screen and (max-width: 768px){
        display: none;
    }
`

export const NavBtnLink = styled(LinkR)`
    border-radius: 50px;
    background: ${({lightTheme})=>(lightTheme? '#282418':'#ebbf5d')};
    color: ${({lightTheme})=>(lightTheme?'#ebbf5d':'#282418')};
    white-space: nowrap;
    padding: 10px 22px;
    font-size: 16 px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: ${({lightTheme})=>(lightTheme? '#ebbf5d':'#f1d28e')};
        color: ${({lightTheme})=>(lightTheme? '#282418':'#282418')};
    }
`