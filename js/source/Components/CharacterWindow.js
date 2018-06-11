/**
 * Created by TH on 2018-05-21.
 */

import React from 'react';
import CharacterGrid from './APIPage/Character/CharacterGrid';
import CharacterSearch from './APIPage/Character/CharacterSearch';
import CharacterView from './APIPage/Character/CharacterView';
import { fluxStore } from '../flux/Store';
export default class APIWindow extends React.Component{

    constructor(props){
        super(props);

        this.state={
            ApiWindowView : fluxStore.getFlux().ApiWindowView,
            ApiSubWindowView : fluxStore.getFlux().ApiSubWindowView,
            characterParams : fluxStore.getFlux().characterParams,
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
            characterParams : fluxStore.getFlux().characterParams,
        })
    }

    getSearchView(view){

        let viewItem;
        switch(view){
            case "CharacterGrid": viewItem = <CharacterGrid serverValue={this.state.characterParams.server} key={this.state.characterId}
                                            characterId={this.state.characterParams.characterId} limit={this.state.characterParams.length}/>; break;
            case "CharacterSearch": viewItem = <CharacterSearch />; break;
            case "CharacterView": viewItem = <CharacterView serverValue={this.state.characterParams.server} 
                                                key={this.state.ApiWindowView + this.state.ApiSubWindowView}/>; break;
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