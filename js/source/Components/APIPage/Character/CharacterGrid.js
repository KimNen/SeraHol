/**
 * Created by TH on 2018-05-21.
 */

import React from 'react';
import axios from 'axios';
import { AutoSizer, Grid } from 'react-virtualized';
import { fluxStore } from '../../../flux/Store';
import CharacterCell from './CharacterCell';

var config = {
    method: 'GET',
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,POST,PUT,DELETE,OPTIONS',
        "Access-Control-Allow-Headers": "Origin,Accept,X-Requested-With,Content-Type,Access-Control-Request-Method,Access-Control-Request-Headers,Authorization",
        'Content-Type': 'application/json',
    }
};

export default class CharacterGrid extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            CharacterList: [],
            characterParams: fluxStore.getFlux().characterParams,
        }
        this.widthSize = 0;
        this.apikey = fluxStore.getFlux().ApiKey
        this.apiurl = fluxStore.getFlux().ApiUrl
        this.http = axios.create({
            baseURL: this.apiurl,
            timeout: 3000
        })
        console.log("CharacterGrid", this.state.characterParams);

    }

    componentDidMount() {
        this.getCharacterList();
    }

    componentWillUnmount() {

    }

    getCharacterList() {
        let url = "/servers/" + this.state.characterParams.server + "/characters?characterName=" + encodeURI(this.state.characterParams.characterId) + "&wordType=full&limit=" + this.state.characterParams.length + "&apikey=" + this.apikey;
        let templist = [];
        this.http.get(url, config).then((response) => {
            let ServerResponse = response.data.rows;
            ServerResponse.forEach((CurrentValue) => {
                templist.push(<CharacterCell data={CurrentValue} server={this.state.characterParams.server} />)
            })
            console.log("getCharacterList templist : ", templist);
            this.setState({
                CharacterList: templist
            })
            console.log("getCharacterList CharacterList : ", this.state.CharacterList);
        }).catch((err) => {
            console.log("getCharacterList err", err);
        })

    }


    cellRenderer({ columnIndex, key, rowIndex, style }) {
        let index = (Math.floor(this.widthSize / 210) * rowIndex) + columnIndex;
        // let index  = (rowIndex + 1)
        // 현재 인덱스를 구해주려면 한 줄에 몇개가 들어가 있는지 알아야 하기 때문에 현재 윈도우의 사이즈를 가지고 있을 수 밖에 없음

        return (
            <div
                key={key}
                style={style}
            >
                {this.state.CharacterList[index]}
            </div>
        )
    }

    BackButtonClick() {
        fluxStore.setFlux('ApiSubWindowView', "CharacterSearch");
    }


    render() {
        return (
            <div className="CharacterGrid">
                <AutoSizer>
                    {({ width, height }) => {
                        this.widthSize = width
                        return (
                            <Grid
                                cellRenderer={this.cellRenderer.bind(this)}

                                columnCount={Math.floor(width / 210)}
                                rowCount={Math.ceil(this.state.CharacterList.length / Math.floor(width / 210))}

                                columnWidth={210}
                                rowHeight={300}

                                height={height}
                                width={width}
                            />
                        )
                    }}
                </AutoSizer>
                <button className="BackButton" onClick={this.BackButtonClick.bind(this)}>
                    이전으로
                </button>
            </div>
        )
    }
} 