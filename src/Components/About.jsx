import React from 'react'
import styled from 'styled-components'
import param from "../Resources/paramjeet_image.png"
import signature from "../Resources/signature.png"
import resume from "../Resources/Paramjeet_Resume.pdf"
const About = () => {
    return (
        <div id="about">
            <ContactWrapper>
                <div className="aboutMe">
                    <div className="textWrapper">
                        <h2>About Me</h2>
                        <p>
                            Hello, My name is Paramjeet and I enjoy to create Website that live on Internet,<br />
                            My interest in web development started in 2015 when I started the Gniit
                        </p>
                        <button className='resume'>
                            <a href="https://drive.google.com/uc?export=download&id=1tu8SZeKmcDG05Y4_mDfyd_0O0e2Cwz-j" download>Download Resume</a>
                        </button>
                    </div>
                    <div className='imgBox'>
                        <img src={param} alt="Paramjeet" />
                    </div>
                    <div className='bars'>
                        <div className="singleBar"></div>
                        <div className="singleBar" style={{ marginTop: "-50px" }}></div>
                        <div className="singleBar"></div>
                    </div>
                </div>
            </ContactWrapper >
            <AboutMeWrapper>
                <div className='aboutSection'>
                    <div className='left'>
                        <h3>Personal Details</h3>
                        <p></p>
                        <p>Email: <span>paramjeetrawat265@gmail.com</span></p>
                        <p>Language: <span>English</span></p>
                        <p>Nationality: <span>Indian</span></p>
                    </div>
                    <div className='right'>
                        <h2>I am <span>Full Stack Web Developer</span></h2>
                        <p>I am Paramjeet from Delhi, I have completed B.com. I have the knowledge of HTML, CSS, JavaScript, React, Redux NodeJs, MongoDB, DataStructure. I want to enhance my Skills as Full Stack Web Developer</p>
                        <div>
                            <img src={signature} alt='Mohit_Signature' width='200px' />
                        </div>
                    </div>
                </div>
            </AboutMeWrapper>
        </div>
    )
}
const ContactWrapper = styled.div`
width:100%;
height:85vh;
background-image: url("https://images.unsplash.com/photo-1527176930608-09cb256ab504?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1474&q=80");

h2{
    font-family:sans-serif;
    font-weight:700;
    font-size:30px;
    letter-spacing:5px;
}

.aboutMe{
    width:80%;
    margin:auto;
    padding-top:5%;
    display:flex;
    gap:50px;
    justify-content:space-evenly;
}

.textWrapper{
    width:50%;
    text-align:justify;
    font-size:20px;
    font-weight:500;
    color:gray;
}

.resume{
    background-color:#00203FFF;
    color:white;
    border-radius:10px;
    margin-top:20px;
    width:200px;
    padding:10px;
}
.imgBox{
    background-color:rgb(198,199,201);
    margin-top:5%;
    margin-left:50px;
    margin-right:-50px;
    border:4px solid gray;
    border-radius:50% 0% 50% 0%;
    overflow:hidden;
    width:280px;
    height:20%; 
}   
.imgBox>img{
    width:350px;
}
.bars{
    margin-top:9%;
    width:20%;
    display:flex;
    justify-content:space-evenly;
}
.singleBar{
    border-right: 5px solid gray;
    height:230px;
}

@media only screen and (min-width: 769px) and (max-width:1110px){ 
    height:90vh;
    .bars{
        margin-top:9%;
        width:15%;
        display:flex;
        justify-content:space-evenly;
    }
    .singleBar{
        border-right: 5px solid gray;
        height:150px;
    }
    .resume{
        font-size:18px;
        width:180px;
        padding:10px;
    }
}
@media only screen and (min-width: 481px) and (max-width:768px){ 
    height:82vh;
    .aboutMe{
        width:80%;
        margin:auto;
        padding-top:5%;
        align-items:center;
        display:flex;
        flex-direction:column-reverse;
        gap:10px;
        justify-content:center;
    }    
    .textWrapper{
        width:80%;
        text-align:center;
        font-size:15px;
        font-weight:500;
        color:gray;
    }
    .resume{
        border-radius:5px;
        font-size:15px;
        width:150px;
        margin:auto;
        margin:30px auto auto auto;
        padding:8px;
    }
    .imgBox{
        margin:auto;
        border:2px solid gray;
        border-radius:50%;
        overflow:hidden;
        width:200px;
    }
    .imgBox>img{
        width:200px;
    }
    .bars{
        display:none;
    }
    .singleBar{
        border-right: 5px solid gray;
        height:150px;
    }
}



    @media only screen and (min-width:320px) and (max-width:480px){
        height:60vh;
        h2{
            font-size:25px;
            text-align:center;
        }
        .aboutMe{
            padding:30px 0px;
            width:85%;
            margin:auto;
            display:flex;
            flex-direction:column-reverse;
            display:flex;
            gap:5px;
        }

        .textWrapper{
            width:80%;
            margin:auto;
            text-align:justify;
            font-size:14px;
            font-weight:500;
            color:gray;
        }
        
        .resume{
            border-radius:5px;
            font-size:14px;
            width:140px;
            margin:20px auto auto 65px;
            padding:5px;
        }

        .imgBox{
            width:100px;
            margin:auto;
            border-radius:50%;
            overflow:hidden;
            height:20%;
        }

        .bars{
            display:none;
        } 
    }


`;

