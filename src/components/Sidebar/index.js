import React from 'react'
import {SidebarContainer, Icon, CloseIcon, SidebarWrapper,SideBtnWrap, SidebarMenu, SidebarLink,SidebarRoute} from './SidebarElement'

const Sidebar = ({isOpen,toggle}) => {
    return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
            <CloseIcon />
        </Icon>
        <SidebarWrapper>
            <SidebarMenu>
                <SidebarLink to="about" >About</SidebarLink>
                <SidebarLink to="Discover" >Discover</SidebarLink>
                <SidebarLink to="Services" >Services</SidebarLink>
                <SidebarLink to="Signup" >Sign Up</SidebarLink>
            </SidebarMenu>
            <SideBtnWrap>
            <SidebarRoute to='/signin'>Sign In</SidebarRoute>
            </SideBtnWrap>
            
        </SidebarWrapper>
    </SidebarContainer>
    );
}

export default Sidebar
