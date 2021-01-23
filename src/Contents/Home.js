import { Component } from 'react';
import Social from '../Components/Social';
import profilepic from "../img/1712021_210121.jpg";
import ReactTypingEffect from 'react-typing-effect';

class Home extends Component{
    render(){
        return(
            <div className = "condiv home">
                <img src ={profilepic} alt ="profile" className="profilepic"/>
                <ReactTypingEffect text={['I am Woratan','I am a undergraduate']} speed={80} eraseDelay={200} className="typingeffect"/>
                <Social/>
            </div>
        );
    }
}

export default Home;