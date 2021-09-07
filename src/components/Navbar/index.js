import React, {useState, useEffect} from 'react';
import {Nav, NavbarDetail, ThemeIcon, NavbarContainer, Navlogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink} from './NavbarElements'
import {Navbardata} from '../Navbardata'
import {FaBars, FaSun, FaMoon} from 'react-icons/fa';
// import { IconContext } from 'react-icons/lib';
import {animateScroll as scroll} from 'react-scroll';

const Navbar = ({toggle, lightTheme, togglelight}) => {

    const navlinkitems = Navbardata.map((item, index)=>{
        return (
            <NavItem>
                <NavLinks lightTheme={lightTheme} key={index} to={item.to} smooth={true} duration={800} spy={true} exact='true' offset={-80}>{item.data}</NavLinks>
            </NavItem>
        )
    })

    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = () =>{
        if(window.scrollY >= 80){
            setScrollNav(true)
        }
        else{
            setScrollNav(false)
        }
    }
    useEffect(()=>{
        window.addEventListener('scroll', changeNav)
    }, [])

    const toggleHome = ()=>{
        scroll.scrollToTop();
    }

    const themeIconDisplay=()=>{
        if(lightTheme)
            return <ThemeIcon lightTheme={lightTheme} onClick={togglelight}><FaSun/></ThemeIcon>;
            
        else
            return <ThemeIcon lightTheme={lightTheme} onClick={togglelight}><FaMoon/></ThemeIcon>;
    }

    return (
        <>
            {/* <IconContext.Provider value={{color:'#ffffffd9'}}> */}
                <Nav lightTheme={lightTheme} scrollNav={scrollNav}>
                    <NavbarDetail>
                        <NavbarContainer>
                            <Navlogo to="/" onClick={toggleHome} lightTheme={lightTheme}>Boondirek K.</Navlogo>
                            <MobileIcon onClick={toggle} lightTheme={lightTheme}>
                                <FaBars/>
                            </MobileIcon>
                            <NavMenu>
                                {navlinkitems}
                            </NavMenu>
                            <NavBtn>
                                <NavBtnLink lightTheme={lightTheme} to={{pathname: "https://github.com/Boondirek-Kanjanapongporn"}} target="_blank">Github</NavBtnLink>
                            </NavBtn>
                        </NavbarContainer>
                        {themeIconDisplay()}
                    </NavbarDetail>
                </Nav>
            {/* </IconContext.Provider> */}
        </>
    )
}

export default Navbar
