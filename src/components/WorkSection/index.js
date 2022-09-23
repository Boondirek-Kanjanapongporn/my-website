import React from 'react'
import {ButtonR} from '../ButtonElements'
import {WorkContainer, WorkWrapper, Column1, TextWrapper, TopLine, Heading, WorkBox, Subtitle, Subtitle1, BtnWrap, ImgWrap, Img} from './WorkElements'

const WorkSection = ({lightTheme, id, imgStart, topLine, headLine, company1, position1, skills1, date1, company2, position2, skills2, date2, buttonLabel, to, target, img, alt}) => {

    return (
        <>
            <WorkContainer id={id} lightTheme={lightTheme}>
                <WorkWrapper>
                        <Column1>
                            <TextWrapper>
                                <TopLine>{topLine}</TopLine>
                                <Heading lightTheme={lightTheme}>{headLine}</Heading>

                                <WorkBox lightTheme={lightTheme}>
                                    <Subtitle lightTheme={lightTheme} style={{ fontWeight: 'bold', marginBottom: '0px' }}>{position1}</Subtitle>
                                    <Subtitle1 lightTheme={lightTheme} style={{ marginBottom: '5px' }}>{company1} - <b>({date1})</b></Subtitle1>
                                    <Subtitle1 lightTheme={lightTheme} style={{ fontSize: '14px' }}>
                                        - Implemented Non-Trade algorithm to catch irregular money transfers that might not arise from the actual company's income<br></br>
                                        - Created Kiting algorithm to catch unauthorized credit such as issuing or altering a check or bank draft<br></br>
                                        - Wrote test automation scripts to check program's performance in different test cases using Robot framework<br></br>
                                        - Improved program run-time performance by 40% by following Object-Oriented Programming
                                    </Subtitle1>
                                    <Subtitle1 lightTheme={lightTheme}><b>Skills:</b> {skills1}</Subtitle1>
                                </WorkBox>

                                <WorkBox lightTheme={lightTheme}>
                                    <Subtitle lightTheme={lightTheme} style={{ fontWeight: 'bold', marginBottom: '0px' }}>{position2}</Subtitle>
                                    <Subtitle1 lightTheme={lightTheme} style={{ marginBottom: '5px' }}>{company2} - <b>({date2})</b></Subtitle1>
                                    <Subtitle1 lightTheme={lightTheme} style={{ fontSize: '14px' }}>
                                        - Created new REST APIs to query data in Postgres Database<br></br>
                                        - Implemented pagination for users to search through big lists of information<br></br>
                                        - Wrote search filtering and push filtered data to URL Queries as parameters<br></br>
                                        - Wrote test cases to validate REST APIs and Unit testing using Cypress.js
                                    </Subtitle1>
                                    <Subtitle1 lightTheme={lightTheme}><b>Skills:</b> {skills2}</Subtitle1>
                                </WorkBox>

                                <BtnWrap>
                                    <ButtonR to={to} target={target} lightTheme={lightTheme}>
                                        {buttonLabel}</ButtonR>
                                </BtnWrap>
                            </TextWrapper>
                        </Column1>
                </WorkWrapper>
            </WorkContainer>
        </>
    )
}

export default WorkSection
