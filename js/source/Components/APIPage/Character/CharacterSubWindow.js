/**
 * Created by TH on 2018-05-21.
 */

import React from 'react';
import { fluxStore } from '../../../flux/Store';
import CharacterEquipView from './CharacterEquipView';
import CharacterStatusView from './CharacterStatusView';


export default class CharacterSubWindow extends React.Component{

    constructor(props){
        super(props);

        this.state={
        }
    }

    componentDidMount(){

    }

    componentWillUnmount(){

    }

    getSubWindow(type){
        let SubWindow = '';
        switch(type){            
            case "status" : SubWindow = <CharacterStatusView 
                key={this.props.data.characterId} data={this.props.data} />; break;
            case "equip" : SubWindow = <CharacterEquipView
                key={this.props.data.characterId} data={this.props.data} />; break;
        }
        return SubWindow;
    }

    render(){
        console.log("subwindow Render Props subWindowState", this.props.SubWindowState)
        return(
            <div className="CharacterSubWindow">
                {this.getSubWindow(this.props.SubWindowState)}
            </div>
        )
    }
} 