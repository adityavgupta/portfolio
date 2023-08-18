import React, { Component } from 'react';
import Widecard from '../components/Widecard/Widecard';

class Education extends Component {
    render() {
        return(
            <div className="condiv">
                <h1 className="subtopic">My Education</h1>
                <hr/>
                <Widecard name="umich" title="M.S. Signal and Image Processing and Machine Learning (EECS)" where="University of Michigan Ann-Arbor" from="August 2021" to="April 2023" />
                <Widecard name="uiuc" title="B.S. Computer Engineering" where="University of Illinois at Urbana-Champaign" from="August 2017" to="May 2021"/>
            </div>
            
        )
    }
}
export default Education;