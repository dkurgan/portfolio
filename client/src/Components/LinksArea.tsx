import { openNewTab } from '../helpes/openNewTab';
import * as React from 'react';


export default class LinksArea extends React.Component{
    state = { animation: "link-animated" }    
    render() {
        const { animation } = this.state;
        return <>{
            <div className="links-area" onMouseOver={() => this.setState({ animation: "" })}
                onMouseLeave={() => this.setState({ animation: "link-animated" })}>
                <div className={`link ${animation}`} onClick={() => openNewTab("https://www.linkedin.com/in/danilakurgan/")}>
                    <p><i className="fab fa-linkedin-in"></i></p>
                </div>
                <div className={`link ${animation}`} onClick={() => openNewTab("https://github.com/dkurgan")}>
                    <p><i className="fab fa-github"></i></p>
                </div>
                <div className={`link ${animation}`}>
                    <div onClick={()=> openNewTab('/portfolio/files/DanilaKurgan.pdf')}><i className="fas fa-file"></i></div>
                </div>
            </div>
        }</>
    }
}