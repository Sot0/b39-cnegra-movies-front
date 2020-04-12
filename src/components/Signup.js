import React from 'react';
import { useMutation } from 'react-apollo-hooks';
import gql from 'graphql-tag';
import { Button, Form, Row, Col } from 'reactstrap';

import '../styles/signup.scss';

import InputFormGroup from '../common/InputFormGroup';
import useForm from './../hooks/useForm';


const CREATE_AUTHOR = gql`
    mutation createUser($data: UserCreateInput!) {
        createUser(data: $data) {
            _id
        }
    }
`;

const Signup = ({history}) => {
    const [ sendSignup ] = useMutation(CREATE_AUTHOR);
    const catchData = async (inputs) => {
        if(inputs.password === inputs.confirm_password){
            delete inputs.confirm_password;
            const { data } = await sendSignup({variables:{data: {...inputs}} });
            console.log(data);
            
            if(data) {
                if(data.errors) console.log(data.errors);
                else alert('Te has registrado con éxito, inicia sesión para comenzar');
            };
        } else {
            alert('Tus contraseñas no coinciden');
        };
    };

    const defaultFormValues = {
        first_name: '',
        last_name: '',
        birth_date: '',
        gender: 'M',
        email: '',
        password: '',
        confirm_password: ''
    }

    const {
        inputs,
        handleInputChange,
        handleSubmit,
    } = useForm(catchData, defaultFormValues);

    return(
        <Form onSubmit={handleSubmit} className="signup-form">
            <Row>
                <Col md={6}>
                    <InputFormGroup
                        name="first_name"
                        label="Nombre"
                        type="text"
                        placeHolder="Escribe tu nombre"
                        value={inputs.first_name}
                        change={handleInputChange}
                        required={true} />
                </Col>
                <Col md={6}>
                    <InputFormGroup
                        name="last_name"
                        label="Apellidos"
                        type="text"
                        placeHolder="Escribe tus apellidos"
                        value={inputs.lastname}
                        change={handleInputChange}
                        required={true} />
                </Col>
            </Row>
            <Row>
                <Col xs={6}>
                <InputFormGroup
                    name="birth_date"
                    label="Fecha de nacimiento"
                    type="date"
                    placeHolder=""
                    value={inputs.birth_date}
                    change={handleInputChange}
                    required={true} />
                </Col>
                <Col xs={6}>
                    <InputFormGroup
                        name="gender"
                        label="Género"
                        type="select"
                        placeHolder=""
                        value={inputs.gender}
                        change={handleInputChange}
                        required={true}
                        options={[{value: 'M', text: 'M'}, {value: 'F', text: 'F'}]} />
                </Col>
            </Row>
            <InputFormGroup
                name="email"
                label="Correo electrónico"
                type="email"
                placeHolder="ejemplo@dominio.com"
                value={inputs.email}
                change={handleInputChange}
                required={true} />
            <Row>
                <Col md={6}>
                    <InputFormGroup
                    name="password"
                    label="Contraseña"
                    type="password"
                    placeHolder="**********"
                    value={inputs.password}
                    change={handleInputChange}
                    required={true} />
                </Col>
                <Col md={6}>
                    <InputFormGroup
                    name="confirm_password"
                    label="Confirmar contraseña"
                    type="password"
                    placeHolder="**********"
                    value={inputs.confirm_password}
                    change={handleInputChange}
                    required={true} />
                </Col>
            </Row>
            <Col style={{textAlign: 'center'}}>
                <Button className="btn-custom" color=''>Registrar</Button>
            </Col>
        </Form>
    );
};
export default Signup;