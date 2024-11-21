import { useState } from 'react';

const UseStateObject = () => {  
  const [person, setPerson] = useState({
    name: "Peter", 
    age: 30,
    hobby: "Like the game"
  })
  // const [name, setName] = useState('Peter')
  // const [age, setAge] = useState(20)
  // const [hobby, setHobby] = useState('reads books')

  const UpdateUser = () => {
    // setName('Jean')
    // setAge(30)
    // setHobby('Play football')
    setPerson({
      name: "john", 
      age: 40, 
      hobby: "Play footbal"
    })
  }


  return (
    <>
      <h1>{person.name}</h1>
      <h3>{person.age}</h3>
      <h4>{person.hobby}</h4>
      <button type="button" onClick={UpdateUser} className='btn'>Update</button>

    </>
  )
};

export default UseStateObject;
