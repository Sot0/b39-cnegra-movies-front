import React, { Fragment } from 'react';
import NavBar from '../common/NavBar';
import { useQuery } from 'react-apollo-hooks';
import gql from 'graphql-tag';
import VideoSlider from '../components/VideoSlider';
import authHOC from '../utils/authHOC';

const ALL_MOVIES = gql`
    query getMovies {
        getMovies{
            _id
            title
            created_by
            cover
            video
            description
            categories
        }
    }
`;

const categories = ['Acción', 'Animación', 'Anime', 'Aventura', 'Comedia', 'Fantasía', 'Guerra', 'Magia', 'Mexicana', 'Romance', 'Suspenso', 'Terror'];

const Home = () => {
    const { data, loading, error } = useQuery(ALL_MOVIES);

    if(loading) return <h1>Cargando...</h1>

    if(error) return <h1>Hubo un error, intenta recargando</h1>

    const getMoviesByCategory = () =>{
        return categories.map( (categoryName, i) => {
            const categoryNameWithoutAcents = categoryName.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase(    );

            const listMovies = data.getMovies.filter(movie => {
            if (movie.categories.includes(categoryNameWithoutAcents)) return movie
            return null
        });
        if(listMovies.length > 0) return <VideoSlider key={i} listMovies={listMovies} categoryName={categoryName}/>
        return null
    });
}

    return (
        <Fragment>
            <NavBar/>
            {getMoviesByCategory()}
        </Fragment>
    );
};
 
export default authHOC(Home);