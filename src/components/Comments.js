import React, { Fragment } from 'react';
import { useQuery } from 'react-apollo-hooks';
import gql from 'graphql-tag';
import CreateComment from './CreateComment';

const Comments = ({ idMovie }) => {

    const GET_COMMENTS = gql`
        query getMovieById($id: ID!){
            getMovieById(id: $id){
                comments{
                    text
                    user {
                        first_name
                    }
                }
            }
        }
    `;

    const { data, loading, error } = useQuery(GET_COMMENTS, {
        variables: { id: idMovie },
    });
    if(loading) return <h1>Cargando...</h1>

    if(error) return <h1>Hubo un error, intenta recargando</h1>

    const renderComments = () => {
        return data.getMovieById.length === 0
            ? <h3>Aún no hay opiniones</h3>
            : data.getMovieById.comments.map((comment, i) => {
            return <h4 key={i}>{comment.user.first_name} dice: {comment.text}</h4>
        });
    }

    return (
        <Fragment>
            {renderComments()}
            <CreateComment idMovie={idMovie} />
        </Fragment>
    );
}

export default Comments;