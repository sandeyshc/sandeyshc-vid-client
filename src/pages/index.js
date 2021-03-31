import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// import 'bootstrap/dist/css/bootstrap.min.css'
// import { NavBar } from '../components'
import VideosList from './VideosList'
import NavBar from '../components/Navbar'
import VideosInsert from './VideosInsert'
import VideosGet from './VideosGet'

function App() {
    return (
        <Router >
        <NavBar / >
        <Switch >
        <Route path = "/videos/list"
        exact component = { VideosList }/> 
        <Route path = "/videos/create"
        exact component = { VideosInsert }/> 
        {/* <Route path = "/videos/update/:id"
        exact component = { VideosUpdate }/>  */}
        <Route path="/videos/:id"
        exact component={VideosGet}/>
        </Switch> 
        </Router>
    )
}

export default App