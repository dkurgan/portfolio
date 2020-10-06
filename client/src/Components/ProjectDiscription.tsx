const React = require('react');

interface ProjectDiscription{
    title: string;
    text: string;
    stack: string;
    projectLink?: string;
    githubLink: string
}

export default ({ title, text, stack, projectLink, githubLink }: ProjectDiscription) => {
    return (
        <div>
            <div className="faded"></div>
            <div>
                <h2>{title}</h2>
                <div className="stack">
                    {stack}
                </div>
                <div>
                    <div className="links-side">
                        {projectLink ? projectLink : null}
                        {githubLink}
                    </div>
                    <div className="discription-side">
                        {text}
                    </div>
                </div>
            </div>
        </div>
    )
}