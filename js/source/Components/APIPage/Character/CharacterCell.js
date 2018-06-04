/**
 * Created by TH on 2018-05-21.
 */

import React from 'react';
import { fluxStore } from '../../../flux/Store';


export default class CharacterCell extends React.Component{

    constructor(props){
        super(props);

        this.state={
        }
        console.log("CharacterCell",this.props)
    }

    componentDidMount(){
    }

    componentWillUnmount(){

    }

    CellClick(){

        let params = {
            server : this.props.server,
            characterId : this.props.data.characterId,
        }
        fluxStore.setFlux('characterViewParams',params);
        fluxStore.setFlux('ApiSubWindowView',"CharacterView");

    }

    render(){
        return(
            <div className="CharacterCell" onClick={this.CellClick.bind(this)}>
                <div className="CharacterImg">
                    <img src={`http://img-api.neople.co.kr/df/servers/${this.props.server}/characters/${this.props.data.characterId}?zoom=${3}`}/>
                </div>
                <div className="CharacherNick">
                    {this.props.data.characterName}
                </div>
                <div className="CharacherJob">
                    {this.props.data.jobGrowName}
                </div>

            </div>
        )
    }
} 