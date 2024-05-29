// to define an object with key string , value number
// using Record<keytype, valuetype>
// because sometimes, in case you just want to specify an object that have key to be a certain type, and a value to be a certain type (a fixed kv pattern)
type ButtonProps = {
    borderRadius: Record <string, number> ;
}

function Button4({borderRadius}:ButtonProps){
    return <button style={{
        backgroundColor: "orange",
        color: "white",
        padding: "10px",
        ...borderRadius,
    }}>Hi</button>
}

export default Button4