import React, { Component } from 'react'
import './projects.scss';
// import { Element } from 'react-scroll'
import Project from './Project';
import {projectsData} from '../../projectsData';
// import {Link} from 'react-scroll'

export default class Projects extends Component {

    state={
        projects:projectsData
    };

    render() {
        const{projects}=this.state;

        return (
            <article>
                
                <div className="projects-title" id="projects-destination">Projects</div>
                
                <div className='projects'>
                <div className='grid'>
                {projects.map(project=>(
                     <Project key={project.id} project={project}/>
                ))}
                </div>
                </div>
            </article>
            
                
           
        )
    }
}