//default parameters

var work = function(a=1,b=2,c=3){
    return [a,b,c];
};
var [a,b,c] = work(5,null,undefined);
console.log(a);
console.log(b);
console.log(c);
