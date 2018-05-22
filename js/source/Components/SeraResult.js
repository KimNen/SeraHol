import React from 'react';
import { fluxStore } from '../flux/Store.js';

export default class MainWindow extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            CourPhyWeaponResult: fluxStore.getFlux().CourPhyWeaponResult,
            CourIndWeaponResult: fluxStore.getFlux().CourIndWeaponResult,
            CourMagWeaponResult: fluxStore.getFlux().CourMagWeaponResult,
            CourStrStatResult: fluxStore.getFlux().CourStrStatResult,
            CourWisStatResult: fluxStore.getFlux().CourWisStatResult,
            CruxStatResult: fluxStore.getFlux().CruxStatResult,
        }

    }

    componentDidMount() {
        fluxStore.addListener('CalcState', () => {
            this.setState({
                CourPhyWeaponResult: fluxStore.getFlux().CourPhyWeaponResult,
                CourIndWeaponResult: fluxStore.getFlux().CourIndWeaponResult,
                CourMagWeaponResult: fluxStore.getFlux().CourMagWeaponResult,
                CourStrStatResult: fluxStore.getFlux().CourStrStatResult,
                CourWisStatResult: fluxStore.getFlux().CourWisStatResult,
                CruxStatResult: fluxStore.getFlux().CruxStatResult,
            })
        })
    }

    componentWillUnmount() {
        fluxStore.addListener('CalcState', () => {
            this.setState({
                CourPhyWeaponResult: fluxStore.getFlux().CourPhyWeaponResult,
                CourIndWeaponResult: fluxStore.getFlux().CourIndWeaponResult,
                CourMagWeaponResult: fluxStore.getFlux().CourMagWeaponResult,
                CourStrStatResult: fluxStore.getFlux().CourStrStatResult,
                CourWisStatResult: fluxStore.getFlux().CourWisStatResult,
                CruxStatResult: fluxStore.getFlux().CruxStatResult,
            })
        })
    }


    render() {
        let { CourPhyWeaponResult, CourIndWeaponResult, CourMagWeaponResult,
            CourStrStatResult, CourWisStatResult, CruxStatResult } = this.state
        console.log("Result render", CourPhyWeaponResult, CourIndWeaponResult, CourMagWeaponResult,
            CourStrStatResult, CourWisStatResult, CruxStatResult);
        return (
            <div className="ResultContainer">
                용맹의 축복<br />
                힘 <input type="text" size="10" readOnly value={Math.round(CourStrStatResult * 10) / 10} />
                지능 <input type="text" size="10" readOnly value={Math.round(CourWisStatResult * 10) / 10} />
                물리공격력 <input type="text" size="10" readOnly value={Math.round(CourPhyWeaponResult * 10) / 10} />
                마법공격력 <input type="text" size="10" readOnly value={Math.round(CourMagWeaponResult * 10) / 10} />
                독립공격력 <input type="text" size="10" readOnly value={Math.round(CourIndWeaponResult * 10) / 10} />
                <br />
                크럭스 오브 빅토리아<br />
                스탯 <input type="text" size="10" readOnly value={Math.round(CruxStatResult * 10) / 10} />
            </div>
        )
    }
} 