/**
 * Created by TH on 2018-05-21.
 */

import React from 'react';
import { fluxStore } from '../../../flux/Store';


export default class CharacterMainWindow extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            characterViewResponse: fluxStore.getFlux().CharacterDetailData,
        }
        this.View = fluxStore.getFlux().characterViewParams;
        this.CharacterInfoChangeFunc = this.CharacterInfoChange.bind(this);
    }

    componentDidMount() {
        fluxStore.getFlux().CharacterModel.getCharacterByCharacterId(this.View.server, this.View.characterId);
        fluxStore.addListener('CharacterDetailData', this.CharacterInfoChangeFunc);
    }

    componentWillUnmount() {
        fluxStore.removeListener('CharacterDetailData', this.CharacterInfoChangeFunc);
    }

    serverTransfor(server){
        let serverName = {
            cain: '카인',
            diregie:'디레지에',
            siroco:'시로코',
            prey:'프레이',
            anton:'안톤',
            casillas:'카시야스',
            hilder:'힐더',
            bakal:'바칼'};

        return serverName[server];

    }

    CharacterInfoChange() {
        this.setState({
            characterViewResponse: fluxStore.getFlux().CharacterDetailData,
        })
    }

    render() {
        return (
            <div className="CharacterMainWindow">
                <div className="currentImg">
                    <img src={`http://img-api.neople.co.kr/df/servers/${this.View.server}/characters/${this.View.characterId}?zoom=${3}`} />
                </div>
                <div className="CharacterInfo">
                    <div className="LevelAndJob">
                            Lv.{this.state.characterViewResponse.level}
                            {"   "}  
                            {this.state.characterViewResponse.jobGrowName}
                    </div>
                    <div className="Server">
                        {this.serverTransfor(this.props.serverValue)}
                    </div>
                    <div className="Name">
                        {this.state.characterViewResponse.characterName}
                    </div>
                </div>
            </div>
        )
    }
} 