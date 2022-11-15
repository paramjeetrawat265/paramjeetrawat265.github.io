import React from 'react'
import GithubCalendar from "react-github-calendar"
import styled from "styled-components"

const GitCalender = () => {   
  return (
    <GithubContainer>
        <h2>Github Calendar</h2>
        <div className="mainContainer">
            <div className="paramGit">
                <GithubCalendar username="paramjeetrawat265"/>
            </div>
            <div className="contribution">
                <p><img align="center" src="https://github-readme-streak-stats.herokuapp.com/?user=paramjeetrawat265&" alt="paramjeetrawat265" /></p>
            </div>
        </div>
    </GithubContainer>
  )
}

const GithubContainer=styled.div`
width:100%;
margin:auto;
padding:10px;

    h2{
        color:#00203FFF; 
  text-align:center;  
  font-size:35px;
  font-weight:800;
  font-family:Robot;
  letter-spacing:2px;
  margin:10px auto ;
    }

    .mainContainer{
        padding:40px;
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
    }

    .paramGit{
        border-radius:10px;
        box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
        padding:20px;
        height:200px;
        width:100%;
    }

    @media (max-width:481px){ 
        display:none;
    }
    
`;

export default GitCalender