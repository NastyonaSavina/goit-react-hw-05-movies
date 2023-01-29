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
export const MovieWrapper = styled.div`
    display: flex;
    box-shadow: 0px 3px 1px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.08), 0px 2px 2px rgba(0, 0, 0, 0.12);
    padding: 10px;

`
export const MovieImg= styled.img`
   height: 300px;
   margin-right: 20px;
`

export const MovieCard= styled.div`
  
    padding: 10px;
    

`

export const Title=styled.h1`
    font-weight: 500;
    font-size: 25px;

`

export const Text=styled.p`
    font-weight: 300;
    font-size: 15px;
    line-height: 1.67;

`

export const Subtitle=styled.h2`
    font-weight: 500;
    font-size: 15px;


`

export const SubtitleSmall = styled.h3`
    font-weight: 500;
    font-size: 13px;


`

export const DetailLink=styled(Link)`
    text-decoration: none;
    color: black;
    :hover {
        color: #0920e7;}
`

export const DetailWrapper= styled.div`
    box-shadow: 0px 3px 1px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.08), 0px 2px 2px rgba(0, 0, 0, 0.12);
    padding: 10px;
`