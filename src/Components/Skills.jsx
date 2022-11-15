import React from 'react'
import styled from "styled-components"
import html from "../Logo/html.png";
import css from "../Logo/css.png";
import js from "../Logo/js.png";
import ds from "../Logo/ds.png";
import algo from "../Logo/algo.png";
import node from "../Logo/node.png";
import react from "../Logo/react.png";
import redux from "../Logo/redux.png";
import mysql from "../Logo/mysql.png";
const Skills = () => {
  const data=[
    {
      id:1,
      image:html,
      title:"HTML"
    },
    {
      id:2,
      image:css,
      title:"CSS"
    },
    {
      id:3,
      image:js,
      title:"JAVASCRIPT"
    },
    {
      id:4,
      image:ds,
      title:"DS"
    },
    {
      id:5,
      image:algo,
      title:"ALGORITHM"
    },
    {
      id:6,
      image:node,
      title:"Node"
    },
    {
      id:7,
      image:react,
      title:"REACT"
    },
    {
      id:8,
      image:redux,
      title:"REDUX"
    },
    {
      id:9,
      image:mysql,
      title:"MYSQL"
    }
  ]
  return (
    <div id="skills">
      <SkillsContainer>
      <h1>Tech Skills</h1>
      <div className="mainContainer">
        {data.length&&data.map((item)=>(
          <div className={"skillCard"} key={item.id}>
            <img src={item.image} alt={item.title}/>
            <p>{item.title}</p>
          </div>
        ))}
      </div>
      </SkillsContainer>
    </div>
  )
}

const SkillsContainer=styled.div`
margin:20px auto ;
width:100%;
h1{
  color:#00203FFF; 
  text-align:center;  
  font-size:35px;
  font-weight:800;
  font-family:Robot;
  letter-spacing:2px;
  margin-bottom:50px;
  }
  
.mainContainer{
  width:80%;
  margin:auto;
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(120px,max-content));
  gap:20px;
  text-align:center;
  justify-content:center;
}

  
  .skillCard{
    display:flex;
    padding:25px 0px 15px 0px;
    flex-direction:column;
    border-radius:10px;
    align-items:center;
    justify-content:center;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
  }

  .skillCard>img{
    height:70px;
    width:70px;
  }

  
  @media only screen and (min-width:320px) and (max-width:480px){
    h1{
      font-size:30px;
      font-weight:800;
      font-family:Robot;
      margin:30px auto ;
      }

  }
`;

export default Skills