import nightwatch from '../../../assets/img/nightwatch.jpeg';
import kingsroad from '../../../assets/img/kingsroad.jpg';
import lordsnow from '../../../assets/img/lordsnow.webp';
import criple from '../../../assets/img/criple.jpg';
import pilot from '../../../assets/img/pilot.jpg';
import cats from '../../../assets/img/cats.webp';
import bags from '../../../assets/img/bags.jpg';
import cancerman from '../../../assets/img/cancerman.jpg';

const HomeOne = () => {

    return (
        <>
         <section>
        <h1>Welcome to our site</h1>
        <div class="container">
            <div class="horizontal"><img src={nightwatch} alt="" /></div>
            <div class="vertical"><img src={pilot} alt="" /></div>
            <div><img src={criple} alt="" /></div>
            <div class="big"><img src={cats} alt=""/></div>
            <div class="vertical"><img src={cancerman}alt="" /></div>
            <div class="horizontal"><img src={lordsnow} alt="" /></div>
            <div><img src={kingsroad} alt="" /></div>
            <div class="horizontal"><img src={bags} alt="" /></div>
            <div><img src={cancerman} alt=""/></div>
            <div><img src={pilot} alt=""/></div>
            <div class="horizontal"><img src={lordsnow} alt="" /></div>
            <div><img src={nightwatch} alt="" />
        </div>
        </div>
    </section>
        
        </>
    )
}

export default HomeOne