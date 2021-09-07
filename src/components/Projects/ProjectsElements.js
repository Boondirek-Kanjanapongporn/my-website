import styled from 'styled-components'

export const ProjectsContainer = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background:${({lightTheme})=>(lightTheme? '#f6f6f6':'#121212')};

    @media screen and (max-width: 768px){
        height:max-content;
        padding-top: 7em;
    }
`

export const ProjectsWrapper = styled.div`
    background-color: ${({lightTheme})=>(lightTheme? "#e6e6e6":"transparent")};
    border: 2px solid;
    border-radius: 10px;
    border-color: ${({lightTheme})=>(lightTheme? "#121212":"transparent")};
    right: 0;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: row;
    height: 370px;
    overflow-x: scroll;
    overflow-y:hidden;
    max-width: 85vw;
    padding: 0 2rem;
    margin-bottom: 4em;

    @media screen and (max-width:768px){
        transform: scale(0.95);
        transition:all 0.2 ease-in-out;
    };

    @media screen and (max-width:355px){
        transform: scale(0.85);
        transition:all 0.2 ease-in-out;
    };

    @media screen and (max-width:350px){
        transform: scale(0.75);
        transition:all 0.2 ease-in-out;
        margin: 0 0;
    }
`

export const ProjectsCard = styled.div`
    background:${({lightTheme})=>(lightTheme? '#121212':'#ffffffd9')};
    min-width: 270px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    margin: 0 10px;
    padding: 0 30px;
    padding-bottom: 30px;
    overflow: hidden;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out;

    &:hover{
        transform: scale(1.03);
        transition: all 0.2s ease-in-out;
        cursor: pointer
    }
`

export const CardLink = styled.a`
    position: fixed;
    margin: 0 auto;
    z-index: 10;
    height: 100%;
    width: 100%;
`

export const ProjectsIcon = styled.img`
    height: 160px;
    width: auto;
    margin-bottom: 10px;
    transform: scale(1.07);
`

export const ProjectsH1 = styled.h1`
    font-size: 2.5rem;
    color: #ebbf5d;
    padding-bottom: 45px;

    @media screen and (max-width:480px){
        font-size: 2rem;
    }
`

export const ProjectsH2 = styled.h2`
    color: ${({lightTheme})=>(lightTheme?'#ffffffd9':'#121212')};
    font-size:1rem;
    margin-bottom:10px;
`

export const ProjectsP = styled.p`
    color: ${({lightTheme})=>(lightTheme?'#ffffffd9':'#121212')};
    font-size: 1rem;
    text-align: center;
`