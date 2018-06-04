import React from 'react';
import Logo from './BuffPage/Logo.js';
import Content from './BuffPage/Content.js';
import Copyright from './BuffPage/Copyright.js';
import Warning from './BuffPage/Warning.js';

export default class BuffWindow extends React.Component{


    ButtonClick(type){
        this.props.ButtonClick(type);
    }

    render(){
        return(
            <div className="BuffWindowContainer">
                <div className= "AllContentsObjContainer">
                    <div className="LogoObjContainer">
                        <Logo/>
                    </div>
                    <div className="ContentObjContainer">
                        <Content/>
                    </div>
                    <div className="CopyrightObjContainer">
                        <Copyright />
                    </div>
                </div>
                <div className="WarningObjContainer">
                    <Warning/>
                    <div className="WindowBackIcon" onClick={this.ButtonClick.bind(this,"main")}>
                        <img src="./images/home.png"/>
                    </div>
                </div>
            </div>
        )
    }
} 