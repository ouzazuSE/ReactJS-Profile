import { Component } from 'react';

class Social extends Component{
    render(){
        return(
            <div className = "social">
                <a href="#" target="_blank" rel="noopender noreferrer"><i className="fab fa-github"></i></a>
                <a href="#" target="_blank" rel="noopender noreferrer"><i className="fab fa-facebook"></i></a>
                <a href="#" target="_blank" rel="noopender noreferrer"><i className="fab fa-twitter"></i></a>
            </div>
        );
    }
}

export default Social;