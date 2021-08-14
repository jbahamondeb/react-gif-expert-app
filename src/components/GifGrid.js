import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'

import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {


    const {data: images, loading} = useFetchGifs( category );



    

    /*
    const cargarTitulos = images.map(({id, title}) =>(
        <li key = {id}>{title}</li>
    ));
    */

    const cargarTitulos = images.map((img) =>(
        <GifGridItem 
            key = {img.id}
            { ...img }
        />
    ));


    return (
        <>
             <h3 className="animate__animated animate__fadeIn">{ category }</h3>
             { loading && <p className="animate__animated animate__flash">Loading...</p>}
            <div className="card-grid">
                    { cargarTitulos }
                    
            
                
            </div>
        </>
       
    )
}
