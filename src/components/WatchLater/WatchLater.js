import axios from "axios";
import { useEffect, useState } from "react";
import ReactPlayer from 'react-player'
import { useVideo } from "../context/video-context";

const WatchLater = () => {

    const [list, setList] = useState([]);
    const {video , setVideo} = useVideo();

    const getWatchLater = async () => {
         const getLists = await axios.get('/api/user/watchlater',{ headers: {authorization: localStorage.getItem('token')}})
         const items = getLists.data.watchlater;
         setList(items);
    }
    console.log(list)
useEffect(() => {
    getWatchLater();
},[])
    return (
        <>
         <h2>Watch later</h2>
         <section>
    <div class="rowbar">
            <div class="quote">
     <ReactPlayer 
     url={video}
     controls
     width="100%"
     height="100%"
     lightmode
     autoPlay="autoPlay"
     />           
            </div>
        </div>
    </section>
    <div class="cast grid grid-1-2">
        { 
        list.map(show => {  
            return (
                <div class="row">
                <div class="col">
                    <div class="cast-img image" style={{backgroundImage: `url(${show.img})`}}>
                    
                    </div>
                    <div class="cast-details">
                        <span class="cname">{show.title}</span>
                        <p class="cast-info">{show.description}</p>
                        <button 
                        class="btn-show"
                        onClick={() => setVideo(show.video)}
                        >watch now</button>
                    </div>
                </div>
                </div>
            )

        })
        }
            
        </div>
        </>
    )
}



export  default WatchLater 

export const addWatchLater = async  (video) => {

    const addLists =  await axios.post('/api/user/watchlater', 
    {video},
    { headers: {authorization: localStorage.getItem('token')}} )
    console.log(addLists);
}