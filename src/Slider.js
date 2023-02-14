import {Carousel} from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import slideImg1 from './img/35_スマホLsA.JPG';
import slideImg2 from './img/_MG_3537.JPG';
import slideImg3 from './img/_MG_3549.JPG';

function Slider(){
    return(
        <Carousel>
            <div>
                <img src={slideImg1} alt=''/>
                <p className="legend">Legend 1</p>
            </div>
            <div>
                <img src={slideImg2} alt=''/>
                <p className="legend">Legend 1</p>
            </div>
            <div>
                <img src={slideImg3} alt=''/>
                <p className="legend">Legend 1</p>
            </div>
        </Carousel>
    )
}

export default Slider;