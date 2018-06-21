import React from 'react';
import {Button} from 'react-bootstrap'

export default class MainButtonWindow extends React.Component{

    constructor(props){
        super(props);
    }

    ButtonClick(type, subtype=''){
        this.props.ButtonClick(type, subtype);
    }

    render(){
        return(
            <div className="MainButtonWindowContainer">
                <div className="LogoContainer">
                    {/* <img className="DNFLogo" src="./images/DNF.ico"/> */}
                    <a href="http://developers.neople.co.kr" target="_blank">
                        <img className="DevelLogo" src="./images/NeopleOpenAPI.png" alt="Neople 오픈 API" /> 
                    </a>
                </div>
                <div className="ButtonContainer">
                    <Button bsSize="large" block bsStyle="primary" onClick={this.ButtonClick.bind(this,"buff")}>
                        버프력 계산기
                    </Button>
                    <Button bsSize="large" block bsStyle="primary" onClick={this.ButtonClick.bind(this,"character",'CharacterSearch')} >
                        캐릭터 검색
                    </Button>
                    {/* <button className="ShopButton" onClick={this.ButtonClick.bind(this,"shop",'ShopSearch')} >
                        경매장
                    </button>
                    <button className="ItemButton" onClick={this.ButtonClick.bind(this,"item",'ItemSearch')} >
                        장비사전
                    </button> */}
                </div>
            </div>
        )
    }
} 