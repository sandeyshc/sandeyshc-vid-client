import React, { Component } from "react";
import api from "../api";


class VideosGet extends Component {
	constructor(props) {
		super(props);

		this.state = {
			id: this.props.match.params.id,
			names: "",
			imageurl: "",
			videourl: "",
		};
	}
    componentDidMount = async () => {
        console.log(this.state)
		const { id } = this.state;
		const video = await api.getVideoById(id);

		this.setState({
			names: video.data.data.names,
			videourl: video.data.data.videourl,
			imageurl: video.data.data.imageurl,
		});
	};
    render() {
        console.log(this.state)
        const { names, imageurl, videourl } = this.state;
        console.log(names,"ghh",names!=="")
        let showTable = true;
        // console.log("vid",videos)
		if (names!=="") {
			showTable = false;
            console.log(names)
        }
        // style={{width: "100%", height: "600px", overflow: "hidden"}}
		return (
            <div><br/>
                {!showTable && (
                    <div>
            <video poster={imageurl} loop muted="muted" preload="auto" controls height="500px" width="800px">
             <source src={videourl} type="video/mp4" />
             Your browser does not support the video tag.
        </video><br/>
        <span style={{marginLeft:'10px'}}>{names}</span><br/>
        </div>)}
        </div>
            );
        
    }
}
export default VideosGet;