import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const List= styled.ul`
list-style-type: square;
margin-left: 20px;

`

export const MovieItem= styled.li`
    color: black;

`

export const MovieLink=styled(Link)`
    text-decoration: none;
    color: black;
`

export const MovieName= styled.p`
    padding: 5px;
    margin-top: 0px;
    margin-bottom: 0;
`