import React from 'react';
import { useMutation } from 'react-apollo-hooks';
import gql from 'graphql-tag';
import { Button, Form, Col } from 'reactstrap';
import '../styles/signin.scss';
import InputFormGroup from '../common/InputFormGroup';
import useForm from './../hooks/useForm';

const LOGIN = gql`
    mutation login($email: EmailAddress!, $password: String!) {
        login(email: $email, password: $password) {
            token
            message
        }
    }
`;

const Signin = ({history}) => {
    const [sendLogin] = useMutation(LOGIN);

    const catchData = async (inputs) => {
        const { data, error} = await sendLogin({variables: {...inputs}});
        
        if(error) {
            alert('Error al iniciar sesión');
        }
        if(data) {
            const {login} = data;
            sessionStorage.setItem('notNameToken', login.token);
            alert('Bienvenido');
            history.push('/');
        }
    };

    const defaultFormValues = {
        email: '',
        password: ''
    }

    const {
        inputs,
        handleInputChange,
        handleSubmit,
    } = useForm(catchData, defaultFormValues);

    return (
        <Form onSubmit={handleSubmit} className="signin-form">
            <InputFormGroup
                name="email"
                label="Correo electrónico"
                type="email"
                placeHolder="ejemplo@dominio.com"
                value={inputs.email}
                change={handleInputChange}
                required={true} />
            <InputFormGroup
                name="password"
                label="Contraseña"
                type="password"
                placeHolder="**********"
                value={inputs.password}
                change={handleInputChange}
                required={true} />
            <Col style={{ textAlign: 'center' }}>
                <Button className="btn-custom" color=''>Iniciar sesión</Button>
            </Col>
        </Form>
    );
}

export default Signin;