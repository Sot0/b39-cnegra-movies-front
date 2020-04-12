import React from "react";
import { Container, Row, Col, Media } from "reactstrap";
import "../styles/login.scss";
import NavTab from '../common/NavTab';
import Signup from "../components/Signup";
import Signin from "../components/Signin";

import logo from '../assets/img/logo.png';

const Login = ({history}) => {
    const tabList = [
        {
            text: 'Iniciar sesión',
            component: <Signin history={history}/>
        },
        {
            text: 'Crear una cuenta',
            component: <Signup history={history}/>
        }
    ];

    return (
        <Container className="login-container" fluid>
            <Row className="row">
                <Col lg={6} className="information">
                    <div className="background">
                        <Media className="logo" src={logo} alt=""/>
                    </div>
                </Col>
                <Col lg={6} className="form">
                    <NavTab tabList={tabList}/>    
                </Col>
            </Row>
        </Container>
    );
};

export default Login;
