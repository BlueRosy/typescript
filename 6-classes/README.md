## LESSON 6: classes

#### classes
1. default mode
    ```
        class Coder {
            // prop should be present here
            name: string

            // prop should be registered and initialized here
            constructor(name:string) {
                this.name = name;
            }
        }
    ```
2. visibility modifier (avoid the `default mode redundency` !) with `public, readonly, private, protected` keyword !!
    ```
        class Coder {

                // prop should be registered and initialized here
                constructor(public name:string) {
                    this.name = name;
                }
            }

    ```
    a. public: instance can access this var
    b. readonly: access but only read this prop (can be coupled with public)
    c. private: only could be accessible within class
    d. protected: could be only accessible within class and its subclasses.
3. using `!` mark to declare that variable without initalize it with constructor at first 
    ```
        class Coder{
            secondLang!: string

        }
    ```


#### subclass `extends` , with `super()` to inherit certain properties from parent class and extend their own unqiue properties
1. define: Constructors for derived classes must contain a `'super' call`. (super must come first before we try to assign anything else , which inherited from parent class)
    ```
        class WebDev extends Coder {
        constructor(
            public computer: string,
            name: string,
            music: string,
            age: number)
            {
                super(name, music, age);
                this.computer = computer;

            }
        }
    ```
    note: contructor is all params for `initiating an instance` from class. subclass can require all or part of params to be initialized from parent classes (using super(var), and it could also require unique prop to be initalized!!)

    note2: subclass do not need to initalzie the parent props with default value (although it could be initalized)

#### class implements interface
note: class must implements all the props and methods mentioned in the interface. with the aligned datatypes
    ```
        interface Musician {
        // two props and one method
        name:string,
        instrument: string,
        play(action:string):string,
    }

    class Guitarist implements Musician {
        // class implements the interface must include all props and methods inside the interface
        name: string;
        instrument: string;
    
        constructor(name:string, instrument:string)
        {
            this.name = name;
            this.instrument = instrument;
        }

        play(action:string):string {
            return `${this.name} ${action} the ${this.instrument}`;
        }
    }

    ```

#### class keyword static
static prop and method only belong to the class, rather than any instance. used for count numbers inside one class, do the summary. can be only accessed by using `classname.`

    ```
        class Peeps {
        // static keyword means count dones't apply to any initalisation. this only belong to this class itself rather than any instance of the class
        static count: number = 0;

        static getCount(): number{
            return Peeps.count;
        }

        public id: number;

        constructor(public name:string){
            this.name = name;
            this.id = ++Peeps.count;
            // first count increment by 1, then assign to this.id. this.id = Peeps.count++; means first id = count, then count+1
        }
    }

        const John = new Peeps('John');
        const Steve = new Peeps('Steve');
        const Amy = new Peeps('Amy');

        console.log(Peeps.count); // return 3
        console.log(John.id);
        console.log(Amy.id);

    ```


#### getter and setter
note: in react, just ignore this and use function-based component and use hooks to implement all of these

a getter will return sth ao you have to define the returned type. whereas the setter doesn't return anything. it is used for setting attributes. getter and setter will be used for private prop. 
when `defining a setter function, please check the passing vlaue and throw an error when the value is not valid`

```
    class Bands {
    private dataState: string[];

    constructor(){
        this.dataState = [];
    }

    // make private prop read only
    public get data(): string[]{
        return this.dataState;
    }

    public set data(value:string[]){
        if (Array.isArray(value) && value.every(e => typeof e === "string")){
            this.dataState = value;
            return;
            // setter cannot return a value
        } else throw new Error('Param is not an array of strings')
    }
        }

        const MyBands = new Bands();
        // setter
        MyBands.data = ['Neil Young', 'Led Zep']
        // getter
        console.log(MyBands.data);
        // add new band
        MyBands.data = [...MyBands.data, 'ZZ Top']
        console.log(MyBands.data);

```