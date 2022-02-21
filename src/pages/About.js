import React, { Component } from 'react';
import dukegraden from '../img/Duke_gardens.jpg';
import cherry_blossoms from '../img/Cherryblossoms.jpg'

class About extends Component {
render() {
        return (
            <div className="condiv_about">
                <div className="about_sub">
                    <h1>Hey there, here's a little something about me :)</h1>
                    <br></br>
                    <h2>Where am I right now?</h2>
                    <p>I am studying at University of Michigan Ann-Arbor as a grad student in Signal 
                        & Image Processing and Machine Learning (ECE). I completed my undergrad in Computer Engineering 
                        from University of Illinois at Urbana-Champaign. 
                    </p>
                    <p>Update January '22: I started working as a Software Engineering Intern for Siemens Digital Software Industries on the
                        NX CAD software's freeform modeling team. I am working there part time till May, and will work full-time
                        during summer!
                    </p>
                    <br></br>
                    <h2>What motivates me?</h2>
                    <p>Mostly new “tech” things that interest me. I like to read, listen and talk about new 
                        technologies being released which in turn shape where my current interests lie. 
                        I tend to pursue such things. Right now I am most interested in the Computer Vision and 
                        Machine Learning industry. (Wink Wink Google’s new tensor chips)
                    </p>
                    <br></br>
                    <h2>What other interests do I have?</h2>
                    <p>On the side I like to do photography. Since grad school started, I have been meaning to 
                        get into climbing and taking out my camera for a spin. On the right you can see my two favorite photos.
                        You can find more on my instagram!
                        Other interests include traveling, origami and playing video games.
                    </p>
                </div>
                <div className="about_sub">
                    <div>
                        <img src={dukegraden} className="dukegardens" alt="Duke Gardens"></img>
                    </div>
                    <div>
                    <img src={cherry_blossoms} className="cherryblossoms" alt="Cherry blossoms"></img>
                    </div>
                </div>
            </div>
        )
    }
}
export default About;
