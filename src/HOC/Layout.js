import React from 'react';
import TopBar from '../components/Bar/TopBar';
import Footer from '../components/Bar/Footer';

const layout = (props) => (
    <div>
        <TopBar />
        {props.children}
        <Footer />
    </div>
)

export default layout;