import React from 'react';
import MainButtonWindow from './MainButtonWindow';
import BuffWindow from './BuffWindow';
import APIWindow from './APIWindow';
import { fluxStore } from '../flux/Store.js';

export default class MainWindow extends React.Component{

    constructor(props){
        super(props);
        this.state={
            windowState : 'main'
        };
    }

    componentDidMount(){
    }

    componentWillUnMount(){
    }

    windowStateChangeByButton(ClickButton){
        this.setState({
            windowState : ClickButton,
        })
    }

    getWindowView(windowState){
        let windowView
        switch(windowState){
            case 'buff' : windowView = <BuffWindow/>; break;
            case 'api' : windowView = <APIWindow/>; break;
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