import React from 'react'
import axios from 'axios'
function LearningJSON() {
   const handleClick=(b)=>{
       const promise = axios.post("http://localhost:4000/users",{ //setting the port code
           name: "bruno"}, {headers:{ //setting up the object we want to create
               ['content-type']: 'application/json' //setting up the data type
           }}
)
promise.then(response => {
    console.log(response) //used to log response from server
})
promise.catch(error => {
    console.log(error); //used to log error from server
})  
let c=b;
console.log(b);
}
  const getUsers = () =>{
      axios.get("http://localhost:4000/users").then(users =>{{
          console.log(users);
      }})
  }
    return (
       <>
       <h2>Random Title</h2>
            <button type="button" className="btn" onClick={handleClick}>post user</button>
            <button type="button" className="btn" onClick={getUsers}>get user</button>
        </>
    )
}

export default LearningJSON
