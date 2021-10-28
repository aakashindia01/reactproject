import react from 'react'
import {FaBars} from 'react-icons/fa'
import {Nav, NavbarContainer,NavLogo, MobileIcon, NavMenu, NavItem,NavBtn, NavLinks, NavBtnLink } from './NavbarElements'
    export const Navbar = ({toggle}) => {
    return ( 
        <>
        <Nav>
        <NavbarContainer>
            <NavLogo to='/'>Aakash</NavLogo>
            <MobileIcon  onClick={toggle}>
                <FaBars/>
            </MobileIcon>
            <NavMenu>
                <NavItem>
                    <NavLinks to="about">About</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks to="Discover">Discover</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks to="Services">Services</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks to="Sign Up">Sign Up</NavLinks>
                </NavItem>
            </NavMenu>
            <NavBtn>
                <NavBtnLink to="/signin">Sign In</NavBtnLink>
            </NavBtn>
        </NavbarContainer>
        </Nav>
        </>
    );
}
export default Navbar;