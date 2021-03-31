import React,{Component} from 'react'
import {Link} from 'react-router-dom';

class ShowVidoes extends Component{
    render(){
        const list=
        this.props.data.map(data=>{
                return(
                    <div key={data._id} style={{display:'inline',textAlign:'center',float:'left',marginLeft:'40px',marginTop:'20px'}} >
                        {/* <a href={data.videourl} target="blank"><img src={data.imageurl} alt="Loading failed"></img></a> */}
                        <Link to={`/videos/${data._id}`} target="blank"><video height="250px" width="200px" onMouseOver={event => event.target.play()} onMouseOut={event => event.target.pause()} poster={data.imageurl} muted="muted" loop preload="auto">
                             <source src={data.videourl} type="video/mp4"/>
                             Your browser does not support the video tag.
                        </video>
                        </Link><br/>
                        <span>{data.names}</span><br/>
                        {/* <span>{data.videourl}</span>    */}
                    </div>
                )
            })
        
        return(
            <div>{list}</div>


        );
    }
}
export default ShowVidoes;