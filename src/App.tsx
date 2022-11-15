import React from 'react';
import './components/TextField/textfield.scss';
import 'react-calendar/dist/Calendar.css';
import {Tickets} from './pages/flight-card/Tickets';

const App = () => {
    return (
        <div>
            <Tickets/>
        </div>
    );
};

export default App;

