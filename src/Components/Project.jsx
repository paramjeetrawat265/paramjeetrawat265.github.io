import React from 'react';
import dotandkey from "../Resources/project/dotandkey.jpeg";
import bluefly from "../Resources/project/bluefly.jpeg";
import naukri from "../Resources/project/naukri.jpeg"
import github from "../Logo/github.jpg"
import live from "../Logo/live.jpg"
import { Link } from 'react-router-dom';
import style from "styled-components"
import { AiOutlineGithub } from 'react-icons/ai';
import GitCalender from './GitCalender';
const Project = () => {
  let data = [
    {
      id: 1,
      title: "Dot&Key-Clone",
      about: "One Stop Destination for all your skincare, haircare and bodycare needs. Dot and Keys award-winning products blended with the best of science and nature are 100% safe, cruelty-free and dermatologically tested. Pick out your favourites now!",
      image: dotandkey,
      github: "https://github.com/Shub118/cute-price-9116",
      live: "https://paramdotandkey.netlify.app/",
      tech: ["Html", "CSS", "JS"]
    },
    {
      id: 2,
      title: "BlueFly-Clone",
      about: "Bluefly is the online shopping destination for the style obsessed, shop designer styles from Prada, Gucci, Dior, Valentino up to 70% off",
      image: bluefly,
      github: "https://github.com/paramjeetrawat265/kindhearted-relation-7296",
      live: "http://parambluefly.netlify.com/",
      tech: ["Html", "CSS", "JS", "React", "ChakraUI"]
    },
    {
      id: 2,
      title: "Naukri-Clone",
      about: "Naukri.com is a recruitment platform that provide hiring related services to corporates, placement agencies and job seekers in India and Overseas.This project is collabrative having 5 Members and done in 5 days.",
      image: naukri,
      github: "https://github.com/ayushanshu001/shiny-hydrant-7464",
      live: "https://shiny-hydrant-7464.vercel.app/",
      tech: ["Html", "CSS", "JS", "React", "Redux"]
    }
  ]
  return (
    <ProjectContainer id="project">
      <h2 className="heading">Projects</h2>
      {
        data.length > 0 && data.map((ele) => (
          <div className="mainContainer" key={ele.id}>
            <div className="imageContainer">
              <img src={ele.image} alt={ele.title} />
            </div>
            <div className="aboutContainer">
              <Link to={ele.live}><h1>{ele.title}</h1></Link>
              <p>{ele.about}</p>
              {/* <p>{ele.tech}</p> */}
              <div id="techContainer">
                {ele.tech.map((item, index) => (
                  <button key={index}>{item}</button>
                ))}
              </div>
              <div className="links">
                <a href={ele.github} target="_blank">
                  <div>
                    <AiOutlineGithub className='github' />
                    <p>Github</p>
                  </div>
                </a>
                <a href={ele.live} target="_blank">
                  <div style={{ backgroundColor: "red" }}>
                    <p style={{ color: "white" }}>Live</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        ))
      }
      <GitCalender />
    </ProjectContainer>
  )
}

const ProjectContainer = style.div`
  
  width:80%;
  margin:auto;

  .heading{
    color:#00203FFF; 
  text-align:center;  
  font-size:35px;
  font-weight:800;
  font-family:Robot;
  letter-spacing:2px;
  margin:50px auto ;
  }

  .mainContainer{
    margin-bottom:50px;
    border-radius:10px;
    padding:40px 40px;
    display:flex;
    gap:30px;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;

  }

  .imageContainer{
    border-radius:10px;
    box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
    height:300px;
    width:50%;
    overflow:hidden;
  }

  .imageContainer img{
    width:100%;
  }

  
  .imageContainer img:hover{
    object-fit:cover;
    transform: scale(1.1)
  }


  .aboutContainer{
    width:50%;
    color:gray;
  }

  .aboutContainer h1{
    font-style:italic;
    font-weight:500;
    font-size:24px;
    margin-bottom:20px;
  }

  .aboutContainer p{
    text-align:justify;
  }

  button{
    cursor:auto;
    color:darkslategray;
    margin:10px 20px 0px 0px; 
   }

  .links{
    margin-top:30px;
    display:flex;
    gap:30px;
  }
  
  .links div{
    background-color:black;
    display:flex;
    justify-content:center;
    align-items:center;
    gap:10px;
    border-radius:5px;
    padding:10px 0px;
    overflow:hidden;
    width:120px;
    height:30px;
  }

  .github{
    font-size:24px;
    color:white;
  }

  .links p{
    color:white;
    font-size:18px;
    font-weight:500;
  }




  @media only screen and (min-width: 481px) and (max-width:768px){ 
    width:90%;
    margin:auto;
    .mainContainer{
      display:flex;
      flex-direction:column;
      gap:20px;
    }

    .aboutContainer{
      width:95%;
      margin:auto;
    }

    .imageContainer{
      width:95%;
      margin:auto;
    }

    .links div{
      gap:0px;
      padding:3px 5px;
      border-radius:3px;
      width:80px;
    }
    .links p{
      font-size:14px;
      font-weight:500;
    }
    .github{
      font-size:16px;
      color:white;
    }

    button{
      cursor:auto;
      color:darkslategray;
      margin:10px 10px 0px 0px; 
     }

     .imageContainer img:hover{
      object-fit:fill;
      transform: scale(1.1)
    }
  }

  @media only screen and (min-width:320px) and (max-width:480px){
    width:90%;
    margin:auto;
    .mainContainer{
      display:flex;
      flex-direction:column;
      gap:20px;
    }

    .aboutContainer{
      width:100%;
      margin:auto;
    }

    .imageContainer{
      width:100%;
      margin:auto;
    }

    .links div{
      gap:0px;
      padding:5px 0px;
      border-radius:3px;
      width:68px;
    }
    .links{
      gap:10px;
    }

    .links p{
      font-size:12px;
      font-weight:500;
    }
    .github{
      font-size:16px;
      color:white;
    }

    button{
      cursor:auto;
      color:darkslategray;
      margin:10px 10px 0px 0px; 
    }

     .imageContainer img:hover{
      object-fit:fill;
      transform: scale(1.1)
    }
  }
`;

export default Project