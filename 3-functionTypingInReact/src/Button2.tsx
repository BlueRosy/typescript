// step 10: concat all of props into one style
type bProps = {
    style: {
        backgroundColor: string,
        fontSize: string,
        color: string,
        border: string,
        padding: string,
        fontWeight: string,
    };
}

function Button2({style}:bProps){
    return <button style={style}>click me</button>
}

export default Button2