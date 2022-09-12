import axios from 'axios'
import React, { useEffect, useState } from 'react'
import LoremIpsum from 'react-lorem-ipsum'
import { Navigate } from 'react-router-dom'
import swal from 'sweetalert'
import '../styles/app.css'

const Detalle = () => {
    let token = sessionStorage.getItem('token')
    let query = new URLSearchParams (window.location.search)
    let movieID = query.get('movieID')
    console.log(movieID);

    const [movie, setMovie] = useState(null)

    useEffect(()=>{
        const endPoint = `https://api.themoviedb.org/3/movie/${movieID}?api_key=34b7d2ae8278687f63fc5cdd4d2a0244&language=es-ES`
    
        axios.get(endPoint)
          .then(response =>{
            const movieData = response.data ;
            setMovie(movieData);
            console.log(movieData);
          })
          .catch(error =>{
            swal("hubo errores, intente mas tarde...")
          })
    },[movieID])
    
  return (
    <>
        {!token && <Navigate to="/" />}
        {!movie && <h2>Cargando detalle...</h2>}
        { movie && (
        <>
            <h2>{movie.title}</h2>
            <div className='row'>
                <div className='col-4'>
                <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} className="card-img-top" alt="..."/>
                </div>
                <div className='col-8'>
                    <h5>Fecha de estreno: {movie.release_date}</h5>
                    
                    <br></br>
                    <h5>Reseña:
                        <br></br>
                        <br></br>
                        {movie.overview}</h5>
                    <ul>
                        {movie.genres.map(oneGenre =><li key={oneGenre.id}>{oneGenre.name}</li>)}

                    </ul>
                </div>
            </div>
        </>)}

    </>
  )
}

export default Detalle

//https://api.themoviedb.org/3/movie/616037?api_key=34b7d2ae8278687f63fc5cdd4d2a0244&language=en-US