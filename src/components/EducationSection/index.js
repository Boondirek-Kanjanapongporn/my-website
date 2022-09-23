import React from 'react'
import {ButtonR} from '../ButtonElements'
import {EducationContainer, EducationWrapper, EducationRow, Column1, Column2, TextWrapper, TopLine, Heading, EducationBox, Subtitle, Subtitle1, BtnWrap, ImgWrap, Img} from './EducationElements'

const EducationSection = ({lightTheme, id, imgStart, topLine, headLine, university1, course1, location1, date1, university2, course2, location2,  date2, buttonLabel, to, target, img, alt}) => {

    return (
        <>
            <EducationContainer id={id} lightTheme={lightTheme}>
                <EducationWrapper>
                    <EducationRow imgStart={imgStart}>
                        <Column1>
                            <TextWrapper>
                                <TopLine>{topLine}</TopLine>
                                <Heading lightTheme={lightTheme}>{headLine}</Heading>

                                <EducationBox lightTheme={lightTheme}>
                                    <Subtitle lightTheme={lightTheme} style={{ fontWeight: 'bold', fontSize: '20px', marginBottom: '0px' }}>{university1}</Subtitle>
                                    <Subtitle1 lightTheme={lightTheme}>{location1}</Subtitle1>
                                    <Subtitle lightTheme={lightTheme}>{course1}</Subtitle>
                                    <Subtitle1 lightTheme={lightTheme}>{date1}</Subtitle1>
                                </EducationBox>

                                <EducationBox lightTheme={lightTheme}>
                                    <Subtitle lightTheme={lightTheme} style={{ fontWeight: 'bold', fontSize: '20px', marginBottom: '0px' }}>{university2}</Subtitle>
                                    <Subtitle1 lightTheme={lightTheme}>{location2}</Subtitle1>
                                    <Subtitle lightTheme={lightTheme}>{course2}</Subtitle>
                                    <Subtitle1 lightTheme={lightTheme}>{date2}</Subtitle1>
                                </EducationBox>

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
                    </EducationRow>
                </EducationWrapper>
            </EducationContainer>
        </>
    )
}

export default EducationSection
