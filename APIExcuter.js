import axios from 'axios';
// const qs = require('querystring');
const EventEmitter = require('events');
const ThrottleQ = require('./throttle_q');


export default class APIExcuter extends EventEmitter {
    constructor(baseURL) {
        super();

        this.category = undefined;
        this.path = undefined;
        this.apikey = "yTiV1SL9m5eb9B6kvfcHfEawxjMcCqwU";
        this.throttle = new ThrottleQ(5, 100);
        this.url = "";
        this.http = axios.create({
            baseURL: baseURL,
            timeout: 10000,
        });
    }
    ////////////////////// Get방식용 Execute //////////////////////////////
    setCategory(category_name, category_value) {
        this.category = category_name + "/" + category_value;
        return this;
    }

    setPath(path_name, path_value) {
        this.path = path_name + "/" + path_value;
        return this;
    }

    PaCaReset(){
        this.path = undefined;
        this.category = undefined;
        return this;
    }

    execute(url, params) {
        // console.log("execute", this.path)
        return new Promise((resolve, reject) => {
            this.throttle.push(() => {
                // console.log("execute url, params", url, params)
                this.http.get(url, {
                    params: params
                }).then((response) => {
                    // console.log("this.http.get response : ", response)
                    resolve(response.data);
                    this.PaCaReset();
                }).catch((error) => {  //axios의 응답 실패(서버로부터 200 OK를 받지 못한 상황에서 이 catch가 실행된다.
                    //////////// error 떳을때 error.response 에 응답된 내용이 담겨서 온다
                    //////////// 서버에서 response.data 에 값을 줬을경우 해당값을 reject 아닐경우 axiso error reject 시킴
                    reject(error);
                });
            })
        })
    }

    request(subpath, subpath_value = null, params) {

        if (this.path !== undefined) {
            console.log("this.path is not undefined")
            if (subpath_value === null) {
                return this.execute("/" + this.category + "/" + this.path + "/" + subpath, params);
            } else {
                return this.execute("/" + this.category + "/" + this.path + "/" + subpath + "/" + subpath_value, params);
            }
        } else {
            console.log("this.path is undefined")
            if (subpath_value === null) {
                return this.execute("/" + this.category + "/" + subpath, params);
            } else {
                return this.execute("/" + this.category + "/" + subpath + "/" + subpath_value, params);
            }
        }

    }

    ////////////////////// Get방식용 Execute //////////////////////////////


    ////////////////////// Post방식용 Execute //////////////////////////////

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

    ////////////////////// Pose방식용 Execute //////////////////////////////

}

