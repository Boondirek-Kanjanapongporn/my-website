import React from "react";
import styled from 'styled-components';
import {MdArrowForward, MdKeyboardArrowRight} from 'react-icons/md';

export const HeroContainer = styled.div`
    // background-color: black;
    margin-top:-80px;
    background: #121212;
    display:flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 100vh;
    position: relative;
    z-index: 1;
`

export const HeroBg = styled.div`
    position: absolute;
    top: 0;
    right:0;
    bottom:0;
    left:0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`

export const VideoBg = styled.video`
    width:100%;
    height:100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #232a34;
`

export const ImageBg = styled.img`
    display: ${({lightTheme})=>(lightTheme? 'none': '')};
    width:100%;
    height:100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #232a34;
    object-position: 0% 0%;
    opacity: ${({lightTheme})=>(lightTheme? '0.8':'0.5')};
`

export const ImageBg1 = styled.img`
    display: ${({lightTheme})=>(lightTheme? '': 'none')};
    width:100%;
    height:100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #232a34;
    object-position: 0% 0%;
    opacity: ${({lightTheme})=>(lightTheme? '0.8':'0.5')};
`

export const HeroDetail = styled.div`
    //background-color: green;
    width: 850px;
    margin:auto;
    z-index: 3;
    display:flex;
    flex-direction: column;
    max-width: 1200px;
    padding: 0 0;
    align-items: center;
    justify-content: space-between;

    @media screen and (max-width:910px){
        width:auto;
    }
`

export const ImageWrapper = styled.div`
    width: 200px;
    height: 200px;
    margin-bottom: 1rem;
`

export const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
    border: 5px solid;
    border-color: ${({lightTheme})=>(lightTheme? '#282418': '#ebbf5d')};
`

export const HeroContent = styled.div`
    background-color:${({lightTheme})=>(lightTheme? 'rgb(255,255,255,.7)':'rgb(0,0,0,.5)')};
    //z-index:3;
    margin: 0 auto;
    max-width: 1200px;
    position: flex;
    padding: 8px 24px;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
`

export const HeroH1 = styled.h1`
    color: ${({lightTheme})=>(lightTheme? '#282418': '#ebbf5d')};
    opacity: 2.0;
    font-size: 48px;
    text-align: center;

    @media screen and (max-width: 768px){
        font-size: 40px;
    }

    @media screen and (max-width: 550px){
        font-size: 36px;
    }

    @media screen and (max-width: 480px){
        font-size: 32px;
    }

    @media screen and (max-width: 460px){
        font-size: 25px;
    }

    @media screen and (max-width: 460px){
        font-size: 25px;
    }

    @media screen and (max-width: 365px){
        font-size: 20px;
    }
    
`

export const HeroP = styled.p`
    margin-top: 24px;
    color: ${({lightTheme})=>(lightTheme? '#121212': '#ffffffd9')};
    font-size: 24px;
    text-align: center;
    max-width: 600px;

    @media screen and (max-width: 768px){
        font-size: 24px;
    }

    @media screen and (max-width: 480px){
        font-size: 18px;
    }
`

export const HeroBtnWrapper = styled.div`
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const ArrowForward = styled(MdArrowForward)`
    margin-left: 8px;
    font-size: 20px;
`

export const ArrowRight = styled(MdKeyboardArrowRight)`
    margin-left: 8px;
    font-size: 20px;
`