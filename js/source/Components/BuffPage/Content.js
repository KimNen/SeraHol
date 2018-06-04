import React from 'react';
import Stat from './Stat.js';
import SevenSins from './SevenSins.js';
import Result from './Result.js';
import JobSelect from './JobSelect.js';
import SeraStat from './SeraStat.js';
import SeraResult from './SeraResult.js';
import { fluxStore } from '../../flux/Store.js';

export default class Content extends React.Component{

    constructor(props){
        super(props);
        
        this.state={
            Job : fluxStore.getFlux().Job,
            StatType : fluxStore.getFlux().StatType,
        };

    }

    componentDidMount(){
        fluxStore.addListener('Job', () => {
            this.setState({
                Job : fluxStore.getFlux().Job,
            })
        })

        fluxStore.addListener('StatType', () => {
            this.setState({
                StatType : fluxStore.getFlux().StatType,
            })
        })

    }
    
    componentWillUnmount(){
        fluxStore.addListener('Job', () => {
            this.setState({
                Job : fluxStore.getFlux().Job,
            })
        })

        fluxStore.addListener('StatType', () => {
            this.setState({
                StatType : fluxStore.getFlux().StatType,
            })
        })
    }

    render(){
        return(
        <div className="ContentContainer">
            <div className="JobSelectObjContainer">
                <JobSelect/>
            </div>
            <div className="CalculPropsContainer">
                <div className="SevenSinsObjContainer">
                    <SevenSins/>
                </div>
                <div className="StatObjContainer">
                    {this.state.Job === "Holy"
                    ?<Stat/>
                    :<SeraStat/>}
                </div>
            </div>
            <div className="ResultObjContainer">
            {this.state.Job === "Holy"
                    ?<Result/>
                    :<SeraResult/>}
            </div>
        </div>
        )
    }
} 