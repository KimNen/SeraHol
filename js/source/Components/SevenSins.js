import React from 'react';
import {fluxStore} from '../flux/Store.js';

export default class SevenSins extends React.Component{

    constructor(props){
        super(props);
           
    }

    SevenSinsSelectedClick(type){
        let Option = fluxStore.getFlux().SevenDeadlySins;
        for(var part in Option){
            if(part === type){
                Option[part] = !Option[part];
            }
        }
        fluxStore.setFlux('SevenDeadlySins',Option);
        console.log("SevenSinsSelectedClick",Option)
    }

    WeaponsselectedClick(type){ 
        fluxStore.setFlux('Weapon',type);
        console.log("WeaponsselectedClick",type);
    }

    render(){

        return(
        <div className="SevenSins">
            <div className="SevenSinsContainer">
                <div className="shoulder">
                    <input type="checkbox" className="PhotoSelectButtonDiv"
                        onClick={this.SevenSinsSelectedClick.bind(this,"shoulder")}/>
                    <img src="./images/탐식.PNG"/>
                </div>
                <div className="top">
                    <input type="checkbox" className="PhotoSelectButtonDiv"
                        onClick={this.SevenSinsSelectedClick.bind(this,"top")}/>
                    <img src="./images/오만.PNG"/>
                </div>
                <div className="bottoms">
                    <input type="checkbox" className="PhotoSelectButtonDiv"
                        onClick={this.SevenSinsSelectedClick.bind(this,"bottoms")}/>
                    <img src="./images/폭식.PNG"/>
                </div>
                <div className="belt">
                    <input type="checkbox" className="PhotoSelectButtonDiv"
                        onClick={this.SevenSinsSelectedClick.bind(this,"belt")}/>
                    <img src="./images/질투.PNG"/>
                </div>
                <div className="shoes">
                    <input type="checkbox" className="PhotoSelectButtonDiv"
                        onClick={this.SevenSinsSelectedClick.bind(this,"shoes")}/>
                    <img src="./images/나태.PNG"/>
                </div>
            </div> 
            <div className="WeaponsContainer">
                <div className="egi">
                    <input type="radio" name="Weapon" className="PhotoSelectButtonDiv"
                        onClick={this.WeaponsselectedClick.bind(this,"egi")}/>
                    <img src="./images/이기.PNG"/>
                </div>
                <div className="changseong">
                    <input type="radio" name="Weapon" className="PhotoSelectButtonDiv"
                        onClick={this.WeaponsselectedClick.bind(this,"changseong")}/>
                    <img src="./images/창성.PNG"/>
                </div>
                <div className="boilblood">
                    <input type="radio" name="Weapon" className="PhotoSelectButtonDiv"
                        onClick={this.WeaponsselectedClick.bind(this,"boilblood")}/>
                    <img src="./images/끓피.PNG"/>
                </div>
                <div className="Jupiter">
                    <input type="radio" name="Weapon" className="PhotoSelectButtonDiv"
                        onClick={this.WeaponsselectedClick.bind(this,"Jupiter")}/>
                    <img src="./images/유피.PNG"/>
                </div>
            </div>
        </div>
        )
    }
} 