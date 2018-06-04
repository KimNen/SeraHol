/**
 * Created by TH on 2018-05-21.
 */

import React from 'react';
import { fluxStore } from '../../../flux/Store';

export default class CharacterView extends React.Component{

    constructor(props){
        super(props);

        this.state={
        }

        this.characterViewParams = fluxStore.getFlux().characterViewParams;
    }

    componentDidMount(){
    }

    componentWillUnmount(){

    }

    render(){
        return(
            <div className="CharacterView">
                캐릭터 이미지와 상세정보가 보여질 창입니다.
            </div>
        )
    }
} 