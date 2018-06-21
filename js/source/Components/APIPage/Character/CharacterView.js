/**
 * Created by TH on 2018-05-21.
 */

import React from 'react';
import { fluxStore } from '../../../flux/Store';
import CharacterSubWindow from './CharacterSubWindow';
import CharacterMainWindow from './CharacterMainWindow';
const PropsType = require('prop-types')


export default class CharacterView extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
        }
    }

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    render() {
        console.log("CharacterView render() state : ", this.props);
        return (
            <div className="CharacterView">
                <div className="MainViewWindow">
                    <CharacterMainWindow serverValue={this.props.serverValue}/>
                </div>
                <div className="SubViewWindow">
                    <CharacterSubWindow key={Math.random()}
                        // key={this.state.SubWindowState} SubWindowState={this.state.SubWindowState}
                      />
                </div>
            </div>
        )
    }
} 