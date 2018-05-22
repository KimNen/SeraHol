import React from 'react';

export default class MainButtonWindow extends React.Component{

    constructor(props){
        super(props);
    }

    ButtonClick(type){
        this.props.ButtonClick(type);
    }

    render(){
        return(
            <div className="MainButtonWindowContainer">
                <button onClick={this.ButtonClick.bind(this,"buff")}>
                    버프력 계산기
                </button>
                <button onClick={this.ButtonClick.bind(this,"api")} >
                    API 페이지
                </button>
            </div>
        )
    }
} 