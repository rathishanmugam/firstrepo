function generator(){
   let num = function*(start,end){
   for (let i = start ; i <= end ;i++){
       console.log('the yield',i)
       yield i;}
}
let sum = 0;
   let iterator = num(1,5);
   let next = iterator.next();
   while(!next.done){
   sum += next.value;
       console.log('the next',next)

       next = iterator.next();}
   console.log(sum);
}
generator();

//for of work with iterator ,its calling next and checking done flag
function forof(){
    let num = function*(start,end){
        for(let i = start;i <= end ; i++){
            console.log(i);
            yield(i);}
    }
    let count = 0;
    for(let j of num(1,4)){
        count += j;
    }
    console.log(count);
}
forof();
