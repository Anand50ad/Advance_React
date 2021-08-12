import React from 'react'
import axios from 'axios'
function LearningJSON() {
   const handleClick=(b)=>{
       const promise = axios.post("http://localhost:4000/users",{
           name: "bruno"}, {headers:{
               ['content-type']: 'application/json'
           }}
)
promise.then(response => {
    console.log(response)
})
promise.catch(error => {
    console.log(error);
})  
let c=b;
console.log(b);
}
    return (
       <>
       <h2>Random Title</h2>
            <button type="button" className="btn" onClick={handleClick}>post user</button>
            {/* <button type="button" className="btn" onClick={getUsers}>get user</button> */}
        </>
    )
}

export default LearningJSON
