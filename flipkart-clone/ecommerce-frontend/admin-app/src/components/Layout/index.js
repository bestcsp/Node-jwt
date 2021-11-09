import React from 'react';
import Header from '../Header/index';
import { Container } from 'react-bootstrap';

const Layout = (props) => {
    return (
        <div>
            <Header />
            <Container>
                {props.children}

            </Container>

        </div>
    );
};

export default Layout;