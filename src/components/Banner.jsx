import Carousel from 'react-bootstrap/Carousel'

function Banner() {
    return (
        <>
            <Carousel>
                <Carousel.Item interval={2000}>
                    <img
                        className="h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[700px] 2xl:h-[850px] w-full object-cover"
                        src='images/image2.jpg'
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3 className='text-2xl md:text-3xl lg:text-5xl text-gray-400 font-semibold font-serif py-1 lg:py-3' >CHRISTMAS SALE</h3>
                        <p className='text-sm lg:text-2xl text-white font-normal'>DON'T COMPRMISE ON STYLE! GET FLAT 30% OFF ON NEW ARRIVALS.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <img
                        className="h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[700px] 2xl:h-[850px]  w-full  object-cover"
                        src='images/image4.jpg'
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3 className='text-2xl md:text-3xl lg:text-5xl text-gray-200 font-semibold font-serif py-1 lg:py-3'>SALE IS LIVE</h3>
                        <p className='text-sm lg:text-2xl text-white font-normal'>DON'T COMPRMISE ON STYLE! GET FLAT 30% OFF ON NEW ARRIVALS.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <img
                        className="h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[700px] 2xl:h-[850px]  w-full object-cover"
                        src='images/image3.jpg'
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3 className='text-2xl md:text-3xl lg:text-5xl text-gray-700 font-semibold font-serif py-1 lg:py-3'>WINTER COLLECTION</h3>
                        <p className='text-sm lg:text-2xl text-gray-700 font-normal'>DON'T COMPRMISE ON STYLE! GET FLAT 30% OFF ON NEW ARRIVALS.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    )
}

export default Banner
