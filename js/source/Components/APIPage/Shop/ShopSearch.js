/**
 * Created by TH on 2018-05-21.
 */

import React from 'react';
import { fluxStore } from '../../flux/Store';

export default class ShopSelect extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            shop: '',
        }


    }

    ShopChange(event) {
        this.setState({
            shop: event.target.value
        })
    }

    submitButtonClick(type) {
        fluxStore.setFlux('ApiWindowView', type);
        let { server, length, item, shop, characterId } = this.state
        fluxStore.setFlux('shop', shop);
    }

    render() {
        return (
            <div className="ShopSelect">
                <div className="ShopSearch">
                    <label> 경매장 검색 </label>
                    <input type="text" placeholder="아이템 이름" onChange={this.ShopChange.bind(this)} value={this.state.shop} />
                    <button onClick={this.submitButtonClick.bind(this, "shop")}> 검색 </button>
                </div>
            </div>
        )
    }
} 