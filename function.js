let add = (x,y) => x+y;
console.log(add(2,2));


function square(){
    let addition = (x,y) => { return x+y;}
    let square1 = x => x*x;
    let three = () => 3;
    console.log(square1(addition(2,three())));
}
square();


function addi(){
    var num = [1,2,3,4,5];
    var tot = 0;
   var double = 0;
    num.forEach( n => tot += n);
  var dou =  num.map( n => n*2);
console.log(tot);
console.log(dou);
}
addi();


function multi(){
    let num = [1,2,3,4,5];
    let sum = 1;
    for(let i in num){
        sum *= num[i];
    }
    console.log(sum);
}
multi();

//iterator

function iterator(){
    let sum = 0;
    let num = [1,2,3,4,5];
    let iterator = num.values();
    let next = iterator.next();
    while(!next.done){
        sum += next.value;
        next = iterator.next();
    }
    console.log(sum);
}
iterator();


function times(){
    let num = [1,2,3,4,5];
    let sum = 0;
    for(let i of num){
        sum += i;
    }
    console.log(sum);
}
times();
