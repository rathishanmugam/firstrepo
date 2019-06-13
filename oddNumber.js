let range= function*(start,end){
    let current = start;
    while(current <= end){
        let delta = yield current;
        current += delta || 1;
    }
}

let range2 = function(start,end){
    let current = start;
    let first = true;
    return{
        next(delta = 1){
            let result = {value:undefined,done:true};
            if(!first){
                current += delta;
            }
            if(current <= end){
                result.value = current;
                result.done = false;
            }
            first = false;
            return result;
        }
    }
}
let result = [];
let iterator = range2(1,10);
let next = iterator.next();
while(!next.done){
    result.push(next.value);
    next = iterator.next(2);
}
console.log(result);
let resul = [];
let iterator1 = range(1,10);
let next1 = iterator1.next();
while(!next1.done){
    resul.push(next1.value);
    next1 = iterator1.next(2);
}
console.log(resul);
