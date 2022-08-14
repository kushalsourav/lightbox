import { useVideo } from "../../context/video-context";
import { useNavigate } from "react-router-dom";

const HomeTwo = () => {
    const {state, setDatg,setBg} = useVideo();
     
    const navigate = useNavigate();
 
    return (
        <>
        <section id="products">
        <h2 class="heading-secondary">top webseries</h2>
        <div class="grid items grid-1-4">
        {
            state.map(show => {
            return (
                <>
                    <div class="item">
                            <img src={show.url} alt="" class="image" />
                            <button 
                            onClick={() => 
                                {
                                    setBg(show.backgroundImage)
                                    setDatg(show.categoryName)
                                    navigate('/Explore')
                                   
                                }} class="btn-see">see more</button>
                    </div>
                </>
            )
            })
        }
        </div>   
    </section>
        </>
    )
}

export default HomeTwo;