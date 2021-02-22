import { openNewTab } from '../helpes/openNewTab';
import * as React from 'react';

export default class ProjectsCircle extends React.Component {
    state = {spinCircle: "running", spinItem: "running"}
    callculatePos = () =>{
        const radius = 250;
        const items = document.getElementsByClassName('item-circle');
        const bigCircle = document.querySelector('.circle');
        const width = bigCircle!.clientWidth;
        const height = bigCircle!.clientHeight;
        let angle = 0;
        let step = (2 * Math.PI) / items.length;
        let cords:number[][] = [];
        for (let k in items) {
            let x = Math.round(width / 2 + radius * Math.cos(angle) - items[k].clientWidth / 2);
            let y = Math.round(height / 2 + radius * Math.sin(angle) - items[k].clientWidth / 2);
            angle += step;
           cords = [...cords, [x, y]]
        }
        // console.log({cords});
    }
    componentDidMount() {
        this.callculatePos();
    }
    render() {
        const { spinItem, spinCircle } = this.state;
        return <>{
            <div className={`circle`} style={{ animationPlayState: `${spinCircle}` }} onMouseLeave={() => {
                this.setState({ spinCircle: "running", spinItem: "running" })
            }}
                onMouseOver={() => { this.setState({ spinCircle: "paused", spinItem: "paused" }) }}>
                <div id="0" className={`item-circle`} style={{ top: "177px", left: "427px", animationPlayState: spinItem }} onClick={() => openNewTab("https://github.com/dkurgan/Hooney")}>
                    <p>Hooney</p>
                </div>
                <div id="1" className={`item-circle`} style={{ top: "394px", left: "52px", animationPlayState: spinItem }} onClick={() => openNewTab("https://twentyfiveofus.herokuapp.com/")}>
                    <p>TwentyFiveOfUs</p>
                </div>
                <div id="2" className={`item-circle`} style={{ top: "-40px", left: "52px", animationPlayState: spinItem }} onClick={() => openNewTab("https://github.com/dkurgan/matcha")}>
                    <p>Matcha</p>
                </div>
            </div>
        }</>
    }
}