/**
 * Created by TH on 2018-05-21.
 */

import React from 'react';
import { fluxStore } from '../../../flux/Store';
import CharacterEquipView from './CharacterEquipView';
import CharacterStatusView from './CharacterStatusView';


export default class CharacterSubWindow extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            SubWindowState: fluxStore.getFlux().SubWindowState,
            CharacterEquipData: fluxStore.getFlux().CharacterEquipData,
            CharacterStatusData: fluxStore.getFlux().CharacterStatusData,
        }

        this.View = fluxStore.getFlux().characterViewParams;
        this.SubWindowStateChangeFunc = this.SubWindowStateChange.bind(this);
    }

    componentDidMount() {
        this.dataChangeByState()
        fluxStore.addListener('SubWindowState', this.SubWindowStateChangeFunc);
    }

    componentWillUnmount() {
        fluxStore.removeListener('SubWindowState', this.SubWindowStateChangeFunc);
    }

    dataChangeByState() {        
        fluxStore.getFlux().CharacterModel.getCharacterInfoByCharacterId(this.View.server, this.View.characterId);
    }

    SubWindowStateChange() {
        this.setState({
            SubWindowState: fluxStore.getFlux().SubWindowState,
            CharacterEquipData: fluxStore.getFlux().CharacterEquipData,
            CharacterStatusData: fluxStore.getFlux().CharacterStatusData,
        })
    }

    getSubWindow(type) {
        let SubWindow = '';
        switch (type) {
            case "status": SubWindow = <CharacterStatusView  key={Math.random()} 
                characterData = {this.View} statusData = {this.state.CharacterStatusData.status} 
                equipData={this.state.CharacterEquipData}  />; break;
            case "equip": SubWindow = <CharacterEquipView
                key={this.View.characterId} data={this.state.CharacterEquipData} />; break;
            //더 많은 SubWindow를 사용하려면 이 하단에 새로운 윈도우 컴포넌트와 Props를 추가 한다.

        }
        return SubWindow;
    }

    SubwindowToggle(SubWindow) {
        fluxStore.setFlux('SubWindowState', SubWindow);
    }

    render() {
        console.log("subwindow Render Props subWindowState", this.state)
        return (
            <div className="CharacterSubWindow">
                <div className="StatusAndEquipToggle">
                    <input type="radio" name="job" defaultChecked="true" 
                        onClick={this.SubwindowToggle.bind(this, "status")} />
                    <label width="100px" height="30px">스탯 & 장비창</label>
                    <input type="radio" name="job" 
                        onClick={this.SubwindowToggle.bind(this, "equip")} />
                    <label width="100px" height="30px"> 세부 장비창</label>
                </div>
                {this.getSubWindow(this.state.SubWindowState)}
            </div>
        )
    }
} 