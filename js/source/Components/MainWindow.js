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
            case 'buff' : windowView = <BuffWindow />; break;
            case 'character' : windowView = <CharacterWindow />; break;
            case 'item' : windowView = <ItemWindow/>; break;
            case 'shop' : windowView = <ShopWindow/>; break;
        }
        return windowView;
    }

    HomeButtonClick(){
        this.setState({
            windowState : 'main'
        })

        fluxStore.setFlux('ApiWindowView',"select");
        fluxStore.setFlux('ApiSubWindowView','');
        fluxStore.setFlux('ApiSeleteData',[]);
        fluxStore.setFlux('characterParams',{});

    }

    render(){
        return(
            <div className="MainWindowContainer">
            
            {this.state.windowState === 'main'
                ?<MainButtonWindow ButtonClick={this.windowStateChangeByButton.bind(this)}/>
                :this.getWindowView(this.state.windowState)
            }
                 {this.state.windowState !== 'main'?
                    <div className="WindowBackIcon" onClick={this.HomeButtonClick.bind(this)}>
                        <img src="./images/home.png"/>
                    </div>
                :null}
            </div>
        )
    }
} 