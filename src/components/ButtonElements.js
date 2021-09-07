import styled from 'styled-components'
import {Link as LinkS} from 'react-scroll'
import {Link as LinkR} from 'react-router-dom'

export const ButtonS = styled(LinkS)`
    border-radius: 50px;
    background: ${({lightTheme})=>(lightTheme? '#282418':'#ebbf5d')};
    white-space: nowrap;
    padding: 12px 30px;
    color: ${({lightTheme})=>(lightTheme?'#ebbf5d':'#282418')};
    font-size: 16px;
    outline: none;
    border:none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items:center;
    transition: all 0.2s ease-in-out;

    &:hover{
        transition: all 0.2s ease-in-out;
        background: ${({lightTheme})=>(lightTheme? '#ebbf5d':'#f1d28e')};
        color: ${({lightTheme})=>(lightTheme? '#282418':'#282418')};
    }
`

export const ButtonR = styled(LinkR)`
    border-radius: 50px;
    background: ${({lightTheme})=>(lightTheme? '#282418':'#ebbf5d')};
    white-space: nowrap;
    padding: 12px 30px;
    color: ${({lightTheme})=>(lightTheme?'#ebbf5d':'#282418')};
    font-size: 16px;
    outline: none;
    border:none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items:center;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover{
        transition: all 0.2s ease-in-out;
        background: ${({lightTheme})=>(lightTheme? '#ebbf5d':'#f1d28e')};
        color: ${({lightTheme})=>(lightTheme? '#282418':'#282418')};
    }
`