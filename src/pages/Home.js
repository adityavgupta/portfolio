import React,  {Component} from 'react';
import ReactTypingEffect from 'react-typing-effect';
import ProfilePic from '../img/Aditya.jpeg';
import Social from './Social';

class Home extends Component {
    render() {
        return (
            <div>
                <div className='condiv_home'>
                <div className="child">
                    <img src={ProfilePic} className='ProfilePic' alt=""></img>
                </div>
                
                <div className="child">
                    <h1 className='HomeText'><ReactTypingEffect 
                        text={["Hi, I am Aditya."]}  
                        speed={100} 
                        eraseDelay={500000}
                    /></h1>
                    <hr />
                    <h2> Developer </h2>
                    <h2> Student </h2>
                    <h2> Researcher </h2>
                    <h2> ML Enthusiast </h2>
                    {/* <h1 className='HomeText'>Hi! I am Aditya</h1> */}
                    
                </div> 
            </div>
            <Social />
            </div>
            
            
        )
    }
}

export default Home;