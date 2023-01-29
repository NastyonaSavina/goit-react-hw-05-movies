import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { BsFilm} from 'react-icons/bs';


export const Container = styled.div`
    width: 1200px;
    margin: 0 auto;
    padding: 0 15px ;
`;


export const Header= styled.header`
    display: flex;
    justify-content: flex-start;
    justify-content: baseline;
    align-items:baseline;
    padding: 20px;
    gap: 25px;
    font-weight: 500;
    border: 1px solid #eee;
    box-shadow: 0px 3px 1px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.08), 0px 2px 2px rgba(0, 0, 0, 0.12);
`

export const IconMovie = styled(BsFilm)`
    
    margin: 0px;
    padding-top: 8px;
    width: 20px;
    
`;

export const Link = styled(NavLink)`
    padding: 10px 15px;
    text-decoration: none;
    color: black;
    font-weight: 600;

    &.active {
        color: #e72525;
    }
`;