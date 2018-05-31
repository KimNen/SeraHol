/**
 * Created by TH on 2018-05-21.
 */

import React from 'react';
import { fluxStore } from '../../flux/Store';

export default class APISelect extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            server: 'cain',
            length: 10,
            item: '',
            shop: '',
            characterId: "",
        }

        this.SubItem = '';

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

    ItemChange(event) {
        this.setState({
            item: event.target.value
        })
    }

    ShopChange(event) {
        this.setState({
            shop: event.target.value
        })
    }

    characterIdChange(event) {
        this.setState({
            characterId: event.target.value
        })
    }

    submitButtonClick(type){
        fluxStore.setFlux('ApiWindowView',type);
        let {server, length, item, shop, characterId }= this.state
        switch(type){
            case "character" : 
                let params = {
                    server : server,
                    length : length,
                    characterId : characterId,
                }
                console.log("submitButtonClick params",params)
                fluxStore.setFlux('characterParams',params);
                console.log("submitButtonClick characterParams",fluxStore.getFlux().characterParams)
                break;
            
            case 'item' : 
                fluxStore.setFlux('item', item);
                break;
            
            case "shop" : 
                fluxStore.setFlux('shop',shop);
                break;
        }
    }

    render() {
        return (
            <div className="APISelect">


                <div className="CharacterSearch">
                    <label> 캐릭터 검색 </label>
                    <select name='server' onChange={this.serverChange.bind(this)} value={this.state.server}>
                        <option value="cain">카인</option>
                        <option value="diregie">디레지에</option>
                        <option value="siroco">시로코</option>
                        <option value="prey">프레이</option>
                        <option value="anton">안톤</option>
                        <option value="casillas">카시야스</option>
                        <option value="hilder">힐더</option>ㄳ농ㄹ
                                <option value="bakal">바칼</option>
                    </select>
                    <select name='length' onChange={this.lengthChange.bind(this)} value={this.state.length}>
                        <option value="10">10</option>
                        <option value="30">30</option>
                        <option value="50">50</option>
                    </select>
                    <input type="text" placeholder="캐릭터 이름" onChange={this.characterIdChange.bind(this)} value={this.state.characterId} />
                    <button onClick={this.submitButtonClick.bind(this, "character")}> 검색 </button>
                </div>
                <div className="ItemSearch">
                    <label> 장비 검색 </label>
                    <input type="text" placeholder="장비 이름" onChange={this.ItemChange.bind(this)} value={this.state.item} />
                    <button onClick={this.submitButtonClick.bind(this, "item")}> 검색 </button>
                </div>
                <div className="ShopSearch">
                    <label> 경매장 검색 </label>
                    <input type="text" placeholder="아이템 이름" onChange={this.ShopChange.bind(this)} value={this.state.shop} />
                    <button onClick={this.submitButtonClick.bind(this, "shop")}> 검색 </button>
                </div>
            </div>
        )
    }
} 