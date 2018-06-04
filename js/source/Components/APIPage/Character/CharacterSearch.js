/**
 * Created by TH on 2018-05-21.
 */

import React from 'react';
import { fluxStore } from '../../../flux/Store';

export default class CharacterSelect extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            server: 'cain',
            length: 10,
            characterId: "",
        }

    }

    serverChange(event) {
        this.setState({
            server: event.target.value
        })
    }

    lengthChange(event) {
        this.setState({
            length: event.target.value
        })
    }

    characterIdChange(event) {
        this.setState({
            characterId: event.target.value
        })
    }

    submitButtonClick(type) {
        fluxStore.setFlux('ApiSubWindowView', type);
        let { server, length, characterId } = this.state
        let params = {
            server: server,
            length: length,
            characterId: characterId,
        }
        console.log("submitButtonClick params", params)
        fluxStore.setFlux('characterParams', params);
        console.log("submitButtonClick characterParams", fluxStore.getFlux().characterParams)
    }

    render() {
        return (
            <div className="CharacterSelect">


                <div className="CharacterSearch">
                    <label> 캐릭터 검색 </label>
                    <select name='server' onChange={this.serverChange.bind(this)} value={this.state.server}>
                        <option value="cain">카인</option>
                        <option value="diregie">디레지에</option>
                        <option value="siroco">시로코</option>
                        <option value="prey">프레이</option>
                        <option value="anton">안톤</option>
                        <option value="casillas">카시야스</option>
                        <option value="hilder">힐더</option>
                        <option value="bakal">바칼</option>
                    </select>
                    <select name='length' onChange={this.lengthChange.bind(this)} value={this.state.length}>
                        <option value="10">10</option>
                        <option value="30">30</option>
                        <option value="50">50</option>
                    </select>
                    <input type="text" placeholder="캐릭터 이름" onChange={this.characterIdChange.bind(this)} value={this.state.characterId} />
                    <button onClick={this.submitButtonClick.bind(this, "CharacterGrid")}> 검색 </button>
                </div>
            </div>
        )
    }
} 