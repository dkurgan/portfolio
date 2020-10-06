import LinksArea from './LinksArea';
import ProjectsCircle from './ProjectsCircle';
import TopBar from './TopBar';
import * as React from 'react';

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