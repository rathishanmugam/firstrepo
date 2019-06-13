function number(){
    var octal = 0o71;
    var bin = 0b1101;
    var octNum = Number('0o71');
    var binNumber = Number(0b1101);
    console.log(octal);
    console.log(octNum);
    console.log(binNumber);
}
number();

//array
var match = [1,5,10].find(v => v > 8);
console.log(match);

var mat = [1,5,10].findIndex(n => n > 3);
console.log(mat);

var ary = [1,2,3,4,5];
ary.fill('a',2,4);
console.log(ary);

var ary = [1,2,3,4,5];
ary.copyWithin(-2,0);
console.log(ary);

var ary = new Array(3);
var ofAry = Array.of(3);
console.log(ary);
console.log(ofAry);


//from create array-like object
var arrayLike = document.querySelectorAll('div');
var fromArray = Array.from(arrayLike);
console.log('FROM ARRAY',fromArray.forEach);

//retriving keys and values
function array(){
    var a = ['joe','jon','jen'];
    var entry = a.entries();
    var key = a.keys();
    var firstKey = key.next().value;
    var firstEntry = entry.next().value;
    console.log(firstEntry[0]);
    console.log((firstEntry[1]));
    console.log(firstKey);
}
array();

//array comprehensions
var ary = [for (i of [1,2,3,4,5]) i];
console.log(ary);
