import React, {useContext, useState} from 'react'
import InfoSection from '../components/InfoSection';
import { homeObjOne, homeObjTwo } from '../components/InfoSection/Data';
import HeroSection from '../components/HeroSection';
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar/Index'
import Projects from '../components/Projects';
import Footer from '../components/Footer';
import {FlexDiv } from './PagesElements';
import ContactSection from '../components/ContactSection';
import { LightThemeContext } from '../LightThemeContext';

const Home = () => {
    const {lightTheme, setLightTheme} = useContext(LightThemeContext);
    const togglelight = ()=>{
        return setLightTheme(!lightTheme);
    };

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen)
    };

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} lightTheme={lightTheme}/>
            <Navbar toggle={toggle} lightTheme={lightTheme} togglelight={togglelight}/>
            <FlexDiv>
                <HeroSection lightTheme={lightTheme}/>
                <InfoSection {...homeObjOne} lightTheme={lightTheme}/>
                <InfoSection {...homeObjTwo} lightTheme={!lightTheme}/>
                <Projects lightTheme={lightTheme}/>
                <ContactSection lightTheme={!lightTheme}/>
                <Footer/>
            </FlexDiv>
        </>
    );
}

export default Home
