import React from 'react'
import style from "styled-components"

const Personal = () => {
  return (
    <PersonalContainer>
        <div id="container">
            <div id="personal">
                <h2>Personal Details</h2>
                <hr/>
                <p><span style={{fontWeight:"500"}}>Email: </span>paramjeetrawat265@gmail.com</p>
                <p><span style={{fontWeight:"500"}}>Language: </span>English</p>
                <p><span style={{fontWeight:"500"}}>Nationality </span>Indian</p>
            </div>
            <div id="information">
                <h2>I am Full Stack Web Developer</h2>
                <p>I am Paramjeet from Delhi, I have completed B.com  <br/>I have the knowledge of HTML, CSS, JavaScript, React, Redux NodeJs, MongoDB, DataStructure</p>
                <p>I want to enhance my Skills as Full Stack Web Developer </p>
            </div>
        </div>
    </PersonalContainer>
  )
}

const PersonalContainer=style.div`
    width:100%;
    .container{
        width:80%;
        border:2px solid green;
        display:flex;
        justify-content:center;
    }
    .perosnal h2{
        font-size:20px;
        font-family:robot;
    }

`;

export default Personal