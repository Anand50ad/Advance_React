import React from 'react'
import About from './About'
import Error from './Error'
import Home from './Home'
import Navbar from './Navbar'
import People from './People'
import Person from './Person'
import {BrowserRouter as Router,Route,Switch} from "react-router-dom" //we want to use our router in our webpage so that we would require a router which can route our components to their respective links and we will also require some switch to enable and disable our router

function Index() {
    return (
        
        <Router>
        <Route>
         <Navbar />
        </Route>
        <Switch> {/*Switch is used to enable disable our separate pages so they dont interfere with each other*/}
<Route exact path="/"> {/*we can use either very unique path routes or we can use exact*/}
    <Home />
</Route>
<Route path="/about">
    <About />
</Route>
<Route path="/people">
<People />
</Route>
 <Route path="*"> {/*path * denotes all the paths that are not specified by us  and error should be at last beacuse switch takes you to the route encountered first*/}
 
<Error />
</Route>
        </Switch>
        </Router>
        
    )
}

export default Index
