// import backgroundImage from '../Resources/Images/backgroundHome.jpg' 
import styled from 'styled-components'
import React, { useEffect, useState } from 'react'
import { Link, animateScroll } from 'react-scroll';
import resume from "../Resources/Paramjeet_Resume.pdf"
import { FaDownload } from "react-icons/fa"


const Navbar = () => {

    const [colorChange, setColorchange] = useState(false);
    const [head, setHead] = useState(false);
    const changeNavbarColor = () => {
        if (window.scrollY >= 80 || head) {
            setColorchange(true);

        }
        else {
            setColorchange(false);
        }

    };
    window.addEventListener('scroll', changeNavbarColor);

    useEffect(() => {
        if (head || colorChange) {
            setColorchange(true)
        } else {
            setColorchange(false)
        }
    }, [head, colorChange])
    return (
        <Container >
            <header className="header"
                style={{ backgroundColor: `${colorChange ? '#f0f0fb' : 'transparent'}` }} >
                <a href="/" className="logo">Paramjeet</a>
                <input className="menu-btn" type="checkbox" id="menu-btn" />
                <label className="menu-icon" htmlFor="menu-btn"><span className="navicon"></span></label>
                <ul className="menu">
                    <li><Link to="/" onClick={() => animateScroll.scrollToTop()}>Home</Link></li>
                    <li><Link spy={true} smooth={true} to="about" onClick={() => setHead(true)}>AboutMe</Link></li>
                    <li><Link spy={true} smooth={true} to="skills" onClick={() => setHead(true)}>Skills</Link></li>
                    <li><Link spy={true} smooth={true} to="project" onClick={() => setHead(true)}>Projects</Link></li>
                    <li><Link spy={true} smooth={true} to="contact" onClick={() => setHead(true)}>Contact</Link></li>
                    <li><div className='resumeBox'><a className='resume' target="_blank" href="https://drive.google.com/file/d/1tu8SZeKmcDG05Y4_mDfyd_0O0e2Cwz-j/view?usp=sharing" download>
                        Resume<FaDownload />
                    </a></div></li>
                </ul>
            </header>
        </Container>
    )

}
// #52d081 
const Container = styled.div` 
    *,*::before, *::after {
        border-width: 0;
        border-style: solid;
        box-sizing: unset;
    }
    width:100%; 
    height:70px; 
    background-image: url("https://images.unsplash.com/photo-1527176930608-09cb256ab504?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1474&q=80");
 
    a { 
        color: #000; 
    } 
     
    /* header */ 
     
    .header { 
        position:fixed; 
        width:100%; 
        z-index: 3; 
        padding-top:10px; 
    } 
     
    .header ul { 
        margin: 0; 
        padding: 0; 
        list-style: none; 
        overflow: hidden; 
        padding-right:50px; 
    } 
     
    .header li a { 
        display: block; 
        padding: 20px 25px; 
        text-decoration: none; 
    } 
     
    .header .logo { 
        display: flex; 
        font-family:robot;
        font-weight:700;
        float: left; 
        font-size: 2em; 
        padding: 5px 30px; 
        text-decoration: none; 
        color:#343a40; 
    } 

    .header li .resume{ 
        text-transform: capitalize;
        width:80px; 
        padding:10px 20px; 
        border-radius:10px; 
        background-color:#00203FFF;
        color:white; 
        display:flex; 
        align-items:center; 
        justify-content:center; 
        gap:5px; 
        margin-top:8px; 
    }
     
    /* menu */ 
     
    .header .menu { 
        clear: both; 
        max-height: 0; 
        transition: max-height .2s ease-out; 
        text-transform:uppercase; 
        font-size:15px; 
        font-weight:700; 
        color:#343a40; 
    } 
 
    li a{ 
        color:#00203FFF;
    } 
 
    li a:hover{ 
        color:black; 
    } 
    
     
     
    /* menu icon */ 
     
    .header .menu-icon { 
        cursor: pointer; 
        display: inline-block; 
        float: right; 
        padding: 28px 20px; 
        position: relative; 
        user-select: none; 
    } 
     
    .header .menu-icon .navicon { 
        background: #333; 
        display: block; 
        height: 2px; 
        position: relative; 
        transition: background .2s ease-out; 
        width: 18px; 
    } 
     
    .header .menu-icon .navicon:before, 
    .header .menu-icon .navicon:after { 
        background: #333; 
        content: ''; 
        display: block; 
        height: 100%; 
        position: absolute; 
        transition: all .2s ease-out; 
        width: 100%; 
    } 
     
    .header .menu-icon .navicon:before { 
        top: 5px; 
    } 
     
    .header .menu-icon .navicon:after { 
        top: -5px; 
    } 
     
    /* menu btn */ 
     
    .header .menu-btn { 
        display: none; 
    } 
     
  
    .header .menu-btn:checked ~ .menu { 
        width:100%; 
        max-height: 480px; 
        background-color:white; 
    } 
     
    .header .menu-btn:checked ~ .menu-icon .navicon { 
        background: transparent; 
    } 
     
    .header .menu-btn:checked ~ .menu-icon .navicon:before { 
        transform: rotate(-45deg); 
    } 
     
    .header .menu-btn:checked ~ .menu-icon .navicon:after { 
        transform: rotate(45deg); 
    } 
     
    .header .menu-btn:checked ~ .menu-icon:not(.steps) .navicon:before, 
    .header .menu-btn:checked ~ .menu-icon:not(.steps) .navicon:after { 
        top: 0; 
    } 
     
    /* 48em = 768px */ 
     
    @media (min-width: 55em) {
        .header li { 
            float: left; 
        } 
        
        .header li a { 
            padding: 20px 30px; 
        } 
 
        .header .menu { 
            clear: none; 
            float: right; 
            max-height: none; 
        } 
 
        .header .menu-icon { 
            display: none; 
        } 
         
    } 
    @media only screen and (min-width: 769px) and (max-width:960px){ 
        .header .menu { 
            font-size:small; 
        } 
 
        .resumeBox{ 
            display:flex; 
            align-items:center; 
            justify-content:center; 
            margin-bottom:20px; 
        } 
    } 
     
    @media only screen and (min-width: 481px) and (max-width:768px){ 
        .resumeBox{ 
            display:flex; 
            align-items:center; 
            justify-content:center; 
            margin-bottom:20px; 
        } 
    } 
 
    @media only screen and (min-width:320px) and (max-width:480px){ 
        .resumeBox{ 
            display:flex; 
            align-items:center; 
            justify-content:center; 
            margin-bottom:20px; 
        } 
    } 
 
    @media only screen and (max-width: 320px){ 
        .resumeBox{ 
            display:flex; 
            align-items:center; 
            justify-content:center; 
            margin-bottom:20px; 
        } 
 
    } 
 
    @media only screen and (max-width: 319px){ 
        .resumeBox{ 
            display:flex; 
            align-items:center; 
            justify-content:center; 
            margin-bottom:20px; 
        } 
 
    }
`

export default Navbar

