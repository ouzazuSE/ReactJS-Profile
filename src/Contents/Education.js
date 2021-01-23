import { Component } from 'react';
import Widecard from '../Components/Widecard';

class Education extends Component{
    render(){
        return(
            <div className='condiv'>
                <h1 className="subtopic">My Education</h1>
                <Widecard title="Software Engineering" where="The University of Phayao" from="2019" to="Present"/>
            </div>
        );
    }
}

export default Education;