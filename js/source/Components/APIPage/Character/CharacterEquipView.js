/**
 * Created by TH on 2018-05-21.
 */

import React from 'react';
import { fluxStore } from '../../../flux/Store';

export default class CharacterEquipView extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: this.props.data,
            reactComp: [],
        }
    }

    componentDidMount() {
        this.makeTable(this.props.data.equipment);
    }

    componentWillUnmount() {

    }

    makeTable(data) {
        let tempReactComp = [];
        data.map((CurrentValue, idx) => {
            tempReactComp.push(
                <tr>
                    <th> {CurrentValue.slotName} </th>
                    <th> <img src={`https://img-api.neople.co.kr/df/items/${CurrentValue.itemId}`} /> </th>
                    <th> {CurrentValue.itemName} </th>

                    {CurrentValue.amplificationName === null?
                        <th> + {CurrentValue.reinforce} 강화</th>
                        :
                        <th className="ampli"> {CurrentValue.amplificationName} <br /> + {CurrentValue.reinforce} 증폭</th>
                    }
                </tr>
            )
        })
        this.setState({
            reactComp: tempReactComp
        })
    }

    render() {
        console.log("EquipView Render data :", this.state.data)
        return (
            <div className="CharacterEquipView">
                <div className="TextEquip">
                    <table className="EquipTable">
                        <thead>
                            <tr>
                                <th className="slotName"> 장착부위 </th>
                                <th className="equipImg"> 이미지 </th>
                                <th className="equipName"> 이름 </th>
                                <th className="amplificationName"> 강화 / 증폭 </th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.reactComp}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
} 