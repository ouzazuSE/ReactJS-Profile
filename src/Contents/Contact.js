import { Component } from 'react';

import Social from '../Components/Social'

class Contact extends Component{
    render(){
        return(
            <div className='condiv'>
                <h1 className="subtopic">Contact Me</h1>
                <a href='https://ouzazu001@gmail.com'><h3>Email : ouzazu001@gmail.com</h3></a>
                <a href='https://www.facebook.com/au.ou.31'><h3>Facebook : Ouzazu Ou</h3></a>
                <a href='https://twitter.com/ouzazu001'><h3>Twitter : @ouzazu001</h3></a>
                <Social/>

            </div>
        );
    }
}

export default Contact;