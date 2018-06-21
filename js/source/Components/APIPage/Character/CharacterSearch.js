/**
 * Created by TH on 2018-05-21.
 */

import React from 'react';
import { fluxStore } from '../../../flux/Store';
import { Form, Button, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

export default class CharacterSearch extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            server: 'cain',
            length: 10,
            characterId: "",
        }
    }

    Changehandle(event) {
        this.setState({
            [event.target.name]: event.target.value
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
        fluxStore.setFlux('characterParams', params);
    }

    render() {
        return (
            <div className="CharacterSearch">
                <div className="SearchLabel">
                    <label className="Title"> 캐릭터 검색 </label>
                </div>
                <Form className="FormControl">
                    <FormGroup controlId="formControlsSelect">
                        <ControlLabel>서버</ControlLabel>
                        <FormControl
                            onChange={this.Changehandle.bind(this)} name='server'
                            componentClass="select" placeholder="카인">
                            <option value="cain">카인</option>
                            <option value="diregie">디레지에</option>
                            <option value="siroco">시로코</option>
                            <option value="prey">프레이</option>
                            <option value="anton">안톤</option>
                            <option value="casillas">카시야스</option>
                            <option value="hilder">힐더</option>
                            <option value="bakal">바칼</option>
                        </FormControl>
                    </FormGroup>
                    <FormGroup controlId="formControlsSelect" >
                        <ControlLabel>최대 검색수</ControlLabel>
                        <FormControl
                            onChange={this.Changehandle.bind(this)} name='length'
                            componentClass="select" placeholder="10">
                            <option value="10">10</option>
                            <option value="30">30</option>
                            <option value="50">50</option>
                        </FormControl>
                    </FormGroup>
                    <FormGroup controlId="formBasicText">
                        <ControlLabel>캐릭터명</ControlLabel>
                        <FormControl
                            type="text"
                            name="characterId"
                            value={this.state.characterId}
                            placeholder="캐릭터명을 입력하시오"
                            onChange={this.Changehandle.bind(this)}
                        />
                        <FormControl.Feedback />
                    </FormGroup>
                </Form>
                <div className="ButtonContainer">
                    <Button bsSize="large" block bsStyle="primary" onClick={this.submitButtonClick.bind(this, "CharacterGrid")}> 검색 </Button>
                </div>
            </div>
        )
    }
} 