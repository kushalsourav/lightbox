import { createContext,  useContext, useEffect, useState } from "react";
import axios from "axios";

const videocontext = createContext();

const useVideo = () => useContext(videocontext);

const VideoProvider = ({children}) => {
const [state, setState] = useState([]);
const [data, setData] = useState([]);
 const [bg, setBg] = useState('');
const [datg, setDatg] = useState('game of thrones');
const [video , setVideo] = useState('');


    const getCategories = async () => {
        const categories = await axios.get('/api/categories');
        const data = categories.data.categories;
        setState(data);
}
const getViedos =async () => {
    const videos = await axios.get('/api/videos');
    const video = videos.data.videos;
    setData(video);
   
}


useEffect(()=> {  
   getCategories();
   getViedos();
},[])

return (
    <videocontext.Provider value={{state, data,  datg, setDatg, video, setVideo,setBg, bg, getViedos }}>
        {children}
    </videocontext.Provider>
)
}

export {VideoProvider, useVideo}
