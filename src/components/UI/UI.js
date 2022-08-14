import './UI.css';
import img1 from './img/xlarge5339d767937c0.jpg';
import { useVideo } from '../context/video-context';
import ReactPlayer from 'react-player';
const UI = () => {

  const {data, video, setVideo} = useVideo();
    return (
        <>
        <section id="main">
        <div class="main">
            <img src={img1} class="img-1" alt="" />
            <div class="main-info">
                <span class="bt-3">&nbsp;</span>
                <h2 class="secondary">season 1 episode 1</h2>
                <h1 class="primary">
                    <span>winter is coming</span>
                  
                </h1>
            </div>
            <a href="https://youtu.be/BpJYNVhGf1s">
                <button class="watch-now">watch now</button>
            </a>
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
     autoplay="1"
     />           
            </div>
        </div>
    </section>
    <div class="cast grid grid-1-2">
        { 
        data.map(show => {  
            return (
                <div class="row">
                <div class="col">
                    <div class="cast-img">
                        <img src="img/nedstark.jpg" class="image" alt="ned stark" />
                    </div>
                    <div class="cast-details">
                        <span class="cname">{show.categoryName}</span>
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
export default UI;