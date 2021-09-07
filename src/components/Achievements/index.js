import React from 'react'
import { Container, BlogBg, ImageBg, BlogWrapper, IconWrapper, Icon, Blank, Blank1, BlogContent, Blog, BlogH1, BlogCard, TitleWrapper, ImgWrapper, BlogImg, LabelWrapper, BlogTitle, BlogLabel, BlogDescription, BlogDate, ButtonWrapper, ArrowIcon } from './AchievementsElements'
import ImageBack from '../../images/image-city.jpg'
import ImageBack1 from '../../images/image-city1.jpg'
import {ButtonR} from '../ButtonElements'
import { AchievementsData } from './Data'
import {FaArrowDown, FaArrowUp} from 'react-icons/fa';

const Achievements = ({lightTheme, togglelight}) => {

    const getBackgroundImage = () =>{
        if(lightTheme)
            return <ImageBg lightTheme={lightTheme} src={ImageBack1}/>
        else
            return <ImageBg lightTheme={lightTheme} src={ImageBack}/>;
    }

    const achievementsitems = AchievementsData.map((item, index)=>{
        return (
                <BlogCard id={item.id} key={index} lightTheme={lightTheme}>
                    <TitleWrapper>
                        <BlogTitle lightTheme={lightTheme}>{item.title}</BlogTitle>
                        <Blank>
                            <ArrowIcon lightTheme={lightTheme} to={item.toUp} smooth={true} duration={800} spy={true} exact='true'offset={-15}><FaArrowUp/></ArrowIcon>
                            <ArrowIcon lightTheme={lightTheme} to={item.toDown} smooth={true} duration={800} spy={true} exact='true'offset={-15}><FaArrowDown/></ArrowIcon>
                        </Blank>
                    </TitleWrapper>
                    <ImgWrapper>
                        <BlogImg src={item.src}/>
                    </ImgWrapper>
                    <LabelWrapper>
                        <BlogLabel lightTheme={lightTheme}>{item.language}</BlogLabel>
                    </LabelWrapper>
                    <LabelWrapper>
                        <BlogLabel lightTheme={lightTheme}>{item.framework}</BlogLabel>
                    </LabelWrapper>
                    <LabelWrapper>
                        <BlogDescription lightTheme={lightTheme}>{item.description}</BlogDescription>
                    </LabelWrapper>
                    <LabelWrapper>
                        <BlogDate lightTheme={lightTheme}>{item.date}</BlogDate>
                    </LabelWrapper>
                    <ButtonWrapper>
                        <ButtonR lightTheme={lightTheme} to={{pathname:item.toGit}} target={item.target}>{item.buttonlabelGit}</ButtonR>
                        <ButtonR lightTheme={lightTheme} to={{pathname:item.toImg}} target={item.target}>{item.buttonlabel}</ButtonR>
                        <Blank1/>
                    </ButtonWrapper>
                </BlogCard>
        )
    })

    return (
        <>
            <Container>
                <BlogBg>
                    {getBackgroundImage()}
                </BlogBg>
                <BlogWrapper>
                    <IconWrapper>
                        <Icon to="/" lightTheme={lightTheme}>Go Back</Icon>
                        <Blank/>
                    </IconWrapper>
                    <BlogContent>
                        <Blog lightTheme={lightTheme}>
                            <BlogH1>My Achievements</BlogH1>
                            {achievementsitems}
                        </Blog>
                    </BlogContent>
                </BlogWrapper>
            </Container>
        </>
    )
}

export default Achievements