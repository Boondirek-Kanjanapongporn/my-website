import React from 'react'
import {ButtonR} from '../ButtonElements'
import {WorkContainer, WorkWrapper, Column1, TextWrapper, TopLine, Heading, WorkBox, Subtitle, Subtitle1, BtnWrap, ImgWrap, Img} from './WorkElements'

const WorkSection = (props) => {

    return (
        <>
            <WorkContainer id={props.id} lightTheme={props.lightTheme}>
                <WorkWrapper>
                        <Column1>
                            <TextWrapper>
                                <TopLine>{props.topLine}</TopLine>
                                <Heading lightTheme={props.lightTheme}>{props.headLine}</Heading>

                                <div style={{display: "flex", flexDirection: "column"}}>
                                    <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                                        <WorkBox lightTheme={props.lightTheme}>
                                            <Subtitle lightTheme={props.lightTheme} style={{ fontWeight: 'bold', marginBottom: '0px' }}>{props.company4}</Subtitle>
                                            <Subtitle1 lightTheme={props.lightTheme} style={{ fontSize: '14px', marginBottom: '5px' }}><b>{props.position4} - {props.date4}</b></Subtitle1>
                                            <Subtitle1 lightTheme={props.lightTheme}>
                                                • Implemented Back End service to identify and address data inconsistencies between data servers throughout the stock market trading day<br></br>
                                                • Adapted the Spring Boot MVC model to develop Controllers, Services, and Repositories to facilitate interactions with React.js Front End website and Oracle SQL database<br></br>
                                                • Utilized normalization techniques to design a schema for storing customer account information, trading details, and timestamps associated with the data inconsistencies<br></br>
                                                • Developed a Front End dashboard website featuring pagination, date filtering, and regional filtering to display data-inconsistent details, so to reduce SRE team workload and provide assistance for future analysis
                                            </Subtitle1>
                                            <Subtitle1 lightTheme={props.lightTheme}><b>Skills:</b> {props.skills4}</Subtitle1>
                                        </WorkBox>

                                        <WorkBox lightTheme={props.lightTheme}>
                                            <Subtitle lightTheme={props.lightTheme} style={{ fontWeight: 'bold', marginBottom: '0px' }}>{props.company3}</Subtitle>
                                            <Subtitle1 lightTheme={props.lightTheme} style={{ fontSize: '14px', marginBottom: '5px' }}><b>{props.position3} - {props.date3}</b></Subtitle1>
                                            <Subtitle1 lightTheme={props.lightTheme}>
                                                • Implemented CI/CD pipeline to automate deployment of changes made in Gitlab to the remote server<br></br>
                                                • Developed a Back End service to calculate the total work hours for all professors at the university<br></br>
                                                • Achieved cost savings of up to $400/year by devising custom tag events in Google Tag Manager, enabling individual user activity tracking without relying on external service providers<br></br>
                                                • Implemented authentication system and utilized dataLayer to transmit monitoring data to Google Tag Manager
                                            </Subtitle1>
                                            <Subtitle1 lightTheme={props.lightTheme}><b>Skills:</b> {props.skills3}</Subtitle1>
                                        </WorkBox>
                                        
                                    </div>
                                    <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                                        <WorkBox lightTheme={props.lightTheme}>
                                            <Subtitle lightTheme={props.lightTheme} style={{ fontWeight: 'bold', marginBottom: '0px' }}>{props.company2}</Subtitle>
                                            <Subtitle1 lightTheme={props.lightTheme} style={{ fontSize: '14px', marginBottom: '5px' }}><b>{props.position2} - {props.date2}</b></Subtitle1>
                                            <Subtitle1 lightTheme={props.lightTheme}>
                                                • Developed nine algorithms utilized to assess the eligibility of customers applying for bank loans, such as identifying money circulation schemes and abnormal lump-sum money transfers<br></br>
                                                • Optimized test scripts’ run-time efficiency by 84% through the integration of Python with Robot, replacing pure Robot scripting<br></br>
                                            </Subtitle1>
                                            <Subtitle1 lightTheme={props.lightTheme}><b>Skills:</b> {props.skills2}</Subtitle1>
                                        </WorkBox>

                                        <WorkBox lightTheme={props.lightTheme}>
                                            <Subtitle lightTheme={props.lightTheme} style={{ fontWeight: 'bold', marginBottom: '0px' }}>{props.company1}</Subtitle>
                                            <Subtitle1 lightTheme={props.lightTheme} style={{ fontSize: '14px', marginBottom: '5px' }}><b>{props.position1} - {props.date1}</b></Subtitle1>
                                            <Subtitle1 lightTheme={props.lightTheme}>
                                                • Developed new REST APIs, utilizing Express.js, to retrieve data from the PostgreSQL database<br></br>
                                                • Integrated table pagination functionality, enabling users to seamlessly navigate large lists of information<br></br>
                                                • Implemented a search filtering feature that dynamically updates URL Queries via filtered data<br></br>
                                                • Wrote test cases to validate REST APIs and conduct Unit and System testing through Cypress.js
                                            </Subtitle1>
                                            <Subtitle1 lightTheme={props.lightTheme}><b>Skills:</b> {props.skills1}</Subtitle1>
                                        </WorkBox>
                                    </div>
                                </div>

                                <BtnWrap>
                                    <ButtonR to={props.to} target={props.target} lightTheme={props.lightTheme}>
                                        {props.buttonLabel}</ButtonR>
                                </BtnWrap>
                            </TextWrapper>
                        </Column1>
                </WorkWrapper>
            </WorkContainer>
        </>
    )
}

export default WorkSection
