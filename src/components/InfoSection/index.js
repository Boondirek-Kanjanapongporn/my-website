import React from 'react'
import {ButtonR} from '../ButtonElements'
import {InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, TopLine, Heading, Subtitle, Subtitle1, BtnWrap, ImgWrap, Img} from './InfoElements'

const InfoSection = ({lightTheme, id, imgStart, topLine, headLine, description, description1, description2, newline, buttonLabel, to, target, img, alt}) => {
    
    const renderNewline1= () =>{
        if(newline)
            return <Subtitle lightTheme={lightTheme}>{description1}</Subtitle>;
        return null;
    }

    const renderNewline2= () =>{
        if(newline)
            return <Subtitle lightTheme={lightTheme}>{description2}</Subtitle>;
        return null;
    }

    return (
        <>
            <InfoContainer id={id} lightTheme={lightTheme}>
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                            <TextWrapper>
                                <TopLine>{topLine}</TopLine>
                                <Heading lightTheme={lightTheme}>{headLine}</Heading>
                                {renderNewline1()}
                                {renderNewline2()}
                                <Subtitle1 lightTheme={lightTheme}>{description}</Subtitle1>
                                <BtnWrap>
                                    <ButtonR to={to} target={target} lightTheme={lightTheme}>
                                        {buttonLabel}</ButtonR>
                                </BtnWrap>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={img} alt={alt}/>
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export default InfoSection
