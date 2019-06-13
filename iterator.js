
//generator function instead of array iterator ,doing same function,with
class Company {
    constructor() {
        this.employees = [];
    }

    addEmployees(...names) {
        this.employees = this.employees.concat(names);
    }

    * [Symbol.iterator]() {
        for (let e of this.employees) {
            // console.log('iam generator', e);
            yield  e;
        }
    }
}
    let filter = function*(items,predicate){
        yield* (for (item of items) if(predicate(item)) item);
        // for (let item of items){
        //     // console.log('filter',item)
        //     if(predicate(item)){
        //         yield item;
        //     }
        // }
}
let take = function*(items,number){
    let count = 0;
     if(number < 1) return;
    for(let item of items){
        console.log('take item',item);
        yield item;
        count += 1;
        if(count >= number)return;
    }
}
let coun = 0;
let tot = 0;
let occ = 0;
let found = undefined;
let com = new Company();
com.addEmployees('sad','sam','san','jhjh','qqq');
let iterator = com[Symbol.iterator]();
iterator.next();
// console.log(iterator.next())
for (let a of take(filter(com,e => e[0]== 's'),2)){
    occ += 1;
    found = a;
    console.log("got",a);
}
console.log('the asked filter tot is',occ);

for (let a of filter(com,e => e[0]== 's')){
    console.log('the item',a)
    tot += 1;
}
console.log('the filter tot is',tot);
for (let e of com){
   coun += 1;
}
console.log(coun);




//array iterator class
class ArrayIterator {
    constructor(array) {
        this.array = array;
        this.index = 0;
    }

    next() {
        var result = {value: undefined, done: true};
        if (this.index < this.array.length) {
            result.value = this.array[this.index];
            result.done = false;
            this.index += 1;
        }
        return result;
    }
}

let count = 0;
let company = new Company();
company.addEmployees('tim', 'joy', 'pari', 'sue');
console.log(company);
for (let e of company) {
    count += 1;
}
console.log(count);
