import React from 'react';
import {fluxStore} from '../flux/Store.js';

export default class JobSelect extends React.Component{

    constructor(props){
        super(props);
    }

    JobSelectedChange(job){
        fluxStore.setFlux('Job',job);
    }

    render(){
        return(
        <div className="JobSelectContainer">
            <div className="egi">
                    <input type="radio" name="job" className="PhotoSelectButtonDiv"
                        onClick={this.JobSelectedChange.bind(this,"Sera")}/>
                    <img src="./images/Serafim.png" width="100px" height="100px"/>
                </div>
                <div className="changseong">
                    <input type="radio" name="job" className="PhotoSelectButtonDiv"
                        defaultChecked="true"
                        onClick={this.JobSelectedChange.bind(this,"Holy")}/>
                    <img src="./images/HolyOder.png" width="100px" height="100px"/>
                </div>
        </div>
        )
    }
} 