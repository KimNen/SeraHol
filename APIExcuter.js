import axios from 'axios';
// const qs = require('querystring');
const EventEmitter = require('events');


export default class APIExcuter extends  EventEmitter {
    constructor(baseURL) {
        super();

        this.http = axios.create({
            baseURL: baseURL,
            timeout: 10000,
        });
    }

    setCategory(category_name){
        this.categoryName = category_name;
        return this;
    }
    
    execute(url) {
        return new Promise((resolve, reject)=> {

            this.http.get().then((response)=>{
                
            })

        });
    }

    request(path){
        return this.execute('/'+this.categoryName+'/'+path);
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

