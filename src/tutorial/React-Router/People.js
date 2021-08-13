import React, {useState} from 'react'
import {data} from "../data"
import {Link} from "react-router-dom"
function People() {
const [people,setPeople] = useState(data);

    return (
        <div>
            <h1>People</h1>
            {people.map((person)=>{
return <div key={person.id} className="item">
<h4>{person.name}</h4>
<Link to={`/person/${person.id}`}> {/*this will link to more info for particular list item, refer to line 27 index.js(React-router-dom)*/}
    Learn More
</Link>
</div>
            })}
        </div>
    )
}

export default People
