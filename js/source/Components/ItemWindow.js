/**
 * Created by TH on 2018-05-21.
 */

import React from 'react';
import { fluxStore } from '../flux/Store';
export default class APIWindow extends React.Component{

    constructor(props){
        super(props);

        this.state={
            ApiWindowView : fluxStore.getFlux().ApiWindowView,
            ApiSubWindowView : fluxStore.getFlux().ApiSubWindowView,
            item : fluxStore.getFlux().item,
        }

        this.ApiWindowViewChangeFunc = this.ApiWindowViewChange.bind(this);
    }

    componentDidMount(){
        fluxStore.addListener('ApiWindowView',this.ApiWindowViewChangeFunc)
        fluxStore.addListener('ApiSubWindowView',this.ApiWindowViewChangeFunc)
    }

    componentWillUnmount(){
        fluxStore.removeListener('ApiWindowView',this.ApiWindowViewChangeFunc)
        fluxStore.removeListener('ApiSubWindowView',this.ApiWindowViewChangeFunc)
    }

    ApiWindowViewChange(){
        this.setState({
            ApiWindowView : fluxStore.getFlux().ApiWindowView,
            ApiSubWindowView : fluxStore.getFlux().ApiSubWindowView,
            item : fluxStore.getFlux().item,
        })
    }
    getSearchView(view){

        let viewItem;
        switch(view){
            case "ItemList": viewItem = <ItemList item = {this.state.item} key={this.state.item}/>; break;
            case "ItemSearch": viewItem = <ItemSearch item = {this.state.item} key={this.state.item}/>; break;
            case "ItemView": viewItem = <ItemView item = {this.state.item} key={this.state.item}/>; break;
        }

        return viewItem;
    }

    render(){
        return(
            <div className="APIWindow">
                <div className="ResultDiv">
                    {this.getSearchView(this.state.ApiSubWindowView)}
                </div>
            </div>
        )
    }
} 