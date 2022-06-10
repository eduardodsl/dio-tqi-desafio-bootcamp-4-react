import { string } from 'prop-types';
import Styled from 'styled-components';

const Button = Styled.button`
    background: #dc872c;
    color: #FFF;
    border: none;
    border-radius: 0;
    font-size: 1.5em;
    padding: 10px 20px;
    font-family: 'New Tegomin', serif;
    cursor: pointer;
    box-shadow: 3px 3px #333;

    &:hover {
        background: #a40000;
    }

`;

Button.propTypes = {
    children: string
}

export default Button;