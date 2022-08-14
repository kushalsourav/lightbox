import criple from '../../../assets/img/criple.jpg'
const HomeThree = () => {

    return (
        <>
        <section id="aboutus">
        <div class="grid-container">
            <div class="item1">
                <span class="headingsecondary">Watch and enjoy our content</span>

                <ol class="orderlist">
                    <li class="item-list">watch best series of all time</li>
                    <li class="item-list">high quality and watch with subs</li>
                    <li class="item-list">life time access , subscribe now</li>
                </ol>
            </div>
            <div class="item2">
                <img src={criple} class="image" alt="" />
            </div>
        </div>
    </section>
    <footer class="footer">
        all <span>&copy;</span> copyrights 2021 reserved
    </footer>
        </>
    )
}

export default HomeThree