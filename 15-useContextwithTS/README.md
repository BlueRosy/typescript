# 15. useContext + TS

useContext: passing params down to the children components so that when defining in the one place, different children can apply the context in other places

1. create the context, notice: initContext should assign some initState value, eg. some attributes, we should give it 0 or "", some function , even though we don't define them, we should give it a () => {}
note: we cannot mix it with the type of initContext that we created !!

```
    createContext(initContext)
```

2. create  a context provider, which is a function that will return a ReactElement `<context.Provider value={{multiple functions}}></context.Provider>`

3. create a function to return useContext(context)


TS hard point: everytime before we create these three, `we have to define the type it will return` . which might seem to be redundant but good for typecheck.


