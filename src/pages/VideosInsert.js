import React, { Component } from "react";
// import { unmountComponentAtNode } from "react-dom";
import api from "../api";
import Axios from "axios";

class VideosInsert extends Component{
    constructor(props) {
		super(props);

		this.state = {
			names: "",
			imageurl: "",
			videourl: "",
            image :"",
            video:"",
            cool:"",
            cools:''
		};
	}
    handleChangeInputName = async (event) => {
		const names = event.target.value;
		this.setState({ names });
	};
    
    // handleFileInputChange = async(e) => {
    //     this.setState({image:e.target.files[0]},()=>{this.postDetails()})
    //      console.log(e.target.files[0],"cool",this.state.image);



    //     // previewFile(file);
    //     // setSelectedFile(file);
    //     console.log(e.target.value);
    // };
    // postDetails=()=>{
    //     const uploadImage = async (base64EncodedImage) => {
    //         console.log(base64EncodedImage,"yoo")
    //         try {
    //             const data=JSON.stringify({
    //                 datas:base64EncodedImage
    //               });
    //             const payload={data}
    //             console.log(payload)
    //             await api.getDatas(payload).then((res) => {
    //                 window.alert(`Movie inserted successfully`);
                    
    //             });
                
    //         } catch (err) {
    //             console.error(err);
                
    //         }
    //     };
    //     const reader = new FileReader();
    //     console.log(this.state.image,"image state")
    //     reader.readAsDataURL(this.state.image);
    //     reader.onloadend = () => {
    //         // console.log(reader.result,"yes")
    //         uploadImage(reader.result);
    //     };

    // }

    // postDetails = ()=>{
    //     const data = new FormData()
    //     data.append("file",this.state.image)
    //     data.append("upload_preset","photos")
    //     data.append("cloud_name","sandy59")
    //     fetch("https://api.cloudinary.com/v1_1/sandy59/image",{
    //         method:"post",
    //         body:data,
    //         mode:'no-cors'
    //     })
    //     .then(res=>res.json())
    //     .then(data=>{
    //        console.log(data.url)
           
    //     })
    //     .catch(err=>{
    //         console.log(err)
    //     })
 
     
    // }
    // postDetails=async()=>{
    //     const formdata = new FormData();

    //     formdata.append("image", this.state.image);
    //     formdata.append("upload_preset","photos")
    //     formdata.append("cloud_name","sandy59")
        
    //     await Axios.post("https://api.cloudinary.com/v1_1/sandy59/image", formdata)
    //       .then((res) => console.log("res", res.data))
    //       .catch((error) => console.error(error));
    // }


    handleFileInputChange = (e) => {
        const file = e.target.files[0];
        // previewFile(file);
        this.setState({image:file,cools:'uploading'},()=>{
            if (this.state.image==="") return;
            const reader = new FileReader();
            console.log(this.state.image)
            reader.readAsDataURL(this.state.image);
    
            const uploadImage = async (base64EncodedImage) => {
                try {
                    // await fetch('http://localhost:3001/upload', {
                    //     method: 'POST',
                    //     body: JSON.stringify({ data: base64EncodedImage }),
                    //     headers: { 'Content-Type': 'application/json' },
                    // });
                    const apiss = Axios.create({
                        baseURL: 'https://sandy-vid.herokuapp.com/upload',
                    })
                    var body=JSON.stringify({ data: base64EncodedImage });
                    console.log("uploading",body,apiss)
                    const headers={
                        'Content-Type': 'application/json'
                    }
                    apiss.post(`/image`, body,{
                        headers:headers
                    }).then(vid=>{
                        console.log(vid,"myvid",vid.data.msg)
                        this.setState({imageurl:vid.data.msg,cools:"uploaded"})
                    })
                    .catch(err=>{
                        console.log("err",err)
                    })
                    // setFileInputState('');
                    // setPreviewSource('');
                    console.log('Image uploaded successfully');
                } catch (err) {
                    console.error(err);
                    console.log('Something went wrong!');
                }
    
    
    
        };
        reader.onloadend = () => {
            uploadImage(reader.result);
        };
    
    
    
    
        reader.onerror = () => {
            console.error('AHHHHHHHH!!');
            console.log('something went wrong!');
        };
        });
        // setFileInputState(e.target.value);
    };

