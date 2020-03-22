import React, { useState, useEffect} from 'react';

import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer';

import '../assets/styles/App.scss';


const App = () => {
    const [ videos, setVideos ] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/initialState') //insertamos la direccion de la api
        .then(response => response.json()) // vemos la respuesta y transformamos en un json
        .then(data => setVideos(data)); // enviamos el json a la variable setVideos de useState
    }, []); // agregamos un [] array vacio para evitar el evenloop
    console.log(videos);
    return(
        <div className="App">
            <Header />
            <Search />  

            <Categories title="Mi Lista">
                <Carousel>
                    <CarouselItem />
                    <CarouselItem />
                    <CarouselItem />
                    <CarouselItem />
                </Carousel>
            </Categories>

            <Categories title="Tendencias"> 
                <Carousel>
                    <CarouselItem />
                    <CarouselItem />
                    <CarouselItem />

                </Carousel>
            </Categories>

            <Categories title="Originales de Platzi Video">
                <Carousel>
                    <CarouselItem />
                    <CarouselItem />

                </Carousel>
            </Categories>
            <Footer/>
        </div>
        );
    }

export default App;