import React from 'react';
import {fluxStore} from '../flux/Store.js';

export default class Result extends React.Component{

    constructor(props){
        super(props);
        
        this.state={
            StatType : fluxStore.getFlux().StatType,
            sk1AttResult : fluxStore.getFlux().StrWisWeaponResult, 
            sk1StatResult : fluxStore.getFlux().StrWisStatResult, 
            sk2AttResult : fluxStore.getFlux().GloryWeaponResult, 
            sk2StatResult : fluxStore.getFlux().GloryStatResult, 
            sk3Result : fluxStore.getFlux().ApoStatResult, 
        }

    }

    componentDidMount(){
        fluxStore.addListener('CalcState', ()=>{
            this.setState({
                sk1AttResult : fluxStore.getFlux().StrWisWeaponResult, 
                sk1StatResult : fluxStore.getFlux().StrWisStatResult, 
                sk2AttResult : fluxStore.getFlux().GloryWeaponResult, 
                sk2StatResult : fluxStore.getFlux().GloryStatResult, 
                sk3Result : fluxStore.getFlux().ApoStatResult, 
            })
        })
    }

    componentWillUnmount(){
        fluxStore.addListener('CalcState',()=>{
            this.setState({
                sk1AttResult : fluxStore.getFlux().StrWisWeaponResult, 
                sk1StatResult : fluxStore.getFlux().StrWisStatResult, 
                sk2AttResult : fluxStore.getFlux().GloryWeaponResult, 
                sk2StatResult : fluxStore.getFlux().GloryStatResult, 
                sk3Result : fluxStore.getFlux().ApoStatResult, 
            })
        })
    }


    render(){
        let {sk1AttResult, sk1StatResult, sk2AttResult, sk2StatResult, sk3Result} = this.state
        console.log("Result render",sk1AttResult, sk1StatResult, sk2AttResult, sk2StatResult, sk3Result);
        return(
            <div className="ResultContainer">
                스킹/지축<br/>
                스탯 <input type="text" size="10" readOnly value={Math.round(sk1StatResult*10)/10}/>
                공격력 <input type="text" size="10" readOnly value={Math.round(sk1AttResult*10)/10}/>
                <br/>
                영광의 축복<br/>
                스탯 <input type="text" size="10" readOnly value={Math.round(sk2StatResult*10)/10}/>
                독립공격력 <input type="text" size="10" readOnly value={Math.round(sk2AttResult*10)/10}/>
                <br/>
                아포칼립스<br/>
                스탯 <input type="text" size="10" readOnly value={Math.round(sk3Result*10)/10}/>
            </div>
        )
    }
} 