/**
 * Created by TH on 2018-05-21.
 */

import React from 'react';
import { fluxStore } from '../../../flux/Store';

export default class CharacterStatusView extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: this.props.data,
            LeftDiv: [],
            RightDiv: [],
            reactComp: [],
        }
        console.log("StatusView constructor props :", this.props)
    }

    componentDidMount() {
        this.characterDivMake();
        this.statusTableMake(this.props.statusData)
    }

    componentWillUnmount() {

    }

    characterDivMake() {
        let tempLeftDiv = [], tempRightDiv = [];
        let tempSortArr = ['WEAPON', 'TITLE', 'SHOULDER', 'JACKET', 'PANTS', 'WAIST', 'SHOES', 'WRIST', 'AMULET', 'SUPPORT', 'RING', 'EARRING', 'MAGIC_STON'];
        let tempEquipData = [];

        for (let i = 0; i < tempSortArr.length; i++) {
            this.props.equipData.equipment.map(CurrentValue => {
                if (CurrentValue.slotId === tempSortArr[i]) {
                    tempEquipData.push(CurrentValue)
                }
            })
        }

        tempEquipData.map((CurrentValue, idx) => {
            if (CurrentValue.slotId === "JACKET" || CurrentValue.slotId === "SHOULDER" ||
                CurrentValue.slotId === "PANTS" || CurrentValue.slotId === "SHOES" ||
                CurrentValue.slotId === "WAIST") {
                tempLeftDiv.push(
                    <div className="itemCell">
                        <img src={`https://img-api.neople.co.kr/df/items/${CurrentValue.itemId}`} />
                    </div>
                )
            } else {
                tempRightDiv.push(
                    <div className="itemCell">
                        <img src={`https://img-api.neople.co.kr/df/items/${CurrentValue.itemId}`} />
                    </div>
                )
            }
        })

        this.setState({
            LeftDiv: tempLeftDiv,
            RightDiv: tempRightDiv,
        })

    }

    statusTableMake(data) {
        let tempReactComp = [];
        let tempSortArr = ['힘', '지능', '체력', '정신력', '물리 공격', '마법 공격', '독립 공격', '화속성 강화', '수속성 강화', '명속성 강화', '암속성 강화'];
        let tempStatusData = [];

        for (let i = 0; i < tempSortArr.length; i++) {
            data.map(CurrentValue => {
                if (CurrentValue.name === tempSortArr[i]) {
                    tempStatusData.push(CurrentValue)
                }
            })
        }

        tempStatusData.map((CurrentValue, idx) => {
            tempReactComp.push(
                <div className="statusBox">
                    <div className="StatusName">
                        {CurrentValue.name}
                    </div> 
                    <div className="StatusValue">
                        {CurrentValue.value}
                    </div>
                </div>
            )
        })

        this.setState({
            reactComp: tempReactComp
        })
    }

    render() {
        console.log("StatusView Render LeftDiv :", this.state.LeftDiv)
        console.log("StatusView Render RightDiv :", this.state.RightDiv)
        return (
            <div className="CharacterStatusView">
                <div className="PictureEquip">
                    <div className="equipLeft">
                        {this.state.LeftDiv}
                    </div>
                    <div className="CharacterDetail">
                        <img src={`https://img-api.neople.co.kr/df/servers/${this.props.characterData.server}/characters/${this.props.characterData.characterId}?zoom=<zoom>`} />
                    </div>
                    <div className="equipRight">
                        {this.state.RightDiv}
                    </div>
                </div>
                <div className="StatusPicture">
                    {this.state.reactComp}
                </div>
            </div>
        )
    }
} 