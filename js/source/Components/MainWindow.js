/**
 * Created by TH on 2018-05-21.
 */

import React from 'react';
import MainButtonWindow from './MainButtonWindow';
import BuffWindow from './BuffWindow';
import CharacterWindow from './CharacterWindow';
import ItemWindow from './ItemWindow';
import ShopWindow from './ShopWindow';
import { fluxStore } from '../flux/Store.js';
import CharacterModel from '../../../models/CharacterModel'
import ItemModel from '../../../models/ItemModel'
import ShopModel from '../../../models/ShopModel'


export default class MainWindow extends React.Component{

    constructor(props){
        super(props);
        this.state={
            windowState : 'main'
        };
    }

    componentDidMount(){
        this.modelCreate()
    }

    componentWillUnmount(){

    }

    modelCreate(){
        fluxStore.setFlux('CharacterModel',new CharacterModel(fluxStore))
        fluxStore.setFlux('ItemModel',new ItemModel(fluxStore))
        fluxStore.setFlux('ShopModel',new ShopModel(fluxStore))
    }
    componentWillUnMount(){
    }

    windowStateChangeByButton(ClickButton,subtype){
        this.setState({
            windowState : ClickButton,
        })
        fluxStore.setFlux('ApiSubWindowView',subtype)
    }

    getWindowView(windowState){
        let windowView
        switch(windowState){
            case 'buff' : windowView = <BuffWindow ButtonClick={this.windowStateChangeByButton.bind(this)}/>; break;
            case 'character' : windowView = <CharacterWindow ButtonClick={this.windowStateChangeByButton.bind(this)}/>; break;
            case 'item' : windowView = <ItemWindow ButtonClick={this.windowStateChangeByButton.bind(this)}/>; break;
            case 'shop' : windowView = <ShopWindow ButtonClick={this.windowStateChangeByButton.bind(this)}/>; break;
        }
        return windowView;
    }

    render(){
        return(
            <div className="MainWindowContainer">
            
            {this.state.windowState === 'main'
                ?<MainButtonWindow ButtonClick={this.windowStateChangeByButton.bind(this)}/>
                :this.getWindowView(this.state.windowState)
            }
            
            </div>
        )
    }
} 