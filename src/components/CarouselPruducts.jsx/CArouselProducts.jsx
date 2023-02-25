import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from './Card';
import { productCards, responsive } from './DataCard';

function CarouselProducts() {

const cards = productCards.map((item) => (
    <Card
    url={item.url}
    title={item.title}
    price={item.price}
    description={item.description}

    />
));

  return (
    
    <div className="container ">
          <h1 className="title-seccion  ">Productos destacados</h1>

        <Carousel responsive={responsive}>{cards}      
        </Carousel>
    </div>
    
  )
}

export default CarouselProducts;