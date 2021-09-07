import styled from 'styled-components';
import {Link as LinkR} from 'react-router-dom';
import {Link as LinkS} from 'react-scroll'

export const Container = styled.div`
    min-height: 692px;
    width:100%;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    z-index: 1;
    background: #121212;
    overflow-y:scroll;
    padding: 10px;
    overflow: hidden;
`
export const BlogBg = styled.div`
    position: fixed;
    top: 0;
    right:0;
    bottom:0;
    left:0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`

export const ImageBg = styled.img`
    width:100%;
    height:100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #232a34;
    object-position: 0% 0%;
    opacity: ${({lightTheme})=>(lightTheme? '0.8':'0.5')};
`

export const BlogWrapper = styled.div`
    height: auto;
    display:flex;
    height: max-content;
    flex-direction: column;
    justify-content: center;
    margin-bottom:3em;
`

export const IconWrapper= styled.div`
    display:flex;
    flex-wrap: nowrap;
    align-content: space-between;
`

export const Icon = styled(LinkR)`
    color: ${({lightTheme})=>(lightTheme? '#121212':'#ffffffd9')};
    background-color: ${({lightTheme})=>(lightTheme? '#ffffffd9':'#00000080')};
    border-radius: 30px;
    position: fixed;
    margin-left: 32px;
    margin-top: 32px;
    text-decoration: none;
    font-weight: 700;
    font-size: 32px;
    padding: 15px;
    z-index:1;

    &:hover{
        transition: all 0.2 ease-in-out;
        color: #ebbf5d;
        //background-color:white;
    };

    @media screen and (max-width: 768px){
        font-size: 28px;
    }

    @media screen and (max-width: 400px){
        margin-left: 16px;
        margin-top: 8px;
    }
`
export const Blank = styled.div`
    display: flex;
    flex-wrap:nowrap;
    align-items: center;
    justify-content: space-between;
    min-width: 75px;
    margin-left: 2em;

    @media screen and (max-width: 430px){
        transform: scale(0.8)
    } 
`
export const Blank1 = styled.div`
    display: flex;
    min-width: 75px;
    margin-left: 2em;

    @media screen and (max-width: 475px){
        display: none;
    }
`

export const BlogContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-top: 3em;

    @media screen and (max-width: 1100px){
        padding-top: 8em;
    }

    @media screen and (max-width: 480px){
        padding-top: 8em;
    }
`
export const Blog = styled.form`
    background:${({lightTheme})=>(lightTheme? '#ffffffd9':'#121212')};
    max-width: 600px;
    width: auto;
    min-height: 500px;
    height: max-content;
    width: auto;
    z-index: 1;
    display:grid;
    /* flex-direction: column; */
    margin: 0 auto;
    padding: 40px 0;
    border-radius: 4px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.9);
`

export const BlogH1 = styled.h1`
    font-size: 2.5rem;
    color: #ebbf5d;
    font-weight: 550;
    padding-bottom: 1em;
    text-align: center;

    @media screen and (max-width: 430px){
        font-size: 2rem;
    } 

    @media screen and (max-width: 365px){
        font-size: 1.7rem;
    } 
`

export const BlogCard = styled.div`
    background:transparent;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 0 25px;
    padding-bottom: 30px;
    overflow: hidden;
    /* box-shadow: 0 1px 3px rgba(0,0,0,0.2); */
    transition: all 0.2s ease-in-out;
`

export const TitleWrapper = styled.div`
    width:100%;
    display:flex;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 0.5em;
`

export const BlogTitle = styled.h2`
    display:flex;
    font-size: 1.3rem;
    color: ${({lightTheme})=>(lightTheme?'#121212':'#ffffffd9')};
    font-weight: 500;
    text-align: center;
    text-decoration: underline;
    @media screen and (max-width: 430px){
        font-size: 1.1rem;
    } 

    @media screen and (max-width: 365px){
        font-size: 0.9rem;
    } 
`
export const ImgWrapper = styled.div`
    display:flex;
    overflow-y: hidden;
    max-height: 400px;
    align-items:center;
    justify-content:center;
    padding-bottom: 0.7em;
`

export const BlogImg = styled.img`
    width: 100%;
    height: auto;
`

export const LabelWrapper = styled.div`
    width: 100%;
    display:flex;
    justify-content:flex-start;
    padding-bottom: 0.5em;
`

export const BlogLabel = styled.label`
    margin-bottom: 3px;
    font-size: 1rem;
    color: ${({lightTheme})=>(lightTheme?'#121212':'#ffffffd9')};
    @media screen and (max-width: 430px){
        font-size: 0.9rem;
    } 
`
export const BlogDescription = styled.p`
    margin-top: 7px;
    padding-bottom: 0.3em;
    font-size: 0.9em;
    color: ${({lightTheme})=>(lightTheme?'#121212':'#ffffffd9')};
    @media screen and (max-width: 430px){
        font-size: 0.8rem;
    } 
`

export const BlogDate = styled.span`
    text-align: center;
    padding-bottom: 0.3em;
    color: ${({lightTheme})=>(lightTheme?'#121212':'#ffffffd9')};
    font-size: 12px;
`

export const ButtonWrapper = styled.div`
    width: 100%;
    display:flex;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 0.7em;
`

export const ArrowIcon = styled(LinkS)`
    //margin-top: 3px;
    display: flex;
    font-size: 1.8rem;
    cursor: pointer;
    color: ${({lightTheme})=>(lightTheme? '#121212': '#ffffffd9')};
    border-radius: 50%;
    border: 1.5px solid;

    &:hover{
    transition: all 0.2s ease-in-out;
    color: ${({lightTheme})=>(lightTheme? '#ffffffd9': '#121212')};
    background: ${({lightTheme})=>(lightTheme? '#121212': '#ffffffd9')};
    border-color:  ${({lightTheme})=>(lightTheme? '#121212': '#ffffffd9')};
    /* color: #ebbf5d; */
    }
`