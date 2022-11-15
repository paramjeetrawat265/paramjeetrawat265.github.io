import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import style from "styled-components";
import { FaPhoneAlt, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { FaLocationArrow } from "react-icons/fa";
import { BiCheckDouble } from "react-icons/bi"
const Contact = () => {

  const form = useRef();

  const [flag, setFlag] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');


  const sendEmail = (e) => {
    e.preventDefault();
    if (name !== "" && email !== "" && subject !== "" && message !== "") {
      setName("")
      setEmail("")
      setSubject("")
      setMessage("")
      emailjs.sendForm('service_ah81fdp', 'template_yhx6m1o', form.current, 'B9B7vfUbb7R9xXKs5')
        .then((result) => {
          console.log(result.text);
          setFlag(true);
          let id = setTimeout(() => {
            setFlag(false)
            clearTimeout(id)
          }, 4000)

        }, (error) => {
          console.log(error.text);
        });
    }
  }

  return (
    <Container id="contact">
      <div className='contactBox'>
        <h1>Contact Me</h1>
        <div className='mainContainer'>
          <div className="infoContainer">
          <div className="phone">
              <h2>LinkedIn</h2>
              <FaLinkedin className="logo" />
              <p>Reach Me On LinkedIn </p>
              <a href="https://www.linkedin.com/in/paramjeet-rawat-923597197/">Paramjeet_Rawat</a>
            </div>
            <div className="phone">
              <h2>Phone</h2>
              <FaPhoneAlt className="logo" />
              <p>You can call me... </p>
              <a href="tel:+91 9868970877">+919868970877</a>
            </div>
            <div className="phone">
              <h2>Email</h2>
              <HiOutlineMail className="logo" />
              <p>You can send me a mail </p>
              <a href="mailto: paramjeetrawat265@gmail.com">paramjeetrawat265gmail.com</a>
            </div>
            <div className="phone">
              <h2>Location</h2>
              <FaLocationArrow className="logo" />
              <p>Delhi</p>
              <a href="https://goo.gl/maps/HnrKZtNtDmCSMHKq8">Show on Map</a>
            </div>
          </div>

          {flag ?
            <div className="sentSuccess">Message Sent Successfully
              <p><BiCheckDouble style={{ color: "green" }} /></p>
              <p style={{ color: "white" }}>Thankyou For Your Response</p>
            </div> : ""}

          <div className='formContainer'>
            <h2>Send me a Message</h2>
            <form ref={form}>
              <input type="text" placeholder="Name" name="name"
                value={name} onChange={(e) => setName(e.target.value)}
              ></input>
              <input type="email" placeholder="Email" name="email"
                value={email} onChange={(e) => setEmail(e.target.value)}
              ></input>
              <input type="text" placeholder="Subject" name="subject"
                value={subject} onChange={(e) => setSubject(e.target.value)}
              ></input>
              <textarea rows="4" placeholder="Message Here" name="message"
                value={message} onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </form>
            <button type="submit" onClick={sendEmail}>Send Message</button>
          </div>
        </div>

      </div>
      <div className="trademark">
        <p>&#169; Design Made By Me</p>
      </div>
    </Container>
  )
}
const Container = style.div`
  padding-top:10px;
  width:100%;
  margin:auto;
  background-color:#f0f0fb;

  .contactBox{
    width:80%
    margin:auto;
  }

  
  .sentSuccess{
    display:flex;
    flex-direction:column;
    align-items:center;
    padding:30px;
    width:auto;
    margin:auto;
    background-color:#2f4f4f;
    color:white;
    z-index:100;
    font-size:24px;
  }

  h1{
    color:#00203FFF; 
    text-align:center;  
    font-size:35px;
    font-weight:800;
    font-family:Robot;
    letter-spacing:2px;
    margin:50px auto 30px auto;
  }

  .infoContainer{
    padding:20px;
    width:80%;
    margin:auto;
    display:flex;
    justify-content:space-around;
  }

  .phone{
    display:flex;
    gap:5px; 
    flex-direction:column;
    align-items:center;
  }

  .phone h2{
    font-family:sans-serif;
    font-size:22px;
    font-weight:700;
  }

  .phone a{
    font-weight:500;
    color:#00203FFF;
  }

  .logo{
    font-size:30px;
  }


  .formContainer{
    border-radius:10px;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 164, 67, 0.15) 0px 1px 3px 1px;
    margin:80px auto 100px auto;
    width:50%;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    padding:30px 0px;
  }

  .formContainer h2{
    color:#00203FFF;
    font-family:sans-serif;
    font-size:22px;
    font-weight:700;
  }

  .formContainer>form{
    width:100%;
    margin:auto;
  }

  .formContainer>form>input{
    border-radius:5px;
    width:80%;
    margin:auto;
    padding:5px 10px;
    display:block;
    border:1px solid gray;
    margin-top:10px;
  }

  .formContainer>form>textarea{
    border-radius:5px;
    width:80%;
    margin:auto;
    padding:5px 10px;
    display:block;
    border:1px solid gray;
    margin-top:10px;
  }

  button{
    border-radius:5px;
    background-color:#00203FFF;
    color:white;
    margin:10px 0px 10px 0px;
    padding:5px 10px;
    border:none;
  }

  .trademark{
    display:flex;
    align-items:center;
    justify-content:center;
    font-family:robot;
    height:60px;
    padding:10px;
    font-size:18px;
    background-color:black;
    color:white;
  }


  @media only screen and (min-width: 481px) and (max-width:780px){ 
    .formContainer{
      width:80%;
    }
    .infoContainer{
      display:flex;
      flex-direction:column;
      gap:50px;
    }
  }

  @media only screen and (min-width:320px) and (max-width:480px){
    .formContainer{
      width:80%;
    }
    .infoContainer{
      display:flex;
      flex-direction:column;
      gap:50px;
    }
  }
`;

export default Contact