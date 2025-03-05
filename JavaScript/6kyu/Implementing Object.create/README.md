---6 kyu---Implementing Object.create

------

BRIEFING  
Greetings, warrior! In this kata you will learn, how Object.create method does its job.

First over, what does it do? The signature of Object.create is like this:

//throws TypeError  
//returns newly created object  
Object.create(prototype, [properties])  
Object.create serves to create new object that inherits given prototype and has properties being defined by "properties" parameter set on it. Parameters values must meet following requirements:

prototype parameter should be some object1 (i.e. a non-primitive value) or null (but not undefined!). If bad value passed for prototype, error TypeError must be thrown.

properties parameter can be of any type or omitted at all.

As a result of execution, Object.create will return a newly created object with inner property [[Prototype]]2 set to value of prototype parameter. If properties parameter is passed and is not undefined, then Object.create will make call Object.defineProperties(obj,properties), where obj is the object to be returned by Object.create.

OBJECTIVES  
In absence of the original Object.create create your own implementation of it that acts like the original one and assign it to the Object.create. To access/modify inner [[Prototype]] property of an object, use the methods Object.getPrototypeOf() and Object.setPrototypeOf(), respectively. 2

Your implementation will be used like this:

```js
var citizen = {
  sleep: function(){ return "zzZ..."; },
  panic: function(){ return "AaAaAaAa!"; }
};

var veteran = Object.create(citizen,{
        panic: {
          value: function(){
            return "SNAFU";
          }
        }
      });
```

INFORMATION  
Formal description of Object.create function in ECMAScript 5.1  
Prototype-based inheritance description in ECMAScript 5.1  
Notes  
1 In JavaScript everything is an object, except these primitives:

null  
undefined  
numbers (42, 3.14, -1, NaN, Infinity, Number('123'), etc.)  
big Integers (-1n, 0n, 1n, BigInt(123), etc.)  
strings ("", "dan", "abnormal termination", String(123), etc.)  
boolean (true, false, Boolean(123))  
symbols (Symbol("abc"), Symbol())  
Everything else, like RegExp literals (/abc/), functions, values created by invoking a function with new, Arrays, ... are objects.

2 An inner property is a property is not accessible through language constructs. But [[Prototype]] is an exception and is accessible through Object.setPrototypeOf() and Object.getPrototypeOf().

My thanks to:

@PetrSr for corrections on number literals.
