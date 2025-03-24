# 4 kyu - Currying vs. Partial Application

Currying and partial application are two ways of transforming a function into another function with a generally smaller arity. While they are often confused with each other, they work differently. The goal is to learn to differentiate them.

Currying  
Is the technique of transforming a function that takes multiple arguments in such a way that it can be called as a chain of functions each with a single argument.

Currying takes a function:

```js
f: X × Y → R
```

and turns it into a function:

```js
f': X → (Y → R)
```

Instead of calling f with two arguments, we invoke f' with the first argument. The result is a function that we then call with the second argument to produce the result. Thus, if the uncurried f is invoked as:

`f(3, 5)`  
then the curried f' is invoked as:

`f'(3)(5)`

Example  
Given this function:

```js
function add(x, y, z) {
  return x + y + z;
}
```

We can call in a normal way:

```js
add(1, 2, 3); //6
```

But we can create a curried version of add(a, b, c)function:

```js
function curriedAdd(a) {
  return function(b) {
    return function (c) {
      return add(a, b, c);
    };
  };
}
```

```js
curriedAdd(1)(2)(3); //6
```

Partial application  
Is the process of fixing a number of arguments to a function, producing another function of smaller arity.

Partial application takes a function:

```js
f: X × Y → R
```

and a fixed value x for the first argument to produce a new function

```js
f': Y → R
```

f' does the same as f, but only has to fill in the second parameter which is why its arity is one less than the arity of f. One says that the first argument is bound to x.

Example

```js
function partialAdd(a) {
  return function(b, c) {
    return add(a, b, c);
  };
}

partialAdd(1)(2, 3); //6
```

Your work is to implement a generic curryPartial() function allows either currying or partial application.

For example:

```js
var curriedAdd = curryPartial(add);
curriedAdd(1)(2)(3); //6

var partialAdd = curryPartial(add, 1);
partialAdd(2, 3); //6
```

We want the function be very flexible.

All these examples should produce the same result:

```js
curryPartial(add)(1)(2)(3); //6
curryPartial(add, 1)(2)(3); //6
curryPartial(add, 1)(2, 3); //6
curryPartial(add, 1, 2)(3); //6
curryPartial(add, 1, 2, 3); //6
curryPartial(add)(1, 2, 3); //6
curryPartial(add)(1, 2)(3); //6
curryPartial(add)()(1, 2, 3); //6
curryPartial(add)()(1)()()(2)(3); //6

curryPartial(add)()(1)()()(2)(3, 4, 5, 6); //6
curryPartial(add, 1)(2, 3, 4, 5); //6
```

And also all of these:

```js
curryPartial(curryPartial(curryPartial(add, 1), 2), 3); //6
curryPartial(curryPartial(add, 1, 2), 3); //6
curryPartial(curryPartial(add, 1), 2, 3); //6
curryPartial(curryPartial(add, 1), 2)(3); //6
curryPartial(curryPartial(add, 1)(2), 3); //6
curryPartial(curryPartial(curryPartial(add, 1)), 2, 3); //6
```
