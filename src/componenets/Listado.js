import React, { useEffect, useState } from 'react'
import { Navigate , Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';
import '../styles/listado.css'


const Listado = () => {
  const navigate = useNavigate()

  let token = sessionStorage.getItem("token")

  const [moviesList, setMoviesList] = useState([])   


  useEffect(()=>{
    const endPoint = "https://api.themoviedb.org/3/discover/movie?api_key=34b7d2ae8278687f63fc5cdd4d2a0244&language=es-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1e"

    axios.get(endPoint)
      .then(response =>{
        const apiData = response.data ;
        setMoviesList(apiData.results);
      })
      .catch(error =>{
        swal("hubo errores, intente mas tarde...")
      })
  },[setMoviesList])
 
  console.log(moviesList);
  return (

    <>
      { !token && <Navigate to="/" />}

      <div className='row listado'>
          { moviesList.map((oneMovie , idx) => {
            return(
              <div className='col-3 my-4' key={idx}>
                <div className="card" >
                  <img src={`https://image.tmdb.org/t/p/w500/${oneMovie.poster_path}`} className="card-img-top" alt="..."/>
                  <div className="card-body">
                    <h5 className="card-title">{oneMovie.original_title.substring(0,20)}</h5>
                    <p className="card-text">{oneMovie.overview.substring(0,90)}</p>
                    <Link to={`/detalle?movieID=${oneMovie.id}`} className="btn btn-primary" >Go somewhere</Link>
                  </div>
                </div>
              </div>
            )
          })}


      </div>
    </>
  )
}

export default Listado