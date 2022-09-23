import React, {useContext, useState} from 'react'
import Sidebar from '../components/Sidebar/Index';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import { About, Skills } from '../components/InfoSection/Data';
import EducationSection from '../components/EducationSection';
import {Education} from '../components/EducationSection/Data';
import WorkSection from '../components/WorkSection';
import {Work} from '../components/WorkSection/Data';
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
                <InfoSection {...About} lightTheme={lightTheme}/>
                <EducationSection {...Education} lightTheme={!lightTheme}/>
                <WorkSection {...Work} lightTheme={lightTheme}/>
                <InfoSection {...Skills} lightTheme={!lightTheme}/>
                <Projects lightTheme={lightTheme}/>
                <ContactSection lightTheme={!lightTheme}/>
                <Footer/>
            </FlexDiv>
        </>
    );
}

export default Home
