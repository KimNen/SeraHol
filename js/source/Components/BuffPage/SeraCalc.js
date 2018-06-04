
import { fluxStore } from '../../flux/Store.js';

const Calculator = {

    sk2calcul() {
        let CourCoeffArr = fluxStore.getFlux().CourCoeff;
        let Stat = fluxStore.getFlux().SeraStat;
        let Level = fluxStore.getFlux().SeraLevel;
        let Sins = fluxStore.getFlux().SevenDeadlySins;
        let Weapon = fluxStore.getFlux().Weapon;
        let Aria = fluxStore.getFlux().Aria;

        let StrStCoeff = 0;
        let WisStCoeff = 0;
        let AttWeCoeff = 0;
        let MagWeCoeff = 0;
        let IndWeCoeff = 0;

        let CalStrSt = 0;
        let CalWisSt = 0;
        let CalAttWe = 0;
        let CalMagWe = 0;
        let CalIndWe = 0;

        let count = 0;

        let top = false;
        let bottoms = false;
        let belt = false;

        let egi = false; // 스탯 20 
        let changseong = false; // 스탯 25
        let boilBlood = false; // 스탯 20

        for (var option in Sins) {
            if (Sins[option] === true) {
                count++;
                if (option === "top") {
                    top = true;
                }else if (option === "bottoms") {
                    bottoms = true;
                }else if (option === "belt") {
                    belt = true;
                }
            }
        }


        console.log("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= Skill 2 start =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=");
        console.log("Skill 2  Stat: ", Stat);
        console.log("Skill 2  Level: ", Level);
        console.log("Sins Object", Sins);
        console.log("Weapon Object", Weapon);

        AttWeCoeff = CourCoeffArr[Level[2] - 10][0]
        MagWeCoeff = CourCoeffArr[Level[2] - 10][1];
        IndWeCoeff = CourCoeffArr[Level[2] - 10][2];
        StrStCoeff = CourCoeffArr[Level[2] - 10][3];
        WisStCoeff = CourCoeffArr[Level[2] - 10][4];

        console.log("No Option : ", StrStCoeff, WisStCoeff, AttWeCoeff, MagWeCoeff, IndWeCoeff);

        if (Weapon === "egi") {
            console.log("구원의 이기 - 십자가 선택"); 
            StrStCoeff = StrStCoeff + 23
            WisStCoeff = WisStCoeff + 31
            AttWeCoeff = AttWeCoeff + 16
            MagWeCoeff = MagWeCoeff + 7
            IndWeCoeff = IndWeCoeff 
        } else if (Weapon === "changseong") {
            console.log("창성의 구원자 - 십자가 선택");
            StrStCoeff = StrStCoeff 
            WisStCoeff = WisStCoeff + 6
            AttWeCoeff = AttWeCoeff + 18
            MagWeCoeff = MagWeCoeff + 7
            IndWeCoeff = IndWeCoeff 
        } else if (Weapon === "boilblood") {
            console.log("끓어오르는 피의 십자가 선택");
            StrStCoeff = StrStCoeff + 21
            WisStCoeff = WisStCoeff + 34
            AttWeCoeff = AttWeCoeff + 19
            MagWeCoeff = MagWeCoeff + 8
            IndWeCoeff = IndWeCoeff 
        } else if(Weapon === "Jupiter") {
            console.log("기본 무기 선택")
        }

        console.log("Weapon Option : ", StrStCoeff, WisStCoeff, AttWeCoeff, MagWeCoeff, IndWeCoeff);

        ///  옵션 적용 부분 ////

        if(top){
            console.log("칠죄종 상의 착용");
            StrStCoeff = StrStCoeff + 9;
            AttWeCoeff = AttWeCoeff + 2;
            StrStCoeff = StrStCoeff * 1.05;
            AttWeCoeff = AttWeCoeff * 1.15;
            if(count >= 3){
                console.log("칠죄종 3부위 이상");
                StrStCoeff = StrStCoeff * 1.12;
                WisStCoeff = WisStCoeff * 1.12;
            }
        }
        if(bottoms) {
            console.log("칠죄종 하의 착용");
            WisStCoeff = WisStCoeff + 10;
            MagWeCoeff = MagWeCoeff + 2;
            WisStCoeff = WisStCoeff + 1.05;
            MagWeCoeff = MagWeCoeff + 1.15;
            if(count >= 3){
                console.log("칠죄종 3부위 이상");
                StrStCoeff = StrStCoeff * 1.12;
                WisStCoeff = WisStCoeff * 1.12;
            }
        }
        if(belt){
            console.log("칠죄종 벨트 착용");
            IndWeCoeff = IndWeCoeff + 5;
            IndWeCoeff = IndWeCoeff * 1.20;
            if(count >= 3){
                console.log("칠죄종 3부위 이상");
                StrStCoeff = StrStCoeff * 1.12;
                WisStCoeff = WisStCoeff * 1.12;
            }
        } 

        ///// 옵션 적용 부분 끝 /////
    
        console.log("count", count, "All Coeff : ", StrStCoeff, WisStCoeff, AttWeCoeff, MagWeCoeff, IndWeCoeff);

        CalStrSt = StrStCoeff * ((Stat[2] + 700) / 700);
        CalWisSt = WisStCoeff * ((Stat[2] + 700) / 700);
        CalAttWe = AttWeCoeff * ((Stat[2] + 700) / 700);
        CalMagWe = MagWeCoeff * ((Stat[2] + 700) / 700);
        CalIndWe = IndWeCoeff * ((Stat[2] + 700) / 700);

        console.log("Skill CalCulate Result : ",CalStrSt,CalWisSt,CalAttWe,CalMagWe,CalIndWe);

        if(Aria){

            CalStrSt = CalStrSt * 1.25;
            CalWisSt = CalWisSt * 1.25;
            CalAttWe = CalAttWe * 1.25;
            CalMagWe = CalMagWe * 1.25;
            CalIndWe = CalIndWe * 1.25;
            
            console.log("Skill Aria CalCulate Result : ",CalStrSt,CalWisSt,CalAttWe,CalMagWe,CalIndWe);

        }

        fluxStore.setFlux('CourStrStatResult',CalStrSt);
        fluxStore.setFlux('CourWisStatResult',CalWisSt);
        fluxStore.setFlux('CourPhyWeaponResult',CalAttWe);
        fluxStore.setFlux('CourIndWeaponResult',CalMagWe);
        fluxStore.setFlux('CourMagWeaponResult',CalIndWe);

        console.log("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= Skill 2 end =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=");
    },

    sk3calcul() {
        console.log("getFlux");
        let CoeffArr = fluxStore.getFlux().CruxStatCoeff;
        let Stat = fluxStore.getFlux().SeraStat;
        let Level = fluxStore.getFlux().SeraLevel;
        let Coeff = 0;
        let CalTemp = 0;

        console.log("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= Skill 3 start =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=");

        for (var i = 10; i < CoeffArr.length + 10; i++) {
            if (Level[3] === i) {
                Coeff = CoeffArr[i - 10];
            }
        }
        CalTemp = (Coeff * ((Stat[3] + 830) / 830)) * 0.7;

        fluxStore.setFlux("CruxStatResult",CalTemp);

        console.log("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= Skill 3 end =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=");

    },

}

export default Calculator;