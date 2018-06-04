import axios from 'axios';
// const qs = require('querystring');
const EventEmitter = require('events');


export default class APIExcuter extends EventEmitter {
    constructor(baseURL) {
        super();

        this.categoryName = undefined;
        this.apikey = "yTiV1SL9m5eb9B6kvfcHfEawxjMcCqwU";
        this.http = axios.create({
            baseURL: baseURL,
            timeout: 10000,
        });
    }

    getParamsWithKey(params) {
        return Object.assign({ 'apikey': this.apikey }, params);
    }

    setCategory(category_name, category_value) {
        console.log("setCategory",category_name, category_value)
        this.categoryName = category_name + "/" + category_value;
        console.log("setCategory",this.categoryName);
        return this;
    }

    setPath(){
        
    }

    execute(url, params) {
        return new Promise((resolve, reject) => {
            console.log("execute url, params", url, params)
            let query = JSON.stringify(this.getParamsWithKey(params))
            console.log("execute query", query)
            this.http.get(url, query).then((response) => {
                resolve(response.rows);
            }).catch((error) => {  //axios의 응답 실패(서버로부터 200 OK를 받지 못한 상황에서 이 catch가 실행된다.
                //////////// error 떳을때 error.response 에 응답된 내용이 담겨서 온다
                //////////// 서버에서 response.data 에 값을 줬을경우 해당값을 reject 아닐경우 axiso error reject 시킴
                reject(error.response.error ? error.response.error : error);
            });
        })
    }

    request(path, path_value, subpath, params) {
        console.log("request",path, path_value, subpath, params)
        if( path !== null){
            return this.execute('/' + this.categoryName + '/' + path + '/' + path_value + subpath !== null ? '/' + subpath : null, params);
        }
        else if(path === "characters" && path_value === null){
            console.log("캐릭터 선택 부분이 호출되었습니다")
            return this.execute('/'+this.categoryName + '/' + path  , params)
        } else {
            return this.execute('/'+this.categoryName , params)
        }
    }

    // execute(category, params, opts) {
    //     return new Promise((resolve, reject)=> {

    //         // this.http.post(category, query, opts).then((response)=>{
    //         //     if (response.data && response.data.result === 0) {
    //         //         resolve(response.data);
    //         //     } else if(response.status >= 300 && response.status < 400) {
    //         //         resolve(response.headers.location); //리다이렉트 되는 response는 전부 url로 보내줌
    //         //     } else if(typeof Object !== response) {
    //         //         /////////// 리다이렉트 된 애는 Object가 아니라 내용이 그대로 와서 response.data를 resolve 시킴
    //         //         resolve(response.data);
    //         //     } else {
    //         //         reject(response.data);
    //         //     }
    //         // }).catch((error) => {  //axios의 응답 실패(서버로부터 200 OK를 받지 못한 상황에서 이 catch가 실행된다.
    //         //     //////////// error 떳을때 error.response 에 응답된 내용이 담겨서 온다
    //         //     //////////// 서버에서 response.data 에 값을 줬을경우 해당값을 reject 아닐경우 axiso error reject 시킴
    //         //     reject(error.response.data ? error.response.data : error);
    //         // });
    //     });
    // }

    //     request(path, params, opts = {}){
    //         return this.execute('/'+this.categoryName+'/'+path, params, opts);
    //     }


}

