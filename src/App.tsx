import React from 'react';
import {CustomDatePicker} from './components/CustomDatePicker';
import {TextField} from '@mui/material';

const App = () => {
    return (
        <div style={{
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            // background: '#AEC3ED'
        }}>
            <CustomDatePicker/>
        </div>
    );
};

export default App;