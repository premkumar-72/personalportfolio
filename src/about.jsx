
import './about.css';
import aboutme from './aboutimages/aboutme.gif'

export default function About1(){
    return(
            <div id='about' className="about-mc">
                                           <h1>ABOUT ME</h1>
                                         <div className="ab-main">
    <div className="ab-gif ab-in-main-com">
      <div className="container">
        <div className="box front"></div>
        <div className="box back"></div>
        <div className="box top"></div>
        <div className="box bottom"></div>
        <div className="box left"></div>
        <div className="box right"></div>
      </div>
         <div className="holo-projector"></div>

     
    </div>
 
                                               
                                                <div className='ab-in-main-com ab-content'> 
                                                       <div className='ab-content1'>
                                                       <p>I am a highly motivated MERN Stack Developer with a solid foundation in building responsive, user-centric web applications. Having completed my B-Tech in Information Technology, I specialize in using MongoDB, Express.js, React, and Node.js to turn complex ideas into functional digital solutions.</p>
                                                        </div>                                                       
                                                        <div  className='ab-content2'>
                                                             <p>
                                                        I am passionate about writing clean, maintainable code and bridging the gap between elegant frontend design and robust backend logic. My goal is to build scalable applications that solve real-world problems while staying current with emerging industry trends.
                                                       </p>
                                                        </div>

                                                        <div  className='ab-content3'>
                                                                          <h3>Technical Stack</h3>
                                                       <ul>
                                                            <li> <div className='ab-shapes'><div className="shape1"></div><div className="shape2"></div></div> <h4>Frontend:</h4> React.js, Redux, HTML5, CSS3, Bootstrap</li>
                                                            <li> <div className='ab-shapes'><div className="shape1"></div><div className="shape2"></div></div><h4>Backend:</h4> Node.js, Express.js, RESTful APIs</li>
                                                            <li> <div className='ab-shapes'><div className="shape1"></div><div className="shape2"></div></div><h4>Database:</h4> MongoDB, Mongoose.</li>
                                                            <li> <div className='ab-shapes'><div className="shape1"></div><div className="shape2"></div></div><h4>Tools:</h4> Git/GitHub, Postman.</li>

                                                       </ul>
                                                        </div>
                                                </div>

                                       </div>
                                </div>
    )
                                
}