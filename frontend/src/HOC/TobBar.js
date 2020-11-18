import React from 'react';
import TopBar from '../components/Bar/TopBar';

const topBar = (props) => (
    <div>
        <TopBar />
        {props.children}
    </div>
)

export default topBar;