import React, { Component} from 'react'
import './projects.scss';
import Project from './Project';
import {projectsData} from '../../projectsData';


export default class Projects extends Component {

    state={
        projects:projectsData
    };

    componentDidMount(){
        window.scrollTo(0,0);
        window.addEventListener('scroll', (e)=>{
            const window = e.currentTarget;

            if (this.prev > window.scrollY) {
                // console.log("scrolling up");
                // const elements = document.querySelectorAll('.anim');
                // elements.forEach(ele=>{
                //     ele.style.opacity=1;
                // })
            } else if (this.prev < window.scrollY) {
                // console.log("scrolling down");
                this.anim();
            }
            this.prev = window.scrollY;
        });

        const skillsBox = document.querySelector('.skills-box');

        if (window.innerWidth < 768){
            skillsBox.classList.remove("anim");
        }else{
            skillsBox.classList.add("anim");
        } 
    }


    anim() {
        const elements = document.querySelectorAll('.anim')
        const options = {
            root:null,
            threshold: 1,
            rootMargin: '-100px'
        };
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.intersectionRatio > 0.2) {
                    entry.target.style.animation = `anim1 0.6s ${entry.target.dataset.delay} forwards ease`
                } 
                // else {
                //     entry.target.style.animation = 'none'
                // }
            })
        }, options)

        elements.forEach(element => {
            observer.observe(element)
        })
    }


    render() {
        const{projects}=this.state;

        return (
            <article>
                
                <div className="projects-title" id="projects-destination">Projects</div>
                
                <div className='projects'>
                    <div className='grid fadeIn'>
                    {projects.map(project=>(
                        <Project key={project.id} project={project}/>
                    ))}
                    
                    </div>
                </div>
            </article>
            
                
           
        )
    }
}