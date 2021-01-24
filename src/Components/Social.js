import { Component } from 'react';

class Social extends Component{
    render(){
        return(
            <div className = "social">
                <a href="https://github.com/ouzazuSE" target="_blank" rel="noopender noreferrer"><i className="fab fa-github"></i></a>
                <a href="https://www.facebook.com/au.ou.31" target="_blank" rel="noopender noreferrer"><i className="fab fa-facebook"></i></a>
                <a href="https://twitter.com/ouzazu001" target="_blank" rel="noopender noreferrer"><i className="fab fa-twitter"></i></a>
                <a href="https://ouzazu001@gmail.com" target="_blank" rel="noopender noreferrer"><i className="fab fa-google"></i></a>
            </div>
        );
    }
}

export default Social;