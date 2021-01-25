import { Component } from 'react';
import profilepic from "../img/1712021_210121.jpg";

class About extends Component{
    render(){
        return(
            <div className="condiv about">
                <h1 className="subtopic">About Me</h1>
                <img src ={profilepic} alt ="profile" className="profilepic"/>
                <h3>Hi, I'm Woratan</h3>
                <p>Welcom to my React Profile</p>  
            </div>
        );
    }
}

export default About;