import React from 'react'
import './skills.scss';
import { SiJavascript, SiReact, SiRedux, SiRuby, SiRails, SiHtml5, SiCss3, SiJquery, SiPostgresql, SiMongodb, SiFirebase, SiAmazonaws, SiBootstrap, SiWebpack } from "react-icons/si";
import { IoLogoNodejs } from "react-icons/io";
import d3Icon from './d3Icon.png'

class Skills extends React.Component {  

    render() {

        return (
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
                        <img src={d3Icon} alt="" className='d3Icon'/>
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
            
        )
    }
}

export default Skills;