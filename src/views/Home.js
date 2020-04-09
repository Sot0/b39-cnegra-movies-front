import React, { Fragment } from 'react';
import { useQuery } from 'react-apollo-hooks';
import gql from 'graphql-tag';
import VideoSlider from '../components/VideoSlider';

const ALL_MOVIES = gql`
    query getMovies {
        getMovies{
            _id
            title
            created_by
            cover
            description
        }
    }
`;

const Home = () => {
    const { data, loading, error } = useQuery(ALL_MOVIES);

    if(loading) return <h1>Cargando...</h1>

    if(error) return <h1>Hubo un error, intenta recargando</h1>

    return (
        <Fragment>
            <VideoSlider data={data}/>
        </Fragment>
    );
};
 
export default Home;