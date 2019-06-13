//destructuring example

var work = function(){
    return[1,2,3];
}
let [,,x,y] = work();
console.log(x);



let todo = function(){
    return {
        first : 'rathi',
        last: 'shan',
msg:{twitter : 'good'}
    }
}
let {first,last,msg:{twitter}} = todo();
console.log(first);
console.log(twitter);


let api = function(url,{data,cache,headers}){
    return headers;
};
let result = api(
    'api/test',
    {
        data:'test',
        cache:false,
        headers:'work'
    }
);
console.log(result);
