import { useState } from "react";

const UserChallenge = () => {
const [user, setUser] = useState(null) 

const login = () => {
  setUser({name: "Vegan food fast"})
}
const logout = () =>{
  setUser(null)
}
  return (
    <div>
      {user ? <div> 
        <h4>hello there, {user.name}</h4> 
        <button className="btn" onClick={logout} >Logout</button>
      </div> : <div> 
        <h4>Hello please, login</h4> 
        <button className="btn" onClick={login} >Login</button>
      </div> }
    </div>
  )
};

export default UserChallenge;
