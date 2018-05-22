import React from 'react';
import {fluxStore} from '../flux/Store.js';

export default class SeraSubOption extends React.Component{

    constructor(props){
        super(props);
        this.state={
        }

    }

    Aria_stChange(){
        let CurrentState = fluxStore.getFlux().Aria;
        fluxStore.setFlux('Aria',!CurrentState);
    }

    render(){
        return(
        <div className="SeraSubOption">
            <div className="GloryOptionContainer">
                <br/><br/>
                <label>용맹의 아리아</label>
                <input type="checkbox"
                    onClick={this.Aria_stChange.bind(this)}/>
            </div>
        </div>
        )
    }
} 