import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const List= styled.ul`
list-style-type: circle;
margin-left: 20px;

`

export const MovieItem= styled.li`
    color: black;
    :hover {
        color: #0920e7;}

`

export const MovieLink=styled(Link)`
    text-decoration: none;
    color: black;
    :hover {
        color: #0920e7;}
`

export const MovieName= styled.p`
    padding: 5px;
    margin-top: 0px;
    margin-bottom: 0;
`