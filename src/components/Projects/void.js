import React, { Component } from 'react';
import './projects.scss';


export default class Project extends Component {
  
    render() {
        const {id,name,img,tools,info,address}=this.props.project;
        return (
            <article className="project">

                <div className="project-name">{name}</div>
                <img src={img} alt=""/>
                <div className="project-img-back"></div> 
                <div className="project-info">{info}</div>
                <div className="project-tools">Tools:</div>
                    {tools.map(tool=>
                    <div className="project-tools-tool" key={tool.toString()}>
                        {tool}
                    </div>
                    )}
                <div className="project-website">
                    <button className="project-website-button">
                        <a href={address}>Visit Website</a>
                    </button>
                </div>           
                
            </article>
        )
    }
}