import React from 'react';
import {fluxStore} from '../flux/Store.js';

export default class SubOption extends React.Component{

    constructor(props){
        super(props);
        this.state={
        }

    }

    Glory_stChange(option){
        fluxStore.setFlux('Sk2ItemOption',option);
        console.log('Glory_stChange',option);
    }

    StrWis_MainstChange(option){
        fluxStore.setFlux('Sk1MainItemOption',option);
        console.log('StrWis_MainstChange',option);

    }

    StrWis_SubstChange(option){
        fluxStore.setFlux('Sk1SubItemOption',option);
        console.log('StrWis_SubstChange',option);
    }

    render(){
        return(
        <div className="SubOption">
            <div className="GloryOptionContainer">
                <label>영축 관련 옵션</label>
                <br/>
                <label>바우 9셋</label>
                <input type="radio" name="Glory" defaultChecked="true"
                    onClick={this.Glory_stChange.bind(this,'b')}/>
                <label>탈바우용 체크버튼</label>
                <input type="radio" name="Glory"
                    onClick={this.Glory_stChange.bind(this,'n')}/>
            </div>
            <br/>
            <div className="StrWisOptionContainer">
                <label>스킹/지축 관련 옵션</label>
                <br/>
                <label>바우 6셋</label>
                <input type="radio" name="StrMain" defaultChecked="true"
                    onClick={this.StrWis_MainstChange.bind(this,"b6")}/>
                <label>사일 6셋</label>
                <input type="radio" name="StrMain" onClick={this.StrWis_MainstChange.bind(this,"s6")}/>
                <label>6셋 없음</label>
                <input type="radio" name="StrMain" onClick={this.StrWis_MainstChange.bind(this,"n")}/>
                <br/>
                <label>바우 3셋</label>
                <input type="radio" name="StrSub" onClick={this.StrWis_SubstChange.bind(this,'b3')}/>
                <label>사일 3셋</label>
                <input type="radio" name="StrSub" defaultChecked="true"
                    onClick={this.StrWis_SubstChange.bind(this,'s3')}/>
                <label>3셋 없음</label>
                <input type="radio" name="StrSub" onClick={this.StrWis_SubstChange.bind(this,'n')}/>
            </div>
        </div>
        )
    }
} 