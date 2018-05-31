/**
 * Created by TH on 2018-05-21.
 */


'use strict'

class CharacterModel{
    constructor(store) {
        console.log("CharacterModel store",store)
        this.fluxStore = store;
        console.log("CharacterModel this.fluxStore",this.fluxStore)
    }

    //
    // 외부에서 api값을 가져오기 위해 사용하는 메소드
    // 

    getCharacterListBySearchText(server, characterName, limit){
        this._get_character_list_by_searchtext(server, characterName, limit).then((response)=>{
            console.log(response)
            
        })
    }


    //
    // 서버 api 호출 메소드들
    //

    _get_character_list_by_searchtext(server, characterName, limit){
        console.log("CharacterModel _get_character_list_by_searchtext",this.fluxStore)
        let params = {
            characterName : characterName,
            limit : limit,
        };

        return this.fluxStore.getFlux().APIExcuter
                .setCategory('server',server)
                .request('characters',null,null,params);
    }

}

module.exports = CharacterModel;