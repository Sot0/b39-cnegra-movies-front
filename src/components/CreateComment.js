import React from 'react';
import { useMutation } from 'react-apollo-hooks';
import gql from 'graphql-tag';
import InputFormGroup from '../common/InputFormGroup';
import useForm from './../hooks/useForm';
import { Form, Col, Button } from 'reactstrap';

const CREATE_COMMENT = gql`
    mutation createCommentOnByMovieId($data: CommentInput!){
        createCommentOnByMovieId(data: $data) {
            _id
            title
            comments{
                text
            }
        }
    }
`;

const CreateComment = ({idMovie}) => {
    const [sendComment] = useMutation(CREATE_COMMENT);

    const catchData = async (inputs) => {
        inputs.id_movie = idMovie;
        
        const { data, error, loading } = await sendComment({variables:{data: {...inputs}} });

        if(loading) return <h1>Enviando comentario</h1>
        
        if(error) {
            alert('Error al crear comentario');
        }
        if(data) {
            alert('Comentario creado');
        }
    };

    const defaultFormValues = {
        message: '',
    }

    const {
        inputs,
        handleInputChange,
        handleSubmit,
    } = useForm(catchData, defaultFormValues);

    return (
        <Form onSubmit={handleSubmit} className="">
            <InputFormGroup
                name="message"
                label="¿Qué te pareció?"
                type="text"
                placeHolder="Cuéntale a todo el mundo"
                value={inputs.message}
                change={handleInputChange}
                required={true} />
            <Col style={{ textAlign: 'center' }}>
                <Button className="btn-custom" color=''>Comentar</Button>
            </Col>
        </Form>
    );
}
 
export default CreateComment;