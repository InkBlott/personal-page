import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from './components/Navbar'
import Home from './components/Home'
import Projects from './components/Projects'
import Footer from './components/Footer'
import "./styles/main.css"

function Routes() {
    return(
        <Router>
            <Navbar/>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/personal-page' component={Home}/>
                <Route exact path='/projects' component={Projects}/>
            </Switch>
            <Footer/>
        </Router>
    )
}

export default Routes;