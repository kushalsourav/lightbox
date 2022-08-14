
import ReactPlayer from 'react-player';
import { useVideo } from "../context/video-context";
import { addWatchLater } from '../WatchLater/WatchLater';

const Explore = () => {
    const {data, datg, video, setVideo, bg} = useVideo();
   
    const filter = (data) => {
          if(datg === 'game of thrones') {
            console.log(data.filter(sh => sh.categoryName === "game of thrones") )
           return data.filter(sh => sh.categoryName === "game of thrones")
           
          }
          if(datg === 'breaking bad') {
            console.log(data.filter(sh => sh.categoryName === "game of thrones") )
           return data.filter(sh => sh.categoryName === "breaking bad")
          }
          if(datg === 'better call saul') {
            console.log(data.filter(sh => sh.categoryName === "game of thrones") )
           return data.filter(sh => sh.categoryName === "better call saul")  
          }
          if(datg === 'peaky blinders') {
            console.log(data.filter(sh => sh.categoryName === "game of thrones") )
           return data.filter(sh => sh.categoryName === "peaky blinders")
          }
          
          
    }
    const sortD = filter(data);
  
    console.log(video);
    console.log(bg);
return (
    <>
   
        <section id="main">
        <div class="main">
            <img src={bg} class="img-1" alt="" />
            <div class="main-info">
                <span class="bt-3">&nbsp;</span>
                <h2 class="secondary">season 1 episode 1</h2>
            </div>
            
      <button class="watch-now" onChange={() => setVideo('https://www.youtube.com/embed/cKmC87fXwdI')}>watch now</button>
            
        </div>
    </section>
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
        sortD.map(show => {  
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
                          <button 
                        class="btn-show"
                        onClick={() => addWatchLater(show)}
                        >watch Later</button>
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
    
  
export default Explore;