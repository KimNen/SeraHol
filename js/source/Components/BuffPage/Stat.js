import React from 'react';
import { fluxStore } from '../../flux/Store.js';

import SubOption from './SubOption.js';
import Calculator from './Calculator.js';

export default class MainWindow extends React.Component{

    constructor(props){
        super(props);
        
        this.state={

            sk1st : 2000,
            sk2st : 2000,
            sk3st : 2000,

            sk1lv : fluxStore.getFlux().Level[1],
            sk2lv : fluxStore.getFlux().Level[2],
            sk3lv : fluxStore.getFlux().Level[3],

        }

        fluxStore.addListener('Level',()=>{
            this.setState({
                sk1lv : fluxStore.getFlux().Level[1],
                sk2lv : fluxStore.getFlux().Level[2],
                sk3lv : fluxStore.getFlux().Level[3],
            })
        })
    }

    sk1_inputChange(e){
        this.setState({
            sk1st : e.target.value
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
        let level = fluxStore.getFlux().Level;
        level[idx] = level[idx]+1;
        fluxStore.setLevel(level);
    }

    skLvMinus(idx){
        let level = fluxStore.getFlux().Level;
        level[idx] = level[idx]-1;
        fluxStore.setLevel(level);
    }

    CalcButtonClick(){
        let Calc = fluxStore.getFlux().CalcState;
        let {sk1st, sk2st, sk3st} = this.state
        let tmpStat = {1:parseInt(sk1st),2:parseInt(sk2st),3:parseInt(sk3st)};

        fluxStore.setFlux('Stat',tmpStat);

        Calculator.sk1calcul();
        Calculator.sk2calcul();
        Calculator.sk3calcul();

        fluxStore.setFlux('CalcState',!Calc);
    }

    StatypeChange(StatType){
        fluxStore.setFlux('StatType',StatType);
    }


    render(){
        let {sk1st,sk2st,sk3st,sk1lv,sk2lv,sk3lv} = this.state

        return(

        <div className="StatContainer">
            <div className="StatTypeContainer">
                <div className="Sk1NameContainer">
                    체력 / 정신력
                </div>
                <div className="Sk1InputContainer">
                    <label>체력</label>
                    <input type="radio" name="StatType" defaultChecked="true"
                        onClick={this.StatypeChange.bind(this,'H')}/>
                    <label>정신력</label>
                    <input type="radio" name="StatType"
                        onClick={this.StatypeChange.bind(this,'M')}/>
                </div>
            </div> 
            <hr/>
            <div className="SkillContainer">
                <div className="Sk1NameContainer">
                    스킹/지축
                </div>
                <div className="Sk1InputContainer">
                    <input type="text" size="10" onChange={this.sk1_inputChange.bind(this)} value={sk1st}/>
                </div>
                <div className="Sk1LvContainer">
                    <input type="text" size="2" value={sk1lv}/>
                    <button onClick={this.skLvPlus.bind(this,"1")}>+</button>
                    <button onClick={this.skLvMinus.bind(this,"1")}>-</button>
                </div>
            </div> 
            <br/>
            <div className="SkillContainer">
                <div className="Sk2NameContainer">
                    영광의 축복
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
                    아포칼립스
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
                <SubOption/>
            </div>

            <button className="Calculator" onClick={this.CalcButtonClick.bind(this)}>계산</button>


        </div>
        )
    }
} 