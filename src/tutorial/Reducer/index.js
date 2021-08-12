import React, {useState, useReducer} from 'react'
import Modal from './modal'
import {data} from "../data"

function Index() {
    const [name,setName] = useState('');
    const [people,setPeople] = useState(data);
    const [showModal, setShowModal] = useState(false); 
    const handleSubmit = (e) =>{
        e.preventDefault();
        if(name){
            setShowModal(true);
            setPeople([...people,{id:new Date().getTime().toString(), name}])
            setName("");
        }else{
            showModal(true)
        }
    }
    return (
       <>
       {showModal && <Modal />}
       <form className="form" onSubmit={handleSubmit}>
       <div> 
           <input type="text" value={name} onChange={(e) =>{setName(e.target.value)}}></input>
       </div>
        <button type="submit">Add user</button>
       </form>
      {
          people.map((person) =>{
              return <>
                 <div key={person.id}>
                     <h4>{person.name}</h4>
                 </div>
              </>
            }
          
          )}
       </>
    )
}

export default Index
