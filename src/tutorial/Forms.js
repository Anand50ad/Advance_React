import React, {useState} from 'react'

function Forms() {
    const [firstName, setFirstName] = useState(" ");
    const [email, setEmail] = useState(" ");
    const handleSubmit =(e)=>{
        e.preventDefault(); //this is used to prevent default browser variable
        console.log("hello");
    }
    return (
        <>
        <article>
            <form className="form" onSubmit={handleSubmit}>
            <div className="form-control">
                <label htmlFor="firstName">Name:</label>
                <input type="text" id="firstName" name="firstname" value={firstName} onChange={(e)=>setFirstName(e.target.value)}></input>
            </div>
            <div className="form-control">
                <label htmlFor="email">Email:</label>
                <input type="text" id="email" name="email" value={email} onChange={(e)=>setEmail(e.target.value)}></input>
            </div>
            <button type="submit">Submit</button>
            </form>
        </article>
        </>
    )
}

export default Forms
