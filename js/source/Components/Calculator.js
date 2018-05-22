import {fluxStore} from '../flux/Store.js';

const Calculator = {

    sk1calcul() {

        let StatType = fluxStore.getFlux().StatType;
        let StrWCoeff = fluxStore.getFlux().StrikingWeaponCoeff;
        let StrSCoeff = fluxStore.getFlux().StrikingStatCoeff;
        let WisWCoeff = fluxStore.getFlux().WisdomWeaponCoeff;
        let WisSCoeff = fluxStore.getFlux().WisdomStatCoeff;
        let Stat = fluxStore.getFlux().Stat;
        let Level = fluxStore.getFlux().Level;
        let MainItemOption = fluxStore.getFlux().Sk1MainItemOption;
        let SubItemOption = fluxStore.getFlux().Sk1SubItemOption;
        let Sins = fluxStore.getFlux().SevenDeadlySins;
        let Weapon = fluxStore.getFlux().Weapon;

        let top = false;
        let bottoms = false;

        let SResult = 0;   
        let WResult = 0;

        console.log("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= ItemOption start =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=");
        console.log("Options top : ",top,"bottoms : ",bottoms,"Weapon : ",Weapon);
        console.log("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= ItemOption end =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=");
        console.log("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= Skill 1 start =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=");

        for (var option in Sins) {
            if (Sins[option] === true) {
                if (option === "top") {
                    top = true;
                } else if (option === "bottoms") {
                    bottoms = true;
                }
            }
        }

        if (StatType === "H") {
            let SWCoeff = StrWCoeff[Level[1] - 31];
            let SSCoeff = StrSCoeff[Level[1] - 31]; 

            console.log("Skill 1 init SWCoeff : ", SWCoeff, "SSCoeff : ", SSCoeff);

            console.log("Weapon : ",Weapon);

            if (Weapon === "egi"){
                SWCoeff = SWCoeff + 20;
                console.log('egi',SWCoeff,SSCoeff)
            } else if (Weapon === "changseong"){
                SWCoeff = SWCoeff + 25;
                SSCoeff = SSCoeff + 10;
                console.log('changseong',SWCoeff,SSCoeff)
            } else if (Weapon === "boilblood"){
                SWCoeff = SWCoeff + 20;
                console.log('boilblood',SWCoeff,SSCoeff)
            } else if (Weapon === "Jupiter"){
                console.log("Weapon Selected Jupiter");
            }

            
            if (MainItemOption == "b6") { // 바6
                SWCoeff = SWCoeff + 23;
            } else if (MainItemOption == "s6") { // 사6
                if( SubItemOption !== "s3"){
                    SWCoeff = SWCoeff + 27;
                } else { 
                    console.log("Sub ItemOption : S3");
                    SWCoeff = SWCoeff + 14;}               
            } else if (MainItemOption == "no") {// 6셋 없음
                console.log("MainItemOption : no");
            }

            if (SubItemOption == "b3") {// 바3
    
            } else if (SubItemOption == "s3") {// 사3
                SWCoeff = SWCoeff + 13;
                SSCoeff = SSCoeff + 10;
            } else if (SubItemOption == "no") {
                console.log("SubItemOption : no");
            }// 3셋 없음

            console.log("Skill 1 after SWCoeff : ", SWCoeff, "SSCoeff : ", SSCoeff);

            if (top){
                SWCoeff = SWCoeff * 1.15;
            }

            console.log("Skill 1 Amor after SWCoeff : ", SWCoeff, "SSCoeff : ", SSCoeff);

            WResult = SWCoeff * ((Stat[1] + 630) / 630);
            SResult = SSCoeff * ((Stat[1] + 630) / 630);

            console.log("Skill 1 H Result")
            console.log("Weapon Result : ", WResult, "Stat Result : ",SResult)

        } else if (StatType === "M") {
            let WWCoeff = WisWCoeff[Level[1] - 27];
            let WSCoeff = WisSCoeff[Level[1] - 27];
            
            if (Weapon === "egi"){
                WWCoeff = WWCoeff + 10;
                WSCoeff = WSCoeff + 20;
            } else if (Weapon === "changseong"){
                WWCoeff = WWCoeff + 13;
                WSCoeff = WSCoeff + 25;
            } else if (Weapon === "boilblood"){
                WWCoeff = WWCoeff + 10;
                WSCoeff = WSCoeff + 20;
            } else if (Weapon === "Jupiter"){
                console.log("Weapon Selected Jupiter");
            }


            console.log("Skill 1 init WWCoeff : ", WWCoeff, "WSCoeff : ", WSCoeff);

            if (MainItemOption == "b6") { // 바6
                WWCoeff = WWCoeff + 14;
            } else if (MainItemOption == "s6") { // 사6
                if (SubItemOption !== "s3"){
                    WWCoeff = WWCoeff + 16;
                    WSCoeff = WSCoeff + 28;
                } else { 
                    console.log("Sub ItemOption : S3");
                    WWCoeff = WWCoeff + 9;
                    WSCoeff = WSCoeff + 16;
                }               
            } else if (MainItemOption == "no") {// 6셋 없음
                console.log("MainItemOption : no");
            }

            if (SubItemOption == "b3") {// 바3
                WSCoeff = WSCoeff + 20;
            } else if (SubItemOption == "s3") {// 사3
                WWCoeff = WWCoeff + 7;
                WSCoeff = WSCoeff + 12;
            } else if (SubItemOption == "no") {
                console.log("SubItemOption : no");
            }// 3셋 없음

            console.log("Skill 1 after WWCoeff : ", WWCoeff, "WSCoeff : ", WSCoeff);

            if (bottoms){
                WWCoeff = WWCoeff * 1.15;
            }

            console.log("Skill 1 Amor after WWCoeff : ", WWCoeff, "WSCoeff : ", WSCoeff);

            WResult = WWCoeff * ((Stat[1] + 630) / 630);
            SResult = WSCoeff * ((Stat[1] + 630) / 630);

            console.log("Skill 1 M Result")
            console.log("Weapon Result : ", WResult, "Stat Result : ",SResult)

        }

        fluxStore.setFlux("StrWisWeaponResult",WResult);
        fluxStore.setFlux("StrWisStatResult",SResult);
        console.log("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= Skill 1 end =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=");

    },

    sk2calcul() {
        let StatType = fluxStore.getFlux().StatType;
        let Stat = fluxStore.getFlux().StatType;
        let Level = fluxStore.getFlux().Level;
        let WCoeffarr = fluxStore.getFlux().GloryWeaponCoeff;
        let SCoeffarr = fluxStore.getFlux().GloryStatCoeff;
        let ItemOption = fluxStore.getFlux().Sk2ItemOption;
        let Sins = fluxStore.getFlux().SevenDeadlySins
        let Weapon = fluxStore.getFlux().Weapon;

        let WCoeff = 0;
        let SCoeff = 0;

        let CalSt = 0;
        let CalWe = 0;

        let count = 0;

        let belt = false;

        let egi = false; // 스탯 20 
        let changseong = false; // 스탯 25
        let boilBlood = false; // 스탯 20

        for (var option in Sins) {
            if (Sins[option] === true) {
                count++;
                if (option === "belt") {
                    belt = true;
                }
            }
        }
        console.log("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= Skill 2 start =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=");
        SCoeff = SCoeffarr[Level[2] - 33];
        WCoeff = WCoeffarr[Level[2] - 33];

        console.log("No Option : ", SCoeff, WCoeff);

        if (Weapon === "egi") {
            SCoeff = SCoeff + 20;
        } else if (Weapon === "changseong") {
            SCoeff = SCoeff + 25;
            WCoeff = WCoeff + 4;
        } else if (Weapon === "boilblood") {
            SCoeff = SCoeff + 20;
        } else if(Weapon === "Jupiter") {
            console.log("기본 무기 선택")
        }

        console.log("Weapon Option : ", SCoeff, WCoeff);

        if (StatType == "H") {
            if (ItemOption == "b") {
                SCoeff = SCoeff + 50;
                if(belt){
                    WCoeff = WCoeff + 5;
                    WCoeff = WCoeff * 1.2;
                }
            } else if (ItemOption == "n") {
                if (count >= 3) {
                    SCoeff = SCoeff * 1.2;
                    if(belt){
                        WCoeff = WCoeff + 5;
                        WCoeff = WCoeff * 1.2;
                    }
                } 
            }
            console.log("H Amor Option : ", SCoeff, WCoeff);
        }

        if (StatType == "M") {
            if (ItemOption == "b") {
                SCoeff = SCoeff + 44;
                if(belt){
                    WCoeff = WCoeff + 5;
                    WCoeff = WCoeff * 1.2;
                }
            } else if (ItemOption == "n") {
                if (count >= 3) {
                    SCoeff = SCoeff * 1.2;
                    if(belt){
                        WCoeff = WCoeff + 5;
                        WCoeff = WCoeff * 1.2;
                    }
                } 
            }
            console.log("M Amor Option : ", SCoeff, WCoeff);
        }


        console.log("Sins Object", Sins);
        console.log("Weapon Object", Weapon);
        console.log("count", count, "SCoeff", SCoeff, "WCoeff", WCoeff);


        CalWe = WCoeff * ((Stat[2] + 630) / 630);
        CalSt = SCoeff * ((Stat[2] + 630) / 630);

        fluxStore.setFlux("GloryStatResult",CalSt);
        fluxStore.setFlux("GloryWeaponResult",CalWe);

        console.log("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= Skill 2 end =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=");
    },

    sk3calcul() {
        let CoeffArr = fluxStore.getFlux().ApoStatCoeff;
        let Stat = fluxStore.getFlux().Stat;
        let Level = fluxStore.getFlux().Level;
        let Coeff = 0;
        let CalTemp = 0;

        console.log("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= Skill 3 start =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=");

        for (var i = 10; i < CoeffArr.length + 10; i++) {
            if (Level[3] === i) {
                Coeff = CoeffArr[i - 10];
            }
        }
        CalTemp = (Coeff * ((Stat[3] + 750) / 750)) * 0.7;

        fluxStore.setFlux('ApoStatResult',CalTemp);

        console.log("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= Skill 3 end =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=");

    },

}

export default Calculator;