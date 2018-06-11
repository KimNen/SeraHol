const { app, Menu, MenuItem, Tray, dialog, BrowserWindow, ipcMain,
  webContents, nativeImage } = require('electron')
const path = require('path')
const url = require('url')

// 윈도우 객체를 전역에 유지합니다. 만약 이렇게 하지 않으면
// 자바스크립트 GC가 일어날 때 창이 멋대로 닫혀버립니다.
let win;

let store = {

  StatType : "H",

  Sk1MainItemOption : "b6",
  Sk1SubItemOption : "s3",

  Sk2ItemOption : "b",

  
  Stat : {1:0, 2:0, 3:0},

  Level : {1:31, 2:33, 3:10},


  StrikingWeaponCoeff : [35,36,37,38,40, // 31 32 33 34 35
                          41,42,43,44,45,// 36 37 38 39 40
                          46,47,48,49,50],// 41 42 43 44 45,        
                                //스킹 물공 계수

  StrikingStatCoeff : [93,96,99,102,106 // 31 32 33 34 35
                        ,109,113,116,120,123// 36 37 38 39 40
                        ,127,130,133,136,140],// 41 42 43 44 45,          
                                //스킹 힘 계수

  WisdomWeaponCoeff : [24,25,26,27,28, // 27 28 29 30 31 
                        29,30,31,32,33, // 32 33 34 35 36
                        34,35,36,37,38],          
                        //지축 마공 계수

  WisdomStatCoeff : [106,110,115,120,125 // 27 28 29 30 31 
                      ,130,134,139,143,148 // 32 33 34 35 36
                      ,152,156,161,165,169],
                                 //지축 지능 계수

  GloryWeaponCoeff : [57,58,59,60,62,//33 34 35 36 37
                      63,64,65,66,67,//38 39 40 41 42
                      68,69,70,71,72, //43 44 45 46 47
                      73,74,75,76,77,//48 49 50 51 52
                      78,79,80,81],  //53 54 55 56,        
                      //영축 독공 계수

  GloryStatCoeff : [173,180,188,194,201,//33 34 35 36 37
                        209,217,224,234,241,//38 39 40 41 42
                        250,258,267,275,284, //43 44 45 46 47
                        293,303,311,319,328,//48 49 50 51 52
                        337,344,354,362], //53 54 55 56,          
                        //영축 계수

  ApoStatCoeff : [325,364,406,450,494, // 10 11 12 13 14
                  542,591,642,696,752, // 15 16 17 18 19
                  810,869,930,994,1059, // 20 21 22 23 24
                  1127,1197,1269,1342,1418, // 25 26 27 28 29
                  1495],            //아포 계수

  SevenDeadlySins : {top:false,bottoms:false,shoulder:false,belt:false,shoes:false},
  
  Weapon : "Jupiter",

  CalcState : false,

  StrWisWeaponResult : 0,       //스킹/지축 공격력
  StrWisStatResult : 0,         //스킹/지축 스탯
  GloryWeaponResult : 0,          //영축 독공
  GloryStatResult : 0,         //영축 힘
  ApoStatResult : 0,           //아포 스탯

};

/***************************************************/
global.storeObj = store;
global.mainWindowListMap = win;
// 글로벌 변수에 현재 저장소와, 윈도우 리스트를 집어넣어
// 렌더러 프로세스에서도 사용 가능하게 해줘야 함. 

const iconPath = path.join(__dirname,'images','icon.png'); // 아
let image = nativeImage.createFromPath(iconPath)          // 이

app.on('ready', () => {

  win = new BrowserWindow({
    width: 1115, height: 950,
    minWidth: 1100, minHeight: 800,transparent: false,
    titleBarStyle: 'hidden', icon: image});
   
  win.setIcon(image);

  electron_flux.mainProcess.init(store, new Map());
  electron_flux.mainDispatcher.init(ipcMain);
  electron_flux.mainWindowCRUD.init(ipcMain, BrowserWindow);
  /// electron_flux 기본 init 함수, MainProcess와 Window를 설정

  // 그리고 현재 디렉터리의 index.html을 로드합니다.
  win.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }));

  electron_flux.mainProcess.addWindow("Calculator", win);

  //session 부분
  // 창이 닫히면 호출됩니다.
  win.on('closed', () => {
    win = null
  });
})

  // 모든 창이 닫히면 애플리케이션 종료.
  app.on('window-all-closed', () => {
    // macOS의 대부분의 애플리케이션은 유저가 Cmd + Q 커맨드로 확실하게
    // 종료하기 전까지 메뉴바에 남아 계속 실행됩니다.
    if (process.platform !== 'darwin') {
      app.quit();
    }
  })

  app.on('activate', () => {
    // macOS에선 보통 독 아이콘이 클릭되고 나서도
    // 열린 윈도우가 없으면, 새로운 윈도우를 다시 만듭니다.
    if (win === null) {
      createWindow()
    }
  })
