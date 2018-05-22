import React from 'react';
import {fluxStore} from '../flux/Store.js';

import SubOption from './SubOption.js';
import SeraCalc from './SeraCalc.js';
import SeraSubOption from './SeraSubOption.js';

export default class SeraStat extends React.Component{

    constructor(props){
        super(props);

        this.state={

            sk2st : 2000,
            sk3st : 2000,

            sk2lv : fluxStore.getFlux().SeraLevel[2],
            sk3lv : fluxStore.getFlux().SeraLevel[3],

        }

    }

    componentDidMount(){
        fluxStore.addListener('SeraLevel',()=>{
            this.setState({
                sk2lv : fluxStore.getFlux().SeraLevel[2],
                sk3lv : fluxStore.getFlux().SeraLevel[3],
            })
        })
    }

    componentWillUnmount(){
        fluxStore.addListener('SeraLevel',()=>{
            this.setState({
                sk2lv : fluxStore.getFlux().SeraLevel[2],
                sk3lv : fluxStore.getFlux().SeraLevel[3],
            })
        })
    }


    sk2_inputChange(e){
        this.setState({
            sk2st : e.target.value
        })
    }
    sk3_inputChange(e){
        this.setState({
            sk3st : e.target.value
        })
    }

    skLvPlus(idx){
        let level = fluxStore.getFlux().SeraLevel;
        level[idx] = level[idx]+1;
        fluxStore.setFlux('SeraLevel',level);
    }

    skLvMinus(idx){
        let level = fluxStore.getFlux().SeraLevel;
        level[idx] = level[idx]-1;
        fluxStore.setFlux('SeraLevel',level);
    }

    CalcButtonClick(){
        let Calc = fluxStore.getFlux().CalcState;
        let {sk2st, sk3st} = this.state
        let tmpStat = {2:parseInt(sk2st),3:parseInt(sk3st)};

        fluxStore.setFlux('SeraStat',tmpStat);

        SeraCalc.sk2calcul();
        SeraCalc.sk3calcul();

        fluxStore.setFlux('CalcState',!Calc);
    }

    render(){
        let {sk2st,sk3st,sk2lv,sk3lv} = this.state

        return(

        <div className="StatContainer">
            <br/>
            <div className="SkillContainer">
                <div className="Sk2NameContainer">
                    용맹의 축복
                </div>
                <div className="Sk2InputContainer">
                    <input type="text" size="10" onChange={this.sk2_inputChange.bind(this)} value={sk2st}/>
                </div>
                <div className="Sk2LvContainer">
                    <input type="text" size="2" value={sk2lv}/>
                    <button onClick={this.skLvPlus.bind(this,"2")}>+</button>
                    <button onClick={this.skLvMinus.bind(this,"2")}>-</button>
                </div>
            </div>
            <br/>
            <div className="SkillContainer">
                <div className="Sk3NameContainer">
                    크오빅
                </div>
                <div className="Sk3InputContainer">
                    <input type="text" size="10" onChange={this.sk3_inputChange.bind(this)} value={sk3st}/>
                </div>
                <div className="Sk3LvContainer">
                    <input type="text" size="2" value={sk3lv}/>
                    <button onClick={this.skLvPlus.bind(this,"3")}>+</button>
                    <button onClick={this.skLvMinus.bind(this,"3")}>-</button>
                </div>
            </div>
            <hr/>
            <div className="SubOptionObjContainer">
                <SeraSubOption/>
            </div>

            <button className="Calculator" onClick={this.CalcButtonClick.bind(this)}>계산</button>


        </div>
        )
    }
} 