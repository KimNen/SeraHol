/**
 * Created by TH on 2018-05-21.
 */

import React from 'react';
import { fluxStore } from '../../../flux/Store';

export default class CharacterStatusView extends React.Component{

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
        console.log("CharacterStatusView",nextProps)
        if(this.state.data !== nextProps.data){
            this.setState({
                data : nextProps.data
            })
        }
    }


    render(){
        console.log("StatusView Render data :", this.state.data)
        return(
            <div className="CharacterStatusView">
                스탯 뷰 윈도우asfasdgagewagawt
            </div>
        )
    }
} 