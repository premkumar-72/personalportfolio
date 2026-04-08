import { FaFacebook, FaGithub, FaInstagram } from 'react-icons/fa';
import { CiLinkedin } from "react-icons/ci";
import premportfo from './homeimages/premportfo.png';
import React, { useState, useEffect } from 'react';
import premResume from './resume/prem.resume.pdf'
import './home.css';


function TypingEffect() {
  const words = [ "Welcome to My Portfolio","I'm a Web developer", "Innovator"];
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    let typingSpeed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      setText(
        isDeleting
          ? currentWord.substring(0, charIndex - 1)
          : currentWord.substring(0, charIndex + 1)
      );
      setCharIndex(isDeleting ? charIndex - 1 : charIndex + 1);

      if (!isDeleting && charIndex === currentWord.length) {
        setTimeout(() => setIsDeleting(true), 1000); 
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, wordIndex]);

  return (
    <span>
      {text}
      <span className="cursor">|</span>
    </span>
  );
}
let handlegit=(a)=>{
     if(a==1){
        window.location.href="https://github.com/premkumar-72"
      }
      if(a==2){
        window.location.href="https://www.instagram.com/prem_._._l/"
      }
        if(a==3){
        window.location.href="https://www.facebook.com/prem.kumar.136701"
      }
  if(a==4){
    window.location.href="https://www.linkedin.com/in/prem-kumar-70b725267"
  }
}

export default function Home(){
  return(
    <div id='home' className="mc-home">
      <div className="inner-homc1 inner-ho-com">
        <h3>hello, i'm Prem Kumar</h3>
        <div className='ty'>
        <h1><TypingEffect /></h1>
             
        </div>
        <h3>Expanding skills and discovering new ways to innovate</h3>
       <a href={premResume} download="prem_resume"> <button >DOWNLOAD CV</button></a>
        <div className='home-icons-d'>
           <div className="naviconss nav-icon1" onClick={()=>handlegit(1)}><FaGithub  className="hover-rotate" /></div>
                  <div className="naviconss nav-icon2" onClick={()=>handlegit(2)}><FaInstagram className="hover-rotate" /></div>
                  <div className="naviconss nav-icon3" onClick={()=>handlegit(3)}><FaFacebook className="hover-rotate" /></div>
                   <div className="naviconss nav-icon4" onClick={()=>{handlegit(4)}}>< CiLinkedin className="hover-rotate" /></div>

        </div>
      </div>

      <div className="inner-homc2 inner-ho-com">
    
        <div className="homeimg1 home-imgs">
          <div className="homeimg2 home-imgs">
            <div className="homeimg3 home-imgs">
              <div className="homeimg4 home-imgs">
                <div className="homeimg5 home-imgs">
                  <div className="homeimg6 home-imgs">
                    <div className="homeimg7 home-imgs"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
             
             <div className='img-home'>

                    <img 
          src={premportfo} 
          alt="portfolio img" 
        />

             </div>
  
      </div>
    </div>
  )
}