    // previewFile = (file) => {
    //     const reader = new FileReader();
    //     reader.readAsDataURL(file);
    //     reader.onloadend = () => {
    //         setPreviewSource(reader.result);
    //     };
    // };
    handleFileVideoChange=async(e)=>{
        const myfile=e.target.files[0];
        console.log(e,e.target.value,myfile,myfile.path,e.target.files,myfile.name,myfile.result,"cool",myfile.path)
        this.setState({video:myfile,cool:'uploading'},()=>{
            const uploadVideo = async (base64enco) => {
                try {
                    // await fetch('http://localhost:3001/upload', {
                    //     method: 'POST',
                    //     body: JSON.stringify({ data: base64EncodedImage }),
                    //     headers: { 'Content-Type': 'application/json' },
                    // });
                    const apiss = Axios.create({
                        baseURL: 'https://sandy-vid.herokuapp.com/upload',
                    })
                    // var body=JSON.stringify({ data: base64EncodedImage });
                    // console.log("uploading",body,apiss)
                    // const headers={
                    //     'Content-Type': 'application/json'
                    // }
                    // const headers={
                    //     'Content-Type': 'application/x-www-form-urlencoded'
                    // }
                    // var body=JSON.stringify({ data: this.state.video });
                    // var formData=new FormData();
                    // formData.append('file',this.state.video)
        
                    // var data=this.state.video
                    console.log(this.state.video,this.state.cool)
                    var bodys=JSON.stringify({ data: base64enco });
                    console.log("uploading",bodys,apiss)
                    const headers={
                        'Content-Type': 'application/json'
                    }
                    apiss.post(`/video`, bodys,{
                        headers:headers,
                        onUploadProgress: data => {
                            //Set the progress value to show the progress bar
                            console.log(Math.round((100 * data.loaded) / data.total))
                          },
                    }).then(vid=>{
                        console.log(vid,"myvidss",vid.data.msg)
                        this.setState({videourl:vid.data.msg,cool:"uploaded"})
                    })
                    .catch(err=>{
                        console.log("err",err)
                    })
                    // setFileInputState('');
                    // setPreviewSource('');
                    console.log('Video uploaded successfully');
                } catch (err) {
                    console.error(err);
                    console.log('Something went wrong!');
                }
        
        
        // const readers = new FileReader();
        // console.log(this.state.video)
        // readers.readAsDataURL(this.state.video);
            };
            const readers = new FileReader();
            console.log(this.state.video)
            readers.readAsDataURL(this.state.video);
        readers.onloadend = () => {
            uploadVideo(readers.result);
        };
        readers.onerror = () => {
            console.error('AHHHHHHHH!!');
            console.log('something went wrong!');
        };
        
        })
        // try {
        //     // await fetch('http://localhost:3001/upload', {
        //     //     method: 'POST',
        //     //     body: JSON.stringify({ data: base64EncodedImage }),
        //     //     headers: { 'Content-Type': 'application/json' },
        //     // });
        //     const apiss = Axios.create({
        //         baseURL: 'http://localhost:3001/upload',
        //     })
        //     // var body=JSON.stringify({ data: base64EncodedImage });
        //     // console.log("uploading",body,apiss)
        //     // const headers={
        //     //     'Content-Type': 'application/json'
        //     // }
        //     // const headers={
        //     //     'Content-Type': 'application/x-www-form-urlencoded'
        //     // }
        //     // var body=JSON.stringify({ data: this.state.video });
        //     var formData=new FormData();
        //     await formData.append('file',myfile)
        //     var rs;
        //     // var data=this.state.video
        //     await console.log(myfile,this.state.video,"yoo",formData)
        //     for (var key of formData.entries()) {
        //         rs=key[1]
        //         console.log(key[0] + ', ' + key[1])
        //     }
        //     await apiss.post(`/video`, rs).then(vid=>{
        //         console.log(vid,"myvidss")
        //     })
        //     .catch(err=>{
        //         console.log("err",err)
        //     })
        //     // setFileInputState('');
        //     // setPreviewSource('');
        //     console.log('Video uploaded successfully');
        // } catch (err) {
        //     console.error(err);
        //     console.log('Something went wrong!');
        // }

// const readers = new FileReader();
// console.log(this.state.video)
// readers.readAsDataURL(this.state.video);
    };
    
    handleSubmitFile = async(e) => {
        e.preventDefault();
        const { names, imageurl, videourl }=this.state;
        if(names!=="" && imageurl!=="" && videourl!==""){
        const payload={names,imageurl,videourl}

		await api.insertVideo(payload).then((res) => {
			window.alert(`Movie inserted successfully`);
            console.log(this.state.cool)
			this.setState({
				names: "",
				video: "",
				image: "",
                imageurl:"",
                videourl:"",
                cool:"",
                cools:""
			});
		});
    }
    else{
        alert('You didn\'t upload image or video or name')
    }
    
}



    render(){
        console.log(this.state.cool)
        return(
            <div >
                <label>Name</label><br/>
                <input type="textbox" onChange={this.handleChangeInputName} value={this.state.names}/><br/>
                <label>Upload Image</label><br/>
                <input type="file" onChange={this.handleFileInputChange}/>
                <span style={{color:'blue'}}>{this.state.cools}</span><br/>
                <label>Upload Video</label><br/>
                <input type="file" onChange={this.handleFileVideoChange}/>
                <span style={{color:'blue'}}>{this.state.cool}</span><br/><br/>
                <input type="submit" value="submit" onClick={this.handleSubmitFile}/>
            </div>
        );
    }
}
export default VideosInsert;