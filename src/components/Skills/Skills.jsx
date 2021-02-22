import React from 'react'
import './skills.scss';
// import '../../../public/img/d3.svg';
import { SiJavascript, SiReact, SiRedux, SiRuby, SiRails, SiHtml5, SiCss3, SiJquery, SiPostgresql, SiMongodb, SiFirebase, SiAmazonaws, SiBootstrap, SiWebpack } from "react-icons/si";
import { IoLogoNodejs } from "react-icons/io";
import d3jsIcon from './d3js.png'

class Skills extends React.Component {  

    render() {

        return (
            <>
                {/* <div>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0d1d27" fill-opacity="1" d="M0,256L60,245.3C120,235,240,213,360,181.3C480,149,600,107,720,96C840,85,960,107,1080,101.3C1200,96,1320,64,1380,48L1440,32L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>
                </div> */}
            <div className='skills-container' id="skills-destination">
                <div className='skills-title'>Skills</div>
                <div className='skills-box anim' data-delay="0s">
                    <div className='box'>
                        <SiJavascript className='skill-icon' />
                        <div className="skill-name">Javascript</div>
                    </div>
                    <div className='box'>
                        <SiReact className='skill-icon' />
                        <div className="skill-name">React</div>
                    </div>
                    <div className='box'>
                        <SiRedux className='skill-icon' />
                        <div className="skill-name">Redux</div>
                    </div>
                    <div className='box'>
                        <SiRuby className='skill-icon' />
                        <div className="skill-name">Ruby</div>
                    </div>
                    <div className='box'>
                        <SiRails className='skill-icon' />
                        <div className="skill-name">Rails</div>
                    </div>
                    <div className='box'>
                        <IoLogoNodejs className='skill-icon' />
                        <div className="skill-name">Node.js</div>
                    </div>
                    <div className='box'>
                        <SiHtml5 className='skill-icon' />
                        <div className="skill-name">HTML5</div>
                    </div>
                    <div className='box'>
                        <SiCss3 className='skill-icon' />
                        <div className="skill-name">CSS3</div>
                    </div>
                    <div className='box'>
                        <SiJquery className='skill-icon' />
                        <div className="skill-name">jQuery</div>
                    </div>
                    <div className='box'>
                        <SiPostgresql className='skill-icon' />
                        <div className="skill-name">Postgresql</div>
                    </div>
                    <div className='box'>
                        <SiMongodb className='skill-icon' />
                        <div className="skill-name">MongoDB</div>
                    </div>
                    <div className='box'>
                        <SiFirebase className='skill-icon' />
                        <div className="skill-name">Firebase</div>
                    </div>
                   
                    <div className='box'>
                        <SiAmazonaws className='skill-icon' />
                        <div className="skill-name">AWS S3</div>
                    </div>
                    <div className='box'>
                        <img src={d3jsIcon} alt="" className='d3js'/>
                        {/* <img src='../../../public/img/d3js.png' alt="" /> */}
                        <div className="skill-name">D3.js</div>
                    </div>
                    <div className='box'>
                        <SiBootstrap className='skill-icon' />
                        <div className="skill-name">Bootstrap</div>
                    </div>
                    <div className='box'>
                        <SiWebpack className='skill-icon' />
                        <div className="skill-name">Webpack</div>
                    </div>
                    
                </div>
              
            </div>
            </>
        )
    }
}

export default Skills;