
import single from './projectImgs/single.png'
import multiple from './projectImgs/multiple.png'
import portfolio from './projectImgs/portfolio.png'
import { FaExternalLinkAlt,FaCode  } from "react-icons/fa";

import './project.css';
import { Link } from 'react-router';



export default function Project(){

    let arr=[{
             img:single,
             description:'Developed a fully responsive anime streaming landing page using only HTML and CSS. Focused on creating a modern user experience with interactive hover states, a robust grid-based content system, and mobile-first design principles. This project demonstrates my ability to take a complex design concept and translate it into clean, semantic code',

    },{img:multiple,
        description:"This bike project was built using HTML, CSS, and a little JavaScript, focusing on a clean layout and smooth user experience. I designed it to be lightweight and responsive, with simple styling that highlights the bike’s features while keeping the code easy to maintain.",
    },
    {
        img:portfolio,
        description:"Developed a high-performance Single Page Application using React and Vite to serve as a professional digital showcase of my technical expertise. The site features a modular, component-based architecture and a fully responsive layout implemented with custom CSS3. I utilized EmailJS to enable a functional, backend-less contact system that delivers inquiries directly to my inbox.",
        }
];


let handlelink=(a)=>{   
    let b="";
    console.log(a);
    
 if (a===0){
    b="https://premkumar-72.github.io/anime-webpage/";

           window.location.href=b;

 }
  if (a===1){
    b="https://premkumar-72.github.io/bike-website/";

           window.location.href=b;

 }
  if (a===2){
    b="https://premkumar-72.github.io/anime-webpage/";

           window.location.href=b;

 }
}

let handlesource=(a)=>{
       if(a==0){
        window.location.href="https://github.com/premkumar-72/anime-webpage"
       }        
    if(a==1){
        window.location.href="https://github.com/premkumar-72/bike-website"
    }
}
               return(

                   <div id='project' className="proj-mc">
                         
                         <div className='pro-t'>
                                 <h1 >PROJECTS</h1>
                         </div>
                         
                    

                     <div className="proj-c-main">

                        {
                        arr? arr.map( (ele,i)=>{
                            return(     <div key={i} className={i%2==0?`even-co`:`odd-co`}>
                                  
                              
                                <div className="proj-img">
                                             <div className='pro-hov'>
                            <FaExternalLinkAlt onClick={()=>{
                                handlelink(i)
                            }} className='pro-ic1'/> 
                            <FaCode className='pro-ic2' onClick={()=>{handlesource(i)}} />  
                        </div>
                                    <div className='pro-im'>
                                <img src={ele.img} alt={ele.img} />
                                          
                                    </div>
                                         
                                </div>
                                <div className='proj-ma'>
                                         <div className='proj-des'>
                                       <p> {ele.description}</p>
                                </div>
                                </div>
                               
          
        </div>

                        )}) : <h1>loading</h1>

                        }

                    

                     </div>

                   </div>
               )
}