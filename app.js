
 class A {
     foo() {return 'foo in A';}
 }
 class B {
     foo() {return 'foo in B';}
 }

 class C extends A {
     foo() {
         console.log(super.foo()); // foo in A
         Object.setPrototypeOf(C.prototype, B.prototype);
         console.log(super.foo()); // foo in B
     }
 }

 const d = new C;
 d.foo();
 class Base {
     foo() {return 'foo in Base';}
     static bar() {return 'bar in Base';}
 }
 class Child extends Base {
     foo() {return super.foo();}
     static bar() {return super.bar();}
 }

 const obj = new Child;
 const obj1 = new Base;
 console.log(obj.foo()); // foo in Base
 console.log(Child.bar()); // bar in Base
 console.log(obj1.foo());
 console.log(Base.bar());
