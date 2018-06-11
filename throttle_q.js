'use strict'

class ThrottleQ {
    constructor(max_count, count_time_unit){
        this.q = [];
        this.count_time_unit = count_time_unit;
        this.max_count = max_count;
        this.current_count = 0;
    }

    push(func){
        if(this.current_count >= this.max_count){
            this.q.push(func);
        }else{
            this._do_a_func(func);
        }
    }

    status(){
        return {max_count: this.max_count, current_count: this.current_count, length_of_q: this.q.length}
    }

    _increase_current_count() {
        this.current_count += 1;
    }

    _decrease_current_count() {
        this.current_count -=1 ;
        this._reduce_q();
    }

    _reduce_q(){
        if(this.q.length > 0) this._do_first_one();
    }

    _do_a_func(func){
        func();
        this._increase_current_count();
        setTimeout(() => {
            this._decrease_current_count();
        }, this.count_time_unit)
    }

    _do_first_one(){
        var func = this.q.shift();
        if(func){
            this._do_a_func(func);
        }
    }
}

module.exports = ThrottleQ;