import React from 'react';
import { openNewTab } from '../helpes/openNewTab';

export default class TopBar extends React.Component{
    render() {
        return (
            <div className="header-container">
                <div className="header">
                    <h3>Danila Kurgan</h3>
                </div>
                <div onClick={()=> openNewTab("mailto:danilamound@gmail.com")}>
                    <div className="email"><i className="fas fa-envelope"></i>danilamound@gmail.com</div>
                </div>
            </div>
        )
    }
}