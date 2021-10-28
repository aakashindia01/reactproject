import styled from "styled-components";
import {Link as LinkS} from 'react-scroll';
import {Link as LinkR} from 'react-router-dom';
import { FaTimes } from "react-icons/fa";

export const SidebarContainer = styled.aside`
    Position:fixed;
    z-index:999;
    width:100%;
    background:#0d0d0d;
    display:grid;
    align-items:center;
    left:0;
    transition: all 0.3s ease-in-out;
    opacity:${({ isOpen }) =>(isOpen ? '100%' : '0')};
    top:${({isOpen}) => (isOpen ? '0' : '-100%')};
    
`;

export const CloseIcon = styled(FaTimes)`
    color:#fff;
`
export const Icon = styled.div`
    position:absolute;
    top:1.2rem;
    right:1.5rem;
    background:transparent;
    font-size:2rem;
    cursor: pointer;
    outline:none;
`
export const SidebarWrapper = styled.div`
    color:#fff;
`
export const SidebarMenu = styled.ul`
    margin-top:100px;
    display:grid;
    grid-template-columns:1fr;
    grid-template-rows:repeat(5,80px);
    text-align:center;

    @media screen  and (max-width:480px){
        grid-template-rows:repeat(4,60rem);
    };
`
export const SidebarLink = styled(LinkS)`
    
    display:flex;
    align-item:center;
    justify-content:center;
    font-size:1.5rem;
    text-decoration:none;
    transition:0.2s ease-in-out;
    text-decoration:none;
    color:#fff;
    cursor:pointer;

    &:hover{
        color:#01b671;
        transition:0.2s ease-in-out;
    }
`
export const SideBtnWrap = styled.div`
    margin-bottom:100%;
    display:flex;
    justify-content:center;
`
export const SidebarRoute = styled.div`
    border-radius:50px;
    background:#01bf71;
    white-space:nowrap;
    padding:16px 64px;
    color:#010606;
    font-size:16px;
    border:none;
    outline:none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration:none;

    &:hover{
        transition: all 0.2s ease-in-out;
        background:#fff;
        color:#010606;
    }
`