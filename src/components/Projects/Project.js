import React, { Component } from 'react';
import { IoMdPhonePortrait, IoMdDesktop, IoMdLaptop } from "react-icons/io";

export default class Test extends Component {
    
    render() {
        const {name,img,tools,info,address, repo, responsive}=this.props.project;

        const isRepo = repo ? <a href={`${repo}`} rel='noopener noreferrer' target="_blank" className='repo_link'>
            <button>Repo</button>
        </a> : '';

        return (
                <div className="card_box">
                    <div className="card">
                        <div className='img_box'>
                            <img className="img" src={img} alt="" />
                            <div className="overlay"></div>
                        </div>
                        <div className='card_content_box'>
                            <div className="card_content">
                                <div className="card_header">{name}</div>
                                <div className="card_text">{info} 
                                </div>
                                <div className="card_tools_box">
                                    <span>Built with:</span> 
                                    {tools.map(tool =>
                                        <div className="card_tools" key={tool.toString()}>
                                            {tool}
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className="links_box">
                                <div className='links'>
                                    <a href={`${address}`} rel='noopener noreferrer' target="_blank" className='live_link'>
                                        <button>Live Link</button>
                                    </a>

                                    {isRepo}
                                </div>

                                <div className='devices-box'>
                                    {responsive ? <div className='dev'><IoMdPhonePortrait /></div> : '' }
                                    <div className='dev'><IoMdLaptop /></div>
                                    <div className='dev'><IoMdDesktop/></div>

                                </div>
                            </div>
                        </div> 
                    </div>
                </div>
        )
    }
}


