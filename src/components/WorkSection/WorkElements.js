import styled from 'styled-components'

export const WorkContainer = styled.div`
    overflow: hidden;
    background:${({lightTheme})=>(lightTheme? '#f6f6f6':'#121212')};

    @media screen and (max-width: 768px){
        padding: 100px 0;
    }
`

export const WorkWrapper = styled.div`
    display: flex;
    //background-color:green;
    z-index: 1;
    height: 100vh;
    width: 100%;
    max-width: 1200px;
    margin-right: auto;
    margin-left: auto;
    padding: 30px 15px;
    justify-content: center;

    @media screen and (max-width: 768px){
        height: max-content;
    }
`

export const Column1 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;
`

export const TextWrapper = styled.div`
    padding-top: 0;
    padding-bottom: 60px;
    /* display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center; */
`

export const TopLine = styled.p`
    color: #ebbf5d;
    font-size: 20px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
`

export const Heading = styled.h1`
    margin-bottom: 24px;
    font-size: 40px;
    line-height: 1.1;
    font-weight: 600;
    color: ${({lightTheme})=>(lightTheme? '#121212': '#ffffffd9')};
    
    @media screen and (max-width: 480px){
        font-size: 28px;
    }
`

export const WorkBox= styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    border-radius: 20px;
    border: 5px solid #ebbf5d;
    padding: 5px 10px;
    margin-bottom: 15px;
    width:100%;
    transition: all 0.2s ease-in-out;

    &:hover{
        background: ${({lightTheme})=>(lightTheme?'#ebbf5d':'#dfa31c')};
        box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    }
`

export const Subtitle= styled.p`
    margin-bottom: 10px;
    font-size: 18px;
    line-height: 24px;
    color: ${({lightTheme})=>(lightTheme? '#121212': '#ffffffd9')};
`

export const Subtitle1= styled.p`
    margin-bottom: 10px;
    font-size: 15px;
    line-height: 24px;
    color: ${({lightTheme})=>(lightTheme? '#121212': '#ffffffd9')};
`

export const BtnWrap = styled.div`
    display: flex;
    justify-content:flex-start;
`

export const ImgWrap = styled.div`
    //background-color:green;
    overflow: hidden;
    max-width:500px;
    height: auto;
    display: inline-block;
`

export const Img = styled.img`
    max-height: 100%;
    max-width: 100%;
    height: auto;
    width:auto;
    display: block;
    /* width: 100%auto;
    display:block;
    margin: 0 0 10px 0;
    padding-right: 0; */
`