const AboutMeWrapper = styled.div`
width:100%; 
    margin-top:-50px; 
    margin-bottom:40px; 
    .aboutSection{ 
        width:80%; 
        margin:auto; 
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px; 
        background-color:white; 
        display:flex; 
        justify-content:center; 
        padding:20px; 
        border-radius:10px; 
        gap:10px; 
    } 
    .left{ 
        display:flex;
        flex-direction:column;
        gap:10px;
        width:30%; 
        text-align:left; 
        background-color:#f8f9fa; 
        padding:5px 15px 5px 15px;; 
        border-radius:10px; 
    } 
 
    .left>p{ 
        font-size:small; 
        font-weight:bold; 
    } 
 
    .left>p>span{ 
        color:#707070 ; 
    } 
 
    .left>h3+p{ 
        border-top:1.5px dashed #d4dae1 
    } 
 
    .right{ 
        display:flex;
        flex-direction:column;
        gap:10px;
        width:70%; 
        display:flex; 
        flex-direction:column; 
        align-items:flex-start; 
        padding:0px 10px 0px 10px; 
    } 
 
    .right>h2{ 
        width:100%; 
        margin-bottom:0px; 
        font-size:20px; 
        text-align:left; 
    } 
    .right>h2>span{ 
        font-family:robot;
        font-weight:700;
        color:#00203FFF
         
    } 
 
    .right>p{ 
        line-height:1.2rem;
        text-align:left; 
        margin-top:5px; 
    } 
 
    .right>div{ 
        display:flex; 
        align-items:flex-start; 
        overflow:hidden; 
        margin-top:0px; 
    } 
 
    .right>div>img{ 
        margin-left:-35px; 
    } 
 
    @media only screen and (min-width: 769px) and (max-width:1110px){ 
        .left{ 
            width:35%; 
        } 
 
    } 
 
    @media only screen and (min-width: 481px) and (max-width:768px){ 
        margin-top:20px; 
        .aboutSection{ 
            flex-direction:column; 
            align-items:center; 
        } 
 
        .left{ 
            width:90%; 
        } 
        .right{ 
            width:90%; 
        } 
        .right>p{ 
            font-size:14px; 
        } 
 
    } 
 
    @media only screen and (min-width:320px) and (max-width:480px){ 
  
        margin-top:20px; 
        .aboutSection{ 
            flex-direction:column; 
            align-items:center; 
        } 
 
        .left{ 
            width:90%; 
        } 
        .right{ 
            width:90%; 
        } 
 
        .right>h2{ 
            font-size:17px; 
        } 
 
        .right>p{ 
            font-size:15px; 
        } 
    } 
 
    @media only screen and (max-width: 320px){ 
        margin-top:20px; 
        .aboutSection{ 
            flex-direction:column; 
            align-items:center; 
        } 
 
        .left{ 
            width:90%; 
        } 
        .right{ 
            width:90%; 
        } 
        .right>h2{ 
            font-size:16px; 
        } 
 
        .right>p{ 
            font-size:13px; 
        } 
 
    }
`;



export default About