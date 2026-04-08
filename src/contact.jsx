import { TbMailFilled } from "react-icons/tb";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub, FaWhatsapp } from 'react-icons/fa';
   import emailjs from "emailjs-com";


import './contact.css'

export default function Contact(){

const handleSubmit = (e) => {
  e.preventDefault();
  emailjs.sendForm(
    "service_2z6889e",
    "template_bukuso7",
    e.target,
    "TdsGQYR20ZZSmauAt"
  ).then(
    (result) => {
      alert("Message sent successfully!");
    },
    (error) => {
      alert("Failed to send message. Try again.");
    }
  );
};


     let handlegit=(a)=>{

      if(a==1){
        window.location.href="https://github.com/premkumar-72"
      }
      if(a==2){
        window.location.href="https://www.linkedin.com/in/prem-kumar-70b725267"
      }
        if(a==3){
        window.location.href="https://wa.me/9360298817"
      }
                       
     }


     return(
        <div id='contact' className="co-mc">
                     <h1>GET IN TOUCH</h1>
          <div className='con-m'>
              <div className="con-main con-main1">

                 <p>Lets collaborate! I am always open to discussing exciting projects and new opportunities</p>

                 <table>
                  <tr className="t-row">
                     <td><TbMailFilled className="con-con"/></td>
                     <td>premkumarkppk2@gmail.com</td>
                  </tr>
                    <tr className="t-row">
                     <td><FaPhoneAlt className="con-con"/></td>
                     <td>9360298817</td>
                  </tr>
                   <tr className="t-row">
                     <td><FaLocationDot className="con-con"/></td>
                     <td>Chennai</td>
                  </tr>
                 </table>

                <div className='home-icons-d con-icons'>
                           <div className="naviconss nav-icon1" onClick={()=>{handlegit(1)}}><FaGithub  className="hover-rotate" /></div>
                                      <div className="naviconss nav-icon4" onClick={()=>{handlegit(2)}}>< CiLinkedin className="hover-rotate" /></div>
                                  <div className="naviconss nav-icon2" onClick={()=>{handlegit(3)}}><FaWhatsapp className="hover-rotate" /></div>
                        
                
                        </div>

            </div>
            <div className="con-main con-main2">
               <form action="" onSubmit={handleSubmit}>
                  <input type="text" name="user_name" placeholder='Your Name' required/>
                  <input type="email" name="user_email" placeholder='Your Email' required />
                  <textarea className='con-txt' name="message" id="" placeholder='Your message' required></textarea>
                  <button type="submit">SEND MESSAGE</button>

               </form>
            </div>
          </div>

        </div>
     )
}