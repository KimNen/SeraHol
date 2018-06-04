/**
 * Created by TH on 2018-05-21.
 */

import React from 'react';
import { fluxStore } from '../../flux/Store';

export default class ItemSelect extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            item: '',
        }
        
    }

    ItemChange(event) {
        this.setState({
            item: event.target.value
        })
    }

    submitButtonClick(type){
        let {item}= this.state

        fluxStore.setFlux('ApiWindowView',type);
        fluxStore.setFlux('item', item);
    }

    render() {
        return (
            <div className="ItemSelect">
                <div className="ItemSearch">
                    <label> 장비 검색 </label>
                    <input type="text" placeholder="장비 이름" onChange={this.ItemChange.bind(this)} value={this.state.item} />
                    <button onClick={this.submitButtonClick.bind(this, "item")}> 검색 </button>
                </div>
            </div>
        )
    }
} 