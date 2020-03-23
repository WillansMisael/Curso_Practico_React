import { useState, useEffect } from 'react';

const useInitialState = (API) => {
    const [ videos, setVideos ] = useState(
        { mylist: [], trends: [], originals: [] }
    );
    useEffect(() => {
        fetch(API) //insertamos la direccion de la api
        .then(response => response.json()) // vemos la respuesta y transformamos en un json
        .then(data => setVideos(data)); // enviamos el json a la variable setVideos de useState
    }, []); // agregamos un [] array vacio para evitar el evenloop
    return videos;
}

export default useInitialState;