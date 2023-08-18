import React,  {Component} from 'react';
import ReactTypingEffect from 'react-typing-effect';
import ProfilePic from '../img/Home_avg.jpeg';
import Social from './Social';

class Home extends Component {
    render() {
        return (
            
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
                        <h2> Researcher </h2>
                        <h2> ML Enthusiast </h2>
                        {/* <h1 className='HomeText'>Hi! I am Aditya</h1> */}
                        <hr/>
                        <h1>Let's stay connected!</h1>
                        <h3>Ph: +1 (217)904-9045</h3>
                        <h3>Email: gupta.adityav@gmail.com</h3>
                        <hr/>
                        <Social />
                    </div> 
                </div>
        )
    }
}

export default Home;