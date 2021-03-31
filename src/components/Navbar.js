import React from 'react'
import {Link} from 'react-router-dom'


function Navbar(){
    return(
        <div style={{backgroundColor:"#000099"}}>
            <Link to="/videos/list" style={{paddingLeft:'30px'}}><img src="https://image.shutterstock.com/image-photo/mountains-under-mist-morning-amazing-600w-1725825019.jpg" alt="img not loading" height="50px" width="50px"/></Link>
            <Link to="/videos/list" style={{color:"#ffffff",paddingLeft:'40px'}}>List Videos</Link>
            <Link to="/videos/create" style={{color:"#ffffff",paddingLeft:'40px'}}>Create Video</Link>
        </div>
    );
}
export default Navbar;