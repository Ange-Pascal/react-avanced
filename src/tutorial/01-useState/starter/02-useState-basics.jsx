import { useState } from "react";

const UseStateBasics = () => { 
  const [count, setCount] = useState(0); 

  const handClick = () =>{
    setCount(count + 1)
  }
  return (
    <div>
      <h1>Click {count} times</h1> 
      <button type="button" className="btn" onClick={handClick}>Increase</button>
    </div>
  )
};

export default UseStateBasics;
