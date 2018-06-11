/**
 * Created by TH on 2018-05-21.
 */

import React from 'react';
import { fluxStore } from '../../../flux/Store';

export default class CharacterEquipView extends React.Component{

    constructor(props){
        super(props);

        this.state={
            data : []
        }
    }

    componentDidMount(){
    }

    componentWillUnmount(){

    }

    componentWillReceiveProps(nextProps){
        console.log("CharacterEquipView",nextProps)
        if(this.state.data !== nextProps.data){
            this.setState({
                data : nextProps.data
            })
        }
    }


    render(){
        console.log("EquipView Render data :", this.state.data)
        return(
            <div className="CharacterEquipView">
                장비관련 window
            </div>
        )
    }
} 