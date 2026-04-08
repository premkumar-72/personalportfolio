import './skills.css'
const Skills = () => {
  return (
    <section id='skill' className='mainsection '>
                        <h1>SKILLS</h1>
             <section id='skills' > 
          <div className="firstcontainer">

                 <h1 className='heading'>Technical Skills</h1>
                 <div className="technical-container">
                       <div className="bar1">
                                <div className="info1">
                                          <span>
                                            HTML5
                                          </span>
                                </div>
                                <div className="progress-line html">
                                          <span>

                                          </span>
                                </div>
                       </div>

                       <div className="bar1">
                                <div className="info1">
                                          <span>
                                            CSS3
                                          </span>
                                </div>
                                <div className="progress-line css">
                                          <span>
                                            
                                          </span>
                                </div>
                       </div>

                       <div className="bar1">
                                <div className="info1">
                                          <span>
                                            Javascript
                                          </span>
                                </div>
                                <div className="progress-line javascript">
                                          <span>
                                            
                                          </span>
                                </div>
                       </div>

                       <div className="bar1">
                                <div className="info1">
                                          <span>
                                            Reactjs
                                          </span>
                                </div>
                                <div className="progress-line reactjs">
                                          <span>
                                            
                                          </span>
                                </div>
                       </div>

                       <div className="bar1">
                                <div className="info1">
                                          <span>
                                             Nodejs
                                          </span>
                                </div>
                                <div className="progress-line nodejs">
                                          <span>
                                            
                                          </span>
                                </div>
                       </div> 


                 </div>

          </div>



          <div className="second-container">
               
                 <h1 className='heading'>Professional Skills</h1>
                  <div className="professonalbars">
                           <div className="radialbar">
                                  <svg x={0} y={0} viewBox='0 0 200 200'>
                                       <circle className='progress-bar' cx="100" cy="100" r="80"></circle>
                                       <circle className='path path1' cx="100" cy="100" r="80"></circle>
                                  </svg>
                                  <div className="percentage">90%</div>
                                  <div className="text">Creativity</div>
                           </div>

                           <div className="radialbar">
                                  <svg x={0} y={0} viewBox='0 0 200 200'>
                                       <circle className='progress-bar' cx="100" cy="100" r="80"></circle>
                                       <circle className='path path2' cx="100" cy="100" r="80"></circle>
                                  </svg>
                                  <div className="percentage">80%</div>
                                  <div className="text">Communication</div>
                           </div>

                           <div className="radialbar">
                                  <svg x={0} y={0} viewBox='0 0 200 200'>
                                       <circle className='progress-bar' cx="100" cy="100" r="80"></circle>
                                       <circle className='path path3' cx="100" cy="100" r="80"></circle>
                                  </svg>
                                  <div className="percentage">80%</div>
                                  <div className="text size-7">Problem Solving</div>
                           </div>

                           <div className="radialbar">
                                  <svg x={0} y={0} viewBox='0 0 200 200'>
                                       <circle className='progress-bar' cx="100" cy="100" r="80"></circle>
                                       <circle className='path path4' cx="100" cy="100" r="80"></circle>
                                  </svg>
                                  <div className="percentage">85%</div>
                                  <div className="text">Team Work</div>
                           </div>

                  </div>



          </div> 

      
          </section>
    
    </section>
    
  )
}

export default Skills