
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import bannarImg1 from '../../../assets/home/01.jpg'
import bannarImg2 from '../../../assets/home/02.jpg'
import bannarImg3 from '../../../assets/home/03.png'
import bannarImg4 from '../../../assets/home/04.jpg'
import bannarImg5 from '../../../assets/home/05.png'
import bannarImg6 from '../../../assets/home/06.png'

function Banner() {
  return (
    <Carousel showArrows={true} autoPlay infiniteLoop >
                <div>
                    <img src= {bannarImg1} />

                </div>
                <div>
                    <img src={bannarImg2} />

                </div>
                <div>
                    <img src={bannarImg3} />

                </div>
                <div>
                    <img src={bannarImg4} />

                </div>
                <div>
                    <img src={bannarImg5} />

                </div>
                <div>
                    <img src={bannarImg6} />

                </div>
            </Carousel>
  )
}

export default Banner