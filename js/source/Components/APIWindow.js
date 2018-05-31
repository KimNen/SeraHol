/**
 * Created by TH on 2018-05-21.
 */

import React from 'react';
import APISelect from './APIPage/APISelect';
import CharacterGrid from './APIPage/Character/CharacterGrid';
import { fluxStore } from '../flux/Store';
export default class APIWindow extends React.Component{

    constructor(props){
        super(props);

        this.state={
            ApiWindowView : fluxStore.getFlux().ApiWindowView,
            characterParams : fluxStore.getFlux().characterParams,
            item : fluxStore.getFlux().item,
            shop : fluxStore.getFlux().shop,
        }

        this.ApiWindowViewChangeFunc = this.ApiWindowViewChange.bind(this);
    }

    componentDidMount(){
        fluxStore.addListener('ApiWindowView',this.ApiWindowViewChangeFunc)
    }

    componentWillUnmount(){

    }

    ApiWindowViewChange(){
        this.setState({
            ApiWindowView : fluxStore.getFlux().ApiWindowView,
            characterParams : fluxStore.getFlux().characterParams,
            item : fluxStore.getFlux().item,
            shop : fluxStore.getFlux().shop,
        })
    }

    getSearchView(view){

        let viewItem;
        switch(view){
            case "select" : viewItem =<APISelect/>; break;
            case "character": viewItem = <CharacterGrid serverValue={this.state.characterParams.server} key={this.state.characterId}
                                            characterId={this.state.characterParams.characterId} limit={this.state.characterParams.length}/>; break;
            case "item": viewItem = <ItemList item = {this.state.item} key={this.state.item}/>; break;
            case "shop": viewItem = <ShopList shop = {this.state.shop} key={this.state.shop} />; break;
        }

        return viewItem;
    }

    render(){
        return(
            <div className="APIWindow">
                <div className="ResultDiv">
                    {this.getSearchView(this.state.ApiWindowView)}
                </div>
            </div>
        )
    }
} 