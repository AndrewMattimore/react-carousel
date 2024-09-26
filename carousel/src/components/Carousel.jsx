import { useState } from 'react'

function Carousel({images}){

    const [currentSlide, setCurrentSlide] = useState(0);

    return(
        <div className = "carousel-container">
            <img src={images[currentSlide]} alt="no images available/not working"/>
        </div>
    )

}

export default Carousel