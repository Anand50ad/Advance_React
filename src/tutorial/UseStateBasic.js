import React, {useState} from 'react'
//use state is a named import and we must include curly braces
function UseStateBasic() {
const [day, setday] = useState("Today is a rainy day");
const handleClick=()=>{
    return(
    setday("This is a sunny day")
    );
}  
return (
        <div>
           
           <button type="button" className="btn" onClick={handleClick}>{day}</button> 
        
            
        </div>
    )
}

export default UseStateBasic;
