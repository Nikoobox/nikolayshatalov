import React, { Component } from 'react';
// import './test.scss';
import './projects.scss';


export default class Test extends Component {
    
    render() {
        const {id,name,img,tools,info,address}=this.props.project;
        return (
            
                    <div className="grid__item">
                        <div className="card">
                            <img className="card__img" src={img} alt=""/>
                            <div className="card__content">
                                <h1 className="card__header">{name}</h1>
                                <p className="card__text">{info}</p>
                                <div className="card__tools__box">
                                {tools.map(tool=>
                                <div className="card__tools" key={tool.toString()}>
                                    {tool}
                                </div>
                                )}
                                </div>
                                <a href={address}><button className="card__btn">See More <span>&rarr;</span></button></a>
                            </div>
                        </div>
                    </div>
               
  
        )
    }
}


