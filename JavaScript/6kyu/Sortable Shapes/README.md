---6 kyu---Sortable Shapes

---

Although shapes can be very different by nature, they can be sorted by the size of their area.

Task:

    Create different shapes that can be part of a sortable list. The sort order is based on the size of their respective areas:
        The area of a Square is the square of its side
        The area of a Rectangle is width multiplied by height
        The area of a Triangle is base multiplied by height divided by 2
        The area of a Circle is the square of its radius multiplied by π
        The area of a CustomShape is given

    The default sort order of a list of shapes is ascending on area size:

```js
    let side = 1.1234;
    let radius = 1.1234;
    let base = 5;
    let height = 2;

    let shapes = [ new Square(side)
                 , new Circle(radius)
                 , new Triangle(base, height)
                 ];
    shapes.sort( (a,b) => Number(a>b)-Number(a<b) ); // instead of the default lexicographical sort, natural sort will be used
```

    Use the correct π constant for your circle area calculations:

```js
    Math.PI
```
