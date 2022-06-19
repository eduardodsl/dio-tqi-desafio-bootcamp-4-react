import React, { useContext } from 'react';
import { ThemeContext } from './Themes';

function Card(){
    const theme = useContext(ThemeContext);
    return (
        <div>
            <button style={theme}>card button</button>
        </div>
    );
}

export default Card;