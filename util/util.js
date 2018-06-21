import {fluxStore} from '../js/source/flux/Store';

const resetToggle = () =>{
    fluxStore.setFlux('ApiWindowView',"select");
    fluxStore.setFlux('ApiSubWindowView','');
    fluxStore.setFlux('ApiSeleteData',[]);
    fluxStore.setFlux('characterParams',{});
    fluxStore.setFlux('characterViewParams',{});
}

exports.module.resetToggle;