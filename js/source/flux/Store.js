import event from 'events';
import APIExcuter from '../../../APIExcuter';

import CharacterModel from '../../../models/CharacterModel'

const URL = 'https://api.neople.co.kr/df';
const emitter = new event.EventEmitter();

let Api = new APIExcuter(URL);

const fluxStore = {

    /////////////////  저장소에서 관리할 값들 입력
    store: {

        //////////////////// API 관련 저장소 시작 ///////////////////
        ApiUrl : URL,
        ApiKey : "yTiV1SL9m5eb9B6kvfcHfEawxjMcCqwU",
        APIExcuter : Api,
        //////////////////// API 관련 저장소 종료 ///////////////////

        ///////////////////// APIWindow 관련 시작 //////////////////////

        ApiWindowView : 'select', 
        ApiSubWindowView : '',  
        ApiSeleteData : [],

        characterParams : {},
        characterViewParams : {},

        itemParams : {}, 
        itemDetailParams : "",

        shopParams : {} , 
        ///////////////////// APIWindow 관련 종료 //////////////////////

        ///////////////////// Model 관련 시작 //////////////////////

        CharacterModel : {},
        ItemModel : {},
        ShopModel : {},

        ///////////////////// Model 관련 종료 //////////////////////

        ///////////////////// BuffWindow 관련 시작 //////////////////////

        characterList : [],

        Job: "Holy",

        StatType: "H",

        Sk1MainItemOption: "b6",
        Sk1SubItemOption: "s3",

        Sk2ItemOption: "b",


        Stat: { 1: 0, 2: 0, 3: 0 },

        Level: { 1: 31, 2: 33, 3: 10 },


        StrikingWeaponCoeff: [35, 36, 37, 38, 40, // 31 32 33 34 35
            41, 42, 43, 44, 45,// 36 37 38 39 40
            46, 47, 48, 49, 50],// 41 42 43 44 45,        
        //스킹 물공 계수

        StrikingStatCoeff: [93, 96, 99, 102, 106 // 31 32 33 34 35
            , 109, 113, 116, 120, 123// 36 37 38 39 40
            , 127, 130, 133, 136, 140],// 41 42 43 44 45,          
        //스킹 힘 계수

        WisdomWeaponCoeff: [24, 25, 26, 27, 28, // 27 28 29 30 31 
            29, 30, 31, 32, 33, // 32 33 34 35 36
            34, 35, 36, 37, 38],
        //지축 마공 계수

        WisdomStatCoeff: [106, 110, 115, 120, 125 // 27 28 29 30 31 
            , 130, 134, 139, 143, 148 // 32 33 34 35 36
            , 152, 156, 161, 165, 169],
        //지축 지능 계수

        GloryWeaponCoeff:
            [57, 58, 59, 60, 62,//33 34 35 36 37
                63, 64, 65, 66, 67,//38 39 40 41 42
                68, 69, 70, 71, 72, //43 44 45 46 47
                73, 74, 75, 76, 77,//48 49 50 51 52
                78, 79, 80, 81],  //53 54 55 56,        
        //영축 독공 계수

        GloryStatCoeff: [173, 180, 188, 194, 201,//33 34 35 36 37
            209, 217, 224, 234, 241,//38 39 40 41 42
            250, 258, 267, 275, 284, //43 44 45 46 47
            293, 303, 311, 319, 328,//48 49 50 51 52
            337, 344, 354, 362], //53 54 55 56,          
        //영축 계수

        ApoStatCoeff: [325, 364, 406, 450, 494, // 10 11 12 13 14
            542, 591, 642, 696, 752, // 15 16 17 18 19
            810, 869, 930, 994, 1059, // 20 21 22 23 24
            1127, 1197, 1269, 1342, 1418, // 25 26 27 28 29
            1495],            //아포 계수

        SevenDeadlySins: { top: false, bottoms: false, shoulder: false, belt: false, shoes: false },

        Weapon: "Jupiter",

        CalcState: false,

        StrWisWeaponResult: 0,      //스킹/지축 공격력
        StrWisStatResult: 0,       //스킹/지축 스탯
        GloryWeaponResult: 0,          //영축 독공
        GloryStatResult: 0,         //영축 힘
        ApoStatResult: 0,           //아포 스탯



        SeraStat: { 2: 0, 3: 0 },

        SeraLevel: { 2: 10, 3: 10 },

        CourCoeff: [[24, 17, 40, 86, 74], [25, 18, 42, 107, 99], [26, 19, 44, 128, 123], //10 11 12
        [27, 20, 46, 149, 148], [28, 22, 48, 170, 172], [30, 22, 50, 192, 197], //13 14 15
        [32, 23, 52, 214, 222], [33, 24, 54, 236, 247], [34, 24, 56, 258, 272], //16 17 18
        [35, 25, 58, 279, 297], [36, 26, 60, 300, 322], [37, 27, 62, 321, 346], //19 20 21
        [38, 28, 64, 342, 371], [40, 28, 66, 364, 396], [41, 29, 68, 387, 421], //22 23 24
        [42, 30, 70, 408, 446], [43, 31, 72, 430, 471], [44, 32, 74, 451, 495], //25 26 27
        [45, 32, 76, 472, 521], [46, 33, 78, 493, 546], [47, 33, 80, 515, 571], //28 29 30 
        ],//  
        CruxStatCoeff: [312, 349, 390, 432, 474, //10 11 12 13 14
            520, 567, 616, 668, 722, // 15 16 17 18 19
            778, 834, 893, 954, 1017, // 20 21 22 23 24
            1082, 1149, 1218, 1288, 1361, // 25 26 27 28 29
            1435], // 30  

        Aria: false,

        CourPhyWeaponResult: 0,      //용축 물리공격력
        CourIndWeaponResult: 0,      //용축 독립공격력
        CourMagWeaponResult: 0,      //용축 마법공격력
        CourStrStatResult: 0,        //용축 힘
        CourWisStatResult: 0,        //용축 지능
        CruxStatResult: 0,           //크오빅 스탯

        
        ///////////////////// BuffWindow 관련 종료 //////////////////////


    },

    ///////////// setStore는 .setStore(저장소이름,값) 으로 들어가게 제작
    setFlux(key, value) {
        this.store[key] = value;
        //////////////// key로 emit 시켜줘야 addListener에서 추가한 함수가 실행됨
        emitter.emit(key, value);
    },

    /////////// getStore도 마찬가지로 객체를 리턴 시키게 제작
    getFlux() {
        return this.store;
    },

    ////////// addListener 로 바뀔 저장소 타입 과 실행할 함수로 제작
    addListener(eventType, func) {
        emitter.on(eventType, func);
    },

    ////////// removeListener 역시 마찬가지로 제작
    removeListener(eventType, func) {
        emitter.removeListener(eventType, func);
    }
};

export { fluxStore, emitter };