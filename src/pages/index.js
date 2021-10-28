import React, {useState} from 'react'
import  Navbar from '../components/Navbar';
import  Sidebar from '../components/Sidebar';
import  HeroSection from '../components/HeroSection';
import {BrowserRouter as Router} from 'react-router-dom'
export const Home = () => {

    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    };
    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            <HeroSection/>
        </>
    )
}
export default Home     
