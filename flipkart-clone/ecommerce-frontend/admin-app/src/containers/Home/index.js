import React from 'react';
import Layout from '../../../src/components/Layout/index'
//'../src/components/Layout/index'


const Home = (props) => {
    return (
    <Layout>
        <div className="jumbotron jumbotron-fluid">
    <div className="Container text-center"> Welcome to Admin Dashboard </div>
        </div>
        </Layout>
    );
};

export default Home;