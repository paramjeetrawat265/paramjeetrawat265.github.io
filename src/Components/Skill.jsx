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
const Skill = () => {
    const data = [
        {
            id: 1,
            image: html,
            title: "Front_End Skills"
        },
        {
            id: 4,
            image: ds,
            title: "DataStructure& Algorithm"
        },
        {
            id: 2,
            image: mysql,
            title: "Communication Skills"
        },
        {
            id: 3,
            image: redux,
            title: "Back_End Skills"
        },

    ]


    return (
        <div id="skill">
            <SkillsContainer>
                <h1>Skills</h1>
                <div className="mainContainer">
                    {data.length && data.map((item) => (
                        <div className="skillChild" key={item.id}>
                            <div className="skillCard" >
                                <img src={item.image} alt={item.title} />
                                <p>{item.title}</p>
                            </div>
                            {item.id === 1 &&
                                <div className="subSkill">
                                    <div id="frontend">
                                        <p>HTML</p>
                                        <p>CSS</p>
                                        <p>JavaScript</p>
                                        <p>React</p>
                                        <p>Redux</p>
                                        <p>ChakraUI</p>
                                    </div>
                                </div>
                            }
                            {item.id === 4 &&
                                <div className="subSkill">
                                    <div id="dsa">
                                        <p>Array</p>
                                        <p>Sorting</p>
                                        <p>Stack</p>
                                        <p>Queue</p>
                                    </div>
                                </div>
                            }
                            {item.id === 3 &&
                                <div className="subSkill">
                                    <div id="backend">
                                        <p>Mysql</p>
                                        <p>MongoDb</p>
                                        <p>NodeJs</p>
                                    </div>
                                </div>
                            }
                            {item.id === 2 &&
                                <div className="subSkill">
                                    <div id="communication">
                                        <p>Communication</p>
                                        <p>Leadership</p>
                                        <p>Collaborative</p>
                                        <p>Creative</p>
                                    </div>
                                </div>
                            }
                        </div>
                    ))}
                </div>
            </SkillsContainer>
        </div>
    )
}

const SkillsContainer = styled.div`
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
  grid-template-columns:repeat(auto-fit,minmax(220px,max-content));
  gap:20px;
  text-align:center;
  justify-content:center;
}


    .skillChild{
        border-radius:10px;
        border:10px solid #f0f0fb;
        padding:10px;
        display:flex;
        flex-direction:column;
        
    }
  
    .subSkill{
        padding:10px;
        font-size:16px;
    }

    .skillCard{

        background-color:#f0f0fb;
        display:flex;
        gap:5px;
        padding:5px;
        border-radius:0px 0px 5px 5px;
        align-items:center;
        justify-content:center;
        box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
    }

  .skillCard>img{
    height:20px;
    width:20px;
  }

  .skillCard>p{
      color:#00203FFF;
      font-size:14px;
    }
    
    .subSkill p{
        padding:2px;
        border-radius:8px;
        font-weight:500;
      text-align:center;
    margin-bottom:10px;
    box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  }
  
  @media only screen and (min-width:320px) and (max-width:480px){
    h1{
      font-size:30px;
      font-weight:800;
      font-family:Robot;
      margin:30px auto ;
      }

  }
  @media only screen and (min-width: 481px) and (max-width:768px){ 
    .skillChild{
        flex-direction:column;
        padding:10px;
    }
    .skillCard>img
    {
        height:15px;
        width:15px;
    }
    .skillCard>p
    {
        color:#00203FFF;
        font-size:12px;
    }
    .subSkill
    {
        text-align:left;
        padding:10px;
        font-size:12px;
    }

  }
`;

export default Skill