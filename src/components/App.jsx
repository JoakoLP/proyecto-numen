import Carousel from "./components/carousel"


const slides = [
    

]

export default function App () {
    return(
        <main className="App">
            <div className="max-w-lg">
                <Carousel autoSlide={true} autoSlideInterval={1000}>
                    {slides.map((s)=>(
                        <img src={s} />
                    ))}
                </Carousel>
            </div>
        </main>
    )
}