import React from 'react';
import LinksArea from './LinksArea';
import ProjectsCircle from './ProjectsCircle';
import TopBar from './TopBar';

export const LandingPage = () => {
    return (
        <div className="container" >
            <div>
                <LinksArea />
            </div>
            <div className="side-area">
                <div className="top-bar">
                    <TopBar />
                </div>
                <div className="circle-area">
                    <ProjectsCircle />
                    </div>
            </div>
        </div>
    );
}