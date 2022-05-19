import ReactPlayer from "react-player"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Video = () =>{
    return(
        <div className="video-conatiner-slide">
            <h3 className="titulo-video">Testimoniales</h3>
            <div className="slider-videos">
                <Carousel infiniteLoop  showStatus={false} showIndicators={false} showThumbs={false} transitionTime={1000} 
                    renderArrowPrev={(clickHandler, hasPrev, labelPrev) =>
                hasPrev && (
                    <FontAwesomeIcon onClick={clickHandler} icon={faArrowLeft} className='arrow-left'/>
                )
            }
            renderArrowNext={(clickHandler, hasNext, labelNext) =>
                hasNext && (
                    <FontAwesomeIcon onClick={clickHandler} icon={faArrowRight} className='arrow-r'/>
                )
            }>
                    <div className="video-center">
                        <ReactPlayer
                            url={require('../../../myVideos/testimonial2.mp4')}
                            controls
                            width={210}
                        />
                    </div>
                    <div className="video-center">
                        <ReactPlayer
                        url={require('../../../myVideos/testimonial3.mp4')}
                        controls
                        width={210}
                        />
                    </div>
                    <div className="video-center">
                        <ReactPlayer
                        url={require('../../../myVideos/testimonial4.mp4')}
                        controls
                        width={210}
                        />
                    </div>
                    
                </Carousel>
            </div>
        </div>
    )
}
export default Video