class Person {
    constructor(name){
        this._name = name;
    }
    get name(){
        return this._name.toUpperCase();
    }
    set name(newName){
        this._name = newName;
    }
    work(){
        return `${this._name} is working `;
    }

}
class Employee extends Person{
constructor(name,title){
    super(name);
    this._title = title;
}
    work(){
        return `${this._name} is working ${this._title}`;
    }
}
let makeWork = function(...people){
    var tot = [];
    if(p instanceof Person) {
        people.forEach(function (p) {
            tot.push(p.work());
        })
    }
    return tot;
}
let  p = new Person('scott');
let  e = new Employee('mark','developer');
console.log(makeWork(p,e));

console.log(p.name);
console.log(e.name);
console.log(e.work());

 e.name = 'mark';
console.log(e.name);

