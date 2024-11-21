import { data } from "../../../data";
import { useState } from "react";

const UseStateArray = () => {
  const [people, setPeople] = useState(data);

  const removeItem = (id) => {
    const newPeople = (people.filter((person) => person.id !== id)); 
    setPeople(newPeople)
  }; 

  const clearItem = () =>{
    setPeople([]);
  }

  return (
    <div>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id}>
            <h4>{name}</h4>
            <button type="button" onClick={() => removeItem(id)}>
              Remove me
            </button>
          </div>
        );
      })} 
      <button type="button" onClick={clearItem} className="btn">Clear items</button>
    </div>
  );
};

export default UseStateArray;
