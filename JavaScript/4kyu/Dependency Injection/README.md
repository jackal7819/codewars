---4 kyu---Dependency Injection

---

Did you hear about Dependency Injection pattern? The main idea of this pattern is that you may have ability to pass dependencies into your function in any order and they will be resolved automatically. Take a look at this:

```js
var myDependentFunc = inject(function (secondDependency, firstDependency) {
  firstDependency();
  secondDependency();
});

myDependentFunc();
```

As you can see we just put some variables into the function's signature and work with them as usually. But we know nothing about where these variables are located! Let's assume that all dependencies are stored in the single hash object (for instance 'deps') and the injector function will be sought among 'deps' properties:

```js
var deps = {
  'firstDependency': function () {return 'this is firstDependency';},
  'secondDependency': function () {return 'this is secondDependency';},
};
```

Ok, I hope this is clear. Also, in order to setup DependencyInjector (DI) we need to specify dependency object:

```js
var DI = function (dependency) {
  this.dependency = dependency;
};
```

Your task is create DI.prototype.inject method that will return a new function with resolved dependencies. And don't forget about nested functions. You shouldn't handle them.
