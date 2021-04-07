import React,{Component} from 'react'
import {Link} from 'react-router-dom';

class ShowVidoes extends Component{
    
    // list=[false,false]
    // /90/ state=({list:[false,false]})
    constructor(props){
        super(props);
        this.state=({list:Array.from({length: this.props.data.length}, i => i = false)})
        this.handlecan = this.handlecan.bind(this)
    }
    // componentDidCatch(err,info){
    //     console.log(err,info,'ERR')
    // }
    handlecan(e,index){
        console.log(this.state.list)
        // this.setState({isloade:true})
        // this.setState(prevState => ({
        //     list: {
        //         ...prevState.list,
        //         prevState.list[index]: true,
        //     },
        // }))
        const newItems = [...this.state.list];
        newItems[index] = true;
        this.setState({ list:newItems });

    }
    handleMouseover(e,ind){
        console.log(this.state.list)

        console.log(e,ind)
        // console.log(e.target.play(),e.target.play()===undefined,e.target.play().then(r=>console.log(r)))
        // try{
        //     console.log(e.target.play(),e.target.readyState,e.target.ended,e.target.paused)
        //     if(e.target.readyState===4 || e.target.readyState===3 || e.target.readyState===2){
        //         e.target.play()
        //         }
                
        // }
        // catch(err){
        //     console.log("wait for a sec its loading")
        // }
        if(this.state.list[ind]){
            e.target.play()
        }
        else{
            console.log("wait for a sec")
        }

    }
    handlemouseout(e,ind){
        console.log(this.state.list)

        // console.log(e.target.play(),e.target.play()===undefined,e.target.play().then(r=>console.log(r)))
        // try{
        //     // console.log(e.target.play(),e.target.readyState,e.target.ended,e.target.paused)
        //     console.log(e.target,e.target.readyState,!e.target.paused)
        //     if(!e.target.paused && (e.target.readyState===4 || e.target.readyState===3 || e.target.readyState===2 )){
        //         e.target.pause()
        //         }
            
                
        // }
        // catch(err){
        //     console.log("wait for a sec its loading")
        // }
        console.log(!e.target.paused)
        if(!e.target.paused){
            e.target.load()
        }
        else{
            console.log("Not playing")
        }

    }
    // UNSAFE_componentWillMount(){
    //     console.log(this.props.data.length)
    //     console.log([false]*(this.props.data.length))
    //     this.setState({list:Array.from({length: this.props.data.length}, i => i = false)})
    // }

    // event => if(event.target.paused) {event.target.pause()
    // event => event.target.play()
    render(){
        
        console.log(this.state.list)
        const list=
        this.props.data.map((data,index)=>{
                return(
                    <div key={data._id} style={{display:'inline',textAlign:'center',float:'left',marginLeft:'40px',marginTop:'20px'}} >
                        {/* <a href={data.videourl} target="blank"><img src={data.imageurl} alt="Loading failed"></img></a> */}
                        <Link to={`/videos/${data._id}`} target="blank">
                            <video height="250px" width="250px" onMouseOver={(e)=>this.handleMouseover(e,index)} onMouseOut={(e)=>this.handlemouseout(e,index)} poster={data.imageurl} 
                            onCanPlay={   
                            (e)=>this.handlecan(e,index)

                        } muted="muted" loop preload="auto" onError={console.log("error occureed",index)}>
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