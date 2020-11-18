import React from 'react';
import TopBar from '../components/Bar/TopBar';
import Footer from '../components/Bar/Footer';

const topBar = (props) => (
    <div>
        <TopBar />
        {props.children}
        <Footer />
    </div>
)

export default topBar;