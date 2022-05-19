import './slider.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const SlidePrincipal = () => { 
    return (
        <div className="carousel-wrapper">
            <Carousel infiniteLoop autoPlay interval={3000} showArrows={false} showStatus={false} showIndicators={false} showThumbs={false} transitionTime={1000}>
                <div className='item-s'>
                    <img src="https://i.imgur.com/iUTw9KK.png" alt=''  className='img'/>
                </div>
                <div className='item-s'>
                    <img src="https://i.imgur.com/EnDEEwr.jpg" alt='' className='img'/>
                </div>
                <div className='item-s'>
                    <img src="https://i.imgur.com/Od9SRaD.jpg" alt='' className='img'/>
                </div>
            </Carousel>
        </div>
    );
}
export default SlidePrincipal