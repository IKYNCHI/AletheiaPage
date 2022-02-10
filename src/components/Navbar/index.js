import React, {useEffect, useState} from 'react';
import {FaBars} from 'react-icons/fa'
import { IconContext } from 'react-icons/lib';
import {animateScroll as scroll} from 'react-scroll';
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink } from './NavbarElements';
const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false)
  
  const changeNav = () => {
      if(window.scrollY >= 10){
          setScrollNav(true)
      } else{
          setScrollNav(false)
      }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNav)
  }, []);

  const toggleHome = () => {
      scroll.scrollToTop();
  };
return (
  <>
  <IconContext.Provider value={{ color: '#fff'}}>
    <Nav scrollNav={scrollNav}>
      <NavbarContainer>
          <NavLogo to="/" onClick={toggleHome}>
              Aletheia
          </NavLogo>
          <MobileIcon onClick={toggle}>
              <FaBars />
          </MobileIcon>
          <NavMenu>
              <NavItem>
                  <NavLinks to="home"
                  smooth={true} duration={500} spy={true} exact='true' offset={-80}
                  >Home</NavLinks>
              </NavItem>
              <NavItem>
                  <NavLinks to="search"
                  smooth={true} duration={500} spy={true} exact='true' offset={-80}
                  >Search</NavLinks>
              </NavItem>
              <NavItem>
                  <NavLinks to="school"
                  smooth={true} duration={500} spy={true} exact='true' offset={-80}
                  >School</NavLinks>
              </NavItem>
              <NavItem>
                  <NavLinks to="github"
                  smooth={true} duration={500} spy={true} exact='true' offset={-80}
                  >Github</NavLinks>
              </NavItem>
          </NavMenu>
          <NavBtn>
              <NavBtnLink to ="benchmark">Benchmark</NavBtnLink>
          </NavBtn>
      </NavbarContainer>
    </Nav>
  </IconContext.Provider>
  </>
  )
};

export default Navbar;
