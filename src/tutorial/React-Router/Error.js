import React from 'react'
import {Link} from "react-router-dom"
function Error() {
    return (
        <div>
            <h4>404: Not Found</h4>
        <Link to="/" className="btn">Go back to home</Link>
        </div>
    )
}

export default Error
