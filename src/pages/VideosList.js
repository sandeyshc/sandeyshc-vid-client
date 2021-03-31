import React, { Component } from "react";
import api from "../api";
import ShowVideos from '../components/ShowVideos';



class VideoList extends Component{
    constructor(props) {
		super(props);
		this.state = {
			videos: [],
			isLoading: false,
		};
	}
    componentDidMount = async () => {
		this.setState({ isLoading: true });

		await api.getAllVideos().then((videos) => {
            console.log(videos.data.data)
			this.setState({
				videos: videos.data.data,
				isLoading: false,
			});
		});
	};
    render() {
		const { videos, isLoading } = this.state
        let showTable = true;
        console.log("vid",videos)
		if (!videos.length) {
			showTable = false;
		}

		return (
			<div>
				{showTable && (
					<ShowVideos
						data={videos}
					/>
				)}
			</div>
		);
        
    }
}
export default VideoList;