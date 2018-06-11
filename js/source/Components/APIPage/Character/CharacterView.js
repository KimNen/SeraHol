/**
 * Created by TH on 2018-05-21.
 */

import React from 'react';
import { fluxStore } from '../../../flux/Store';
import CharacterSubWindow from './CharacterSubWindow';
const PropsType = require('prop-types')


export default class CharacterView extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            SubWindowState: 'status',
            CharacterEquipData : fluxStore.getFlux().CharacterEquipData,
            CharacterStatusData : fluxStore.getFlux().CharacterStatusData,
            characterViewResponse: fluxStore.getFlux().CharacterDetailData,
        }
        this.View = fluxStore.getFlux().characterViewParams;
        this.CharacterInfoChangeFunc = this.CharacterInfoChange.bind(this);
    }

    componentDidMount() {
        // fluxStore.getFlux().CharacterModel._get_character_info_by_CharacterId(
        //     this.characterViewParams.server, this.characterViewParams.characterId
        // ).then((response1) => {
        //     fluxStore.getFlux().CharacterModel._get_character_equip_info_by_CharacterId(
        //         this.characterViewParams.server, this.characterViewParams.characterId
        //     ).then((response2) => {
        //         this.setState({
        //             characterViewResponse: response1,
        //             subWindowData : response2,
        //         })
        //     })
        // })

        fluxStore.getFlux().CharacterModel.getCharacterListByCharacterId(this.View.server, this.View.characterId);
        fluxStore.getFlux().CharacterModel.getCharacterEquipInfoByCharacterId(this.View.server, this.View.characterId);
        fluxStore.getFlux().CharacterModel.getCharacterStatusInfoByCharacterId(this.View.server, this.View.characterId);
        
        fluxStore.addListener('CharacterDetailData',this.CharacterInfoChangeFunc);
        fluxStore.addListener('CharacterEquipData',this.CharacterInfoChangeFunc);
        fluxStore.addListener('CharacterStatusData',this.CharacterInfoChangeFunc);
    }

    componentWillUnmount() {

        fluxStore.removeListener('CharacterDetailData',this.CharacterInfoChangeFunc);
        fluxStore.removeListener('CharacterEquipData',this.CharacterInfoChangeFunc);
        fluxStore.removeListener('CharacterStatusData',this.CharacterInfoChangeFunc);
    }

    CharacterInfoChange(){
        this.setState({
            CharacterEquipData : fluxStore.getFlux().CharacterEquipData,
            CharacterStatusData : fluxStore.getFlux().CharacterStatusData,
            characterViewResponse: fluxStore.getFlux().CharacterDetailData,
        })
    }

    render() {
        console.log("render() state : ", this.state);
        return (
            <div className="CharacterView">
                <div className="MainViewWindow">
                    <div className="currentImg">
                        <img src={`http://img-api.neople.co.kr/df/servers/${this.View.server}/characters/${this.View.characterId}?zoom=${3}`} />
                    </div>
                    <div className="LevelAndNickName">
                        Lv.{this.state.characterViewResponse.level}
                        {this.state.characterViewResponse.characterName}
                    </div>
                    <div className="Server">
                        {this.props.serverValue}
                    </div>
                    <div className="Job">
                        {this.state.characterViewResponse.jobName}
                    </div>
                </div>
                <div className="SubViewWindow">
                    <CharacterSubWindow key={this.state.SubWindowState} SubWindowState={this.state.SubWindowState}
                        data={this.state.SubWindowState="status"? this.state.CharacterStatusData :this.state.CharacterEquipData}   />
                </div>
            </div>
        )
    }
} 