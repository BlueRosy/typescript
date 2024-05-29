## LESSON 5: Type Assertions / Type Casting
quite similar to type casting. can be replaced one on one
sometimes, TS just know the general type for a certain element you will get from the webpage DOM, but you now a lot more better than TS about which type the object you want to get.

syntax: ` let/const a = val as b` or `let/const a =<type>val` in pure TS ( combining it with JSX’s syntax would introduce certain parsing difficulties. As a result, TypeScript disallows angle bracket type assertions in .tsx files. thus, must use `as` to cast type in react when using .tsx file. `as` can be used in both ts and .tsx file for type assertion!!), where a might be at one type at first, converted as b type later on

1. casting allows to `convert to more or less specific` (should be fine either from larger range to smaller or from smaller to larger range if the assigned value in included in all of these types)
2. if the type is not overlapping, sometimes TS will give us an error/warning message about the casting e.g.`10 as string`, but if you really want to, then use `force typecasting or double typecasting`
```
    (10 as unknown) as string;
```

3. DOM element type Assertion:
`Element, HTMLElement, HTMLImgElement` (from less specific to more specific)
    - type casting: `as`
    - type casting: `!` (to emphasize it is a `not NULL element` if TS infer it possibly to be a null element)
    - some DOM elment may not contain an attribute, so you might still get error message e.g `Property 'src' does not exist on type 'HTMLElement'.` The solution: type casting to an DOM elementtype with src property
    - note: ! and as and <> do not need to occur simulateously!!

    ```
        const myImg = document.querySelector('img')!;
        myImg.src; // should be fine because now it must be an HTMLImageElement

        const myImg2 = document.getElementById("#img") as HTMLImageElement;
        myImg2.src // should be fine

        const myImg3 = <HTMLImageElement>document.getElementById('#img');
        myImg3.src; // should be fine, but not work in react .tsx file
    ```
