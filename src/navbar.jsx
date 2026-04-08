
import { Link } from "react-router";
import { FaBars, FaFacebook, FaGithub, FaInstagram } from "react-icons/fa";
import './navbar.css'
import { useEffect, useState } from "react";

export default function Navbar1(){




  let [state,setState]=useState(true);
         const handleScroll = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"   
    });
  };
     function handleactive(p){
        let h=document.getElementsByClassName('nav-content1')[0];
        let a=document.getElementsByClassName('nav-content2')[0];
        let pr=document.getElementsByClassName('nav-content3')[0];
        let c=document.getElementsByClassName('nav-content4')[0];
        let sk=document.getElementsByClassName('nav-content5')[0];

        
        function remove(){
            h.classList.remove("active-nav");
            a.classList.remove("active-nav");
            pr.classList.remove("active-nav");
            c.classList.remove("active-nav");
                     sk.classList.remove("active-nav");


        }
        if(p=="home"){
            remove();
            h.classList.add("active-nav ");
            handleScroll();
        }
            if(p=="about"){
            remove();
            a.classList.add("active-nav");
            handleScroll();

        }
            if(p=="project"){
            remove();
            pr.classList.add("active-nav");
            handleScroll();

        }
            if(p=="contact"){
            remove();
            c.classList.add("active-nav");
            handleScroll();
            
        }
        if(p=="skills"){
            remove();
            sk.classList.add("active-nav");
            handleScroll();

        }

     }
     
     let movecontent=()=>{
          let h=document.getElementsByClassName('nav-contents2')[0];
           
            if(state==true){
            h.classList.replace('moving-nav', 'unmoving-nav')
            }
            else{
            h.classList.replace('unmoving-nav', 'moving-nav')

            }
             setState(!state)
          

     }
     let handleclick=()=>{
                     
             let cli=document.getElementsByClassName('nav-contents2')[0];
             cli.classList.replace('unmoving-nav', 'moving-nav')
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
                       
     }

    return(
      <>
          <div className="nav-main">

            <div className="nav-inner">
                   <h1>Port<span className="folio">folio</span> </h1>

 
      <div className="nav-content">
        <a href="#home" onClick={() => handleactive('home')} className="nav-content1 nav-contentlink"  >Home</a>
        <a href="#about" onClick={() => handleactive('about')} className="nav-content2 nav-contentlink" >About</a>
        <a href="#skill" onClick={() => handleactive('skills')} className="nav-content5 nav-contentlink" >Skills</a>
        <a href="#project" onClick={() => handleactive('project')} className="nav-content3 nav-contentlink" >Projects</a>
        <a href="#contact" onClick={() => handleactive('contact')} className="nav-content4 nav-contentlink" >Contact</a>
      </div>

      <div className="nav-icons">
        <div className="naviconss nav-icon1" onClick={()=>handlegit(1)}><FaGithub  className="hover-rotate" /></div>
        <div className="naviconss nav-icon2" onClick={()=>handlegit(2)}><FaInstagram className="hover-rotate" /></div>
        <div className="naviconss nav-icon3" onClick={()=>handlegit(3)}><FaFacebook className="hover-rotate" /></div>
      </div>
         
         <button className="nav-button" onClick={movecontent}><FaBars/></button>

            </div>
        
        </div>
         
         <div className="nav-contents2 moving-nav">
        <a href="#home" onClick={ handleclick } className="nav-content1 nav-contentlink" to="/">Home</a>
        <a href="#about" onClick={  handleclick  } className="nav-content2 nav-contentlink" to="./about">About</a>
        <a href="#skill" onClick={ handleclick  } className="nav-content5 nav-contentlink" to="./skills">Skills</a>
        <a href="#project" onClick={  handleclick } className="nav-content3 nav-contentlink" to="./projects">Projects</a>
        <a href="#contact" onClick={  handleclick  } className="nav-content4 nav-contentlink" to="./contact">Contact</a>
         </div>
          
      </>
    
    )
}