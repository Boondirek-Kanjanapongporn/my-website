import React,{useState} from 'react'
import Video from '../../videos/video-city.mp4'
import {ButtonS} from '../ButtonElements'
import { HeroContainer, HeroBg, VideoBg, ImageBg, ImageBg1, HeroDetail, ImageWrapper, Image, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from './HeroElements'
import myimg from '../../images/aboutmecrop.jpg'
import ImageBack from '../../images/image-city.jpg'
import ImageBack1 from '../../images/image-city1.jpg'
import Typewriter from 'typewriter-effect'

const HeroSection = ({lightTheme}) => {
    const [hover, setHover] = useState(false);
    const onHover = () => {
        setHover(!hover);
    }

    // const getBackgroundImage = () =>{
    //     if(lightTheme)
    //         return <ImageBg lightTheme={lightTheme} src={ImageBack1}/>
    //     else
    //         return <ImageBg lightTheme={lightTheme} src={ImageBack}/>;
    // }

    // const getBackgroundImage = () =>{
    //     if(lightTheme)
    //         return <ImageBg lightTheme={lightTheme} src={ImageBack1}/>
    // }

    // const getDarkBackgroundImage = () =>{
    //     if(!lightTheme)
    //         return <ImageBg lightTheme={lightTheme} src={ImageBack}/>
    // }
    
    return (
        <HeroContainer id='home'>
            <HeroBg>
                {/* <VideoBg autoPlay loop muted src={Video} type='video/mp4'/> */}
                {/* {getBackgroundImage()}
                {getDarkBackgroundImage()} */}
                <ImageBg lightTheme={lightTheme} src={ImageBack}/>
                <ImageBg1 lightTheme={lightTheme} src={ImageBack1}/>
            </HeroBg>
            <HeroDetail>
                <ImageWrapper>
                    <Image src={myimg} lightTheme={lightTheme}/>
                </ImageWrapper>
                <HeroContent lightTheme={lightTheme}>
                    <HeroH1 lightTheme={lightTheme} id="type">
                        <Typewriter onInit={(typewriter)=>{
                                typewriter.typeString("Boondirek Kanjanapongporn")
                                .pauseFor(7000)
                                .deleteAll()
                                .typeString("I am a Developer")
                                .pauseFor(3000)
                                .deleteAll()
                                .start();
                            }}
                            options={{
                                loop: true,
                              }}/>
                    </HeroH1>
                    <HeroP lightTheme={lightTheme}>
                        Welcome to my personal website
                    </HeroP>
                    <HeroBtnWrapper>
                        <ButtonS to="projects" lightTheme={lightTheme} onMouseEnter={onHover} onMouseLeave={onHover}
                        smooth={true} duration={800} spy={true} exact='true'offset={-80}>
                            My Projects {hover? <ArrowForward/>:<ArrowRight/>}
                        </ButtonS>
                    </HeroBtnWrapper>
                </HeroContent>
            </HeroDetail>
        </HeroContainer>
    )
}

export default HeroSection
