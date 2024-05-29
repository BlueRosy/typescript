import React, {useState, useEffect} from 'react'
import Button from './Button'
import Button2 from './Button2'
import Button3 from './Button3'
import Button4 from './Button4'
import Button5 from './Button5'
import Buttonchildren from './Buttonchilren'
import ButtonState from './ButtonState'



function App() {

  let {userInput, setUserInput} = useState("");
 

  return (

    <>
    <Button backgroundColor='bg-blue-400' textColor='text-white' textSize={2} pillShape={true}></Button>
    <Button  backgroundColor='bg-green-200' textColor='text-white' textSize={3} border={["border-t-8", "border-r-8", "border-b-8", "border-l-8"]}></Button>
    <Button2 style={{
      backgroundColor: "pink",
      fontSize: "20px",
      color: "white",
      border: "1px",
      padding: "5px",
      fontWeight: "100",
    }}></Button2>
    <Button3 style={
      {
        backgroundColor: "green",
        color: "white",
        padding: "10px",
        borderRadius: "5px",
        fontWeight:"bold",
      }
    }></Button3>
    <Button4 borderRadius={
      {
        borderTopRightRadius: 10,
        borderTopLeftRadius: 15,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 5,
      }
    }></Button4>
    <Button5 onClick={() => console.log("Run !!")}></Button5>
    <Buttonchildren>
      {/* <Button5 onClick={() => console.log("hahaha")}></Button5>
      <Button5 onClick={() => console.log("OUCH!!")}></Button5> */}
      <a href="/">hahaha</a>
      <a href="/">OUCH!</a>
    </Buttonchildren>
      <ButtonState setUserInput={setUserInput} ></ButtonState>
    </>
  
    
  )
}

export default App