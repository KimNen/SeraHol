/**
 * Created by TH on 2018-05-21.
 */


'use strict'

class CharacterModel{
    constructor(store) {
        this.fluxStore = store;
    }

    //
    // 외부에서 api값을 가져오기 위해 사용하는 메소드
    // 

    getCharacterListBySearchText(server, characterName, limit){
        this._get_character_list_by_searchtext(server, characterName, limit).then((response)=>{
            this.fluxStore.setFlux('CharacterListData',response);
        })
    }

    getCharacterListByCharacterId(server,CharacterId){
        this._get_character_info_by_CharacterId(server,CharacterId).then((response)=>{
            this.fluxStore.setFlux('CharacterDetailData',response);
        })
    }

    getCharacterEquipInfoByCharacterId(server,CharacterId){
        this._get_character_equip_info_by_CharacterId(server,CharacterId).then((response)=>{
            this.fluxStore.setFlux('CharacterEquipData',response);
        })
    }

    getCharacterStatusInfoByCharacterId(server,CharacterId){
        this._get_character_status_info_by_CharacterId(server,CharacterId).then((response)=>{
            this.fluxStore.setFlux('CharacterStatusData',response);
        })
    }


    //
    // 서버 api 호출 메소드들
    //

    _get_character_equip_info_by_CharacterId(server,CharacterId){
        let params = {
            apikey : this.fluxStore.getFlux().ApiKey
        };

        return this.fluxStore.getFlux().APIExcuter
                .setCategory('servers',server)
                .setPath('characters',CharacterId)
                .request('equip','equipment',params);
    }

    _get_character_status_info_by_CharacterId(server,CharacterId){
        let params = {
            apikey : this.fluxStore.getFlux().ApiKey
        };

        return this.fluxStore.getFlux().APIExcuter
                .setCategory('servers',server)
                .setPath('characters',CharacterId)
                .request('status',null,params);
    }

    _get_character_info_by_CharacterId(server,CharacterId){
        let params = {
            apikey : this.fluxStore.getFlux().ApiKey
        };

        return this.fluxStore.getFlux().APIExcuter
                .setCategory('servers',server)
                .request('characters',CharacterId,params);
    }

    _get_character_list_by_searchtext(server, characterName, limit){
        let params = {
            characterName : characterName,
            limit : limit,
            apikey : this.fluxStore.getFlux().ApiKey
        };

        return this.fluxStore.getFlux().APIExcuter
                .setCategory('servers',server)
                .request('characters',null,params);
    }

}

module.exports = CharacterModel;