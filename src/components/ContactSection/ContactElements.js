import styled from 'styled-components'

export const ContactContainer = styled.div`
    height: 100vh;
    width:100%;
    display:flex;
    background:${({lightTheme})=>(lightTheme? '#f6f6f6':'#121212')};
    justify-content:center;
    align-items:center;
    padding: 0 15px;

    @media screen and (max-width: 768px){
        height:max-content;
        padding-top: 75px;
    }
`

export const ContactWrapper = styled.div`
    margin-right: auto;
    margin-left: auto;
    display:flex;
    flex-direction:column;
    align-items:center;
`

export const ContactH1 = styled.div`
    font-size: 2.5rem;
    color: #ebbf5d;
    font-weight: 550;
    padding-bottom: 10px;

    @media screen and (max-width:480px){
        font-size: 2rem;
    }
`

export const FormContainer = styled.form`
    //background-color:green;
    min-height: 300px;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 500px;

    @media screen and (max-width:530px){
        width: 400px;
    }

    @media screen and (max-width:430px){
        width: 350px;
    }
`

export const Container1 = styled.div`
    //background-color: blue;
    display:flex;
    flex-direction: column;
    align-items:center;
    width:100%;
    height:100%;
    margin-bottom: 1em;
    //border-bottom: 2px solid #ebbf5d;
`

export const Container2 = styled.div`
    //background-color: red;
    display:flex;
    flex-direction: column;
    align-items:center;
    width:100%;
    height:100%;
    //border-top: 2px solid #ebbf5d;
`

export const LabelWrapper = styled.div`
    display:flex;
    flex-direction: column;
    width: 100%;
    align-items:flex-start;
    justify-content:center;
`

export const Label = styled.label`
    color: ${({lightTheme})=>(lightTheme? '#121212': '#ffffffd9')};
    padding-bottom: 0.2em;
    font-size: 18px;
    font-weight:600;
    letter-spacing: 1.2px;
`

export const Input = styled.input`
    background: ${({lightTheme})=>(lightTheme? "#e6e6e6":"#a8a8a8")};
    color: ${({lightTheme})=>(lightTheme? '#121212': '#ffffffd9')};
    border-color: ${({lightTheme})=>(lightTheme? '#121212':'#ffffffd9')};
    border-radius: 15px;
    border: 1px solid;
    width: 100%;
    margin-bottom: 0.5em;
    height: 2.5em;
    padding-left: 0.5em;
    font-size: 16px;
`

export const TextArea = styled.textarea`
    background: ${({lightTheme})=>(lightTheme? "#e6e6e6":"#a8a8a8")};
    color: ${({lightTheme})=>(lightTheme? '#121212': '#ffffffd9')};
    border-color: ${({lightTheme})=>(lightTheme? '#121212':'#ffffffd9')};
    border-radius: 15px;
    border: 1px solid;
    width: 100%;
    margin-bottom: 2.5em;
    min-height: 100px;
    padding-top: 0.5em;
    padding-left: 0.5em;
    font-size: 16px;
`

export const SubmitButton = styled.input`
    background: ${({lightTheme})=>(lightTheme? '#282418':'#ebbf5d')};
    color: ${({lightTheme})=>(lightTheme?'#ebbf5d':'#282418')};
    padding:12px 30px;
    font-size:16px;
    margin: 0 auto;
    margin-bottom: 4em;
    border-radius: 50px;
    white-space: nowrap;
    outline: none;
    border:none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items:center;
    transition: all 0.2s ease-in-out;

    &:hover{
        background: ${({lightTheme})=>(lightTheme? '#ebbf5d':'#f1d28e')};
        color: ${({lightTheme})=>(lightTheme? '#282418':'#282418')};
        transition: all 0.2s ease-in-out;
    }
`