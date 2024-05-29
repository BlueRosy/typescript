#### filetree:

````
folder -
       |
       src   -- index.html
       |     |
       |     |_ main.js
       |
       build  -- main.ts

src: static image video src, and src codes (.ts)
build: put the compiled files, .js, .css files, ``` .html file

````

`make ts know all the .ts should be in the src folder` + `make .js inside js folder inside the build folder `: make a `tsconfig.json` file to configure all things done !!

1. create tsconfig.json

```
    tsc --init
```

2. uncommon "rootDir" key, which Specify what module code is generated. update it to the root folder within your source files (`./src`)

3. uncommon "outDir" key, which Specify an output folder for all emitted files. update it to the build folder (`./build/js`)

4. type

```
    tsc -w // look for all the .ts files in the src and continuously incrementally compile to .js file
```

we can see it automatically create the js folder inside the build folder and create a main.js for us.

- anytime we create a new .ts file or update the code inside .ts file, then the code will be compiled automatically in the js folder.

- and because of tsconfig.json file, now after compilation, we can find that `let compile to let rather than var` because in the tsconfig.json
  we are using

```
    "target": "es2016",
    // this is the JavaScript language version for emitted JavaScript and include compatible library declarations. but we can change it to an older version so that our compilation will be compatiable with the older brower. eg. es5 , then you will find all the .ts file -> compiled to .js file, they compile let -> var
```

- finally, by default, when we delete any .ts file, it doesn't automatically helps us delete any .js file in the js folder, but we need to synchrony the both deletion
  `make sure to delete both simulateously`

- by default, when we create any .ts file outside the src folder, then it will create a .js file `(in the watch mode)` in the same folder (rather than in the build/js folder), but obviously, we want to prevent any .ts compilation outside the src folder
  solution: in the tsconfig.json file, at the bottom add

```
    ,
  "include": [
    "src"
  ]
```

now when we create a new ts file outside the src folder, it will not create a .js file outside the src automatically

#### ts vs js

1. ts is a strong datatype language vs js is a dynamic weak typing language.

```
    e.g. let a = 12;
    let b = '6';
    console.log(a / b);
```

this is a valid js version , because js doesn't mind the data coercion between 12 and 6 (js has dynamic data. so it can coerce the data to the type you want). so if you write it in the js, then you will get 2, but in .ts file you will get an error (ts will define b as a string but a as a number)
`note: in the console, we still can see the results, because we check .js version (ts doesn't prevent js to present anything even though typescript contains some error messages), which allows these coersion to automatically happen, but in the typescript, there are two errors `. 2. ts doesn't prevent js to run normally, so if the code is valid in the js version, then it should be presented in the lively server or hosting web. but ts does `give us some error/warning messages that can help you write code better !!, compiler doesn't like our code`

`to prevent this behavior, when any error in ts, then prevent the creation of js `.

```
    "noEmitOnError": true,
```

this will make you in the watch mode, to prevent the compilation when there are any error in ts file (if don't want to change the tsconfig.json file (permanently), but still want to prevent the compilation when error in ts occurs occasionally), then in the terminal. type

```
   tsc --noEmitOnError -w
```

3.  ts to declare a datatype: let var:datatype
