import React from 'react';
import Layout from '../../components/Layout';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import Input  from '../../components/UI/input'

const Signup = () => {
    return (
        <Layout>
            <Container>
            <Form>
            <Row style={{ marginTop: '50px' }}>
            <Col md={'12'}>

                <Col md={'6'}>
                    <Input
                    Label="First Name"
                    placeholder="enter your first name"
                    value=""
                    type="text"
                    onChange={()=>{}}
                    />
                </Col>
                <Col md={'6'}>
                    <Input
                    Label="Last Name"
                    placeholder="enter your last name"
                    value=""
                    type="text"
                    onChange={()=>{}}
                    />
                </Col>
                <Col md={'6'}>
                    <Input
                    Label="Email"
                    placeholder="enter your email id"
                    value=""
                    type="email"
                    onChange={()=>{}}
                    />
                </Col>
                <Col md={'6'}>
                    <Input
                    Label="Password"
                    placeholder="Password"
                    value=""
                    type="password"
                    onChange={()=>{}}
                    />
                </Col>
                <Button variant="primary" type="submit">
                                Submit
                            </Button>                </Col>

                    
                </Row>
                </Form>

                 {/* <Row style={{ marginTop: '50px' }}>
                    <Col md={{ span: 6, offset: 3 }}>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Check me out" />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Col>
                </Row>  */}

            </Container>

        </Layout>
    );
};

export default Signup;