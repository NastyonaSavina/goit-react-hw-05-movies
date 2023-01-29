import styled from 'styled-components';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { Link } from 'react-router-dom';


export const IconArrow= styled(AiOutlineArrowLeft)`
    width: 7px;
    padding: 0;
`

export const LinkBack = styled(Link)`
    margin-top: 5px;
    margin-bottom: 3px;
    display: inline-flex;
    align-items: center;
    gap: 5px;
    padding: 2px 8px;
    text-decoration: none;
    font-weight: 500;
    border-radius: 15px;
    border: 1px solid #eee;
    :hover {
        color: #e72525;}
`
