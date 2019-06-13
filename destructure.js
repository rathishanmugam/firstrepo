//rest parameters
let work = function(name, ...num){
    let tot=0;
    num.forEach(function (n) {
        tot += n;
    })
    return tot;
}
let res = work('rathi',1,2,3,4);
console.log(res);

//spread operator
let doto = function(x,y,z){
    return x+y+z;
}
let result = doto(...[1,2,3]);
console.log(result);


function a(){
    var a=[4,5,6];
    var b = [1,2,3,...a,7,8,9];
    console.log(b);
}
a();

//templatate literals
let nam = function(name){
    return `hello ${name}`;
};
let val = nam('rathi');
console.log(val);

function url() {
    let id = 1;
    let category = 'music';
    let url = `http://apiserver/${category}/${id}`;

    console.log(url);
}
url();
