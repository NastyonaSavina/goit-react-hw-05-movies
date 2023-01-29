import styled from 'styled-components';



export const SearchArea = styled.div`
  
    min-height: 50px;
    padding-right: 24px;
    padding-left: 24px;
    padding-top: 12px;
    color: #fff;
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
        0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
    margin-bottom: 20px;
`

export const SearchForm =styled.form`
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 600px;
    background-color: #fff;
    border-radius: 3px;
    overflow: hidden;
`

export const SearchFormInput= styled.input`
    display: inline-block;
    width: 100%;
    height: 26px;
    font: inherit;
    font-size: 15px;
    border: 2px solid rgba(0, 0, 0, 0.12);
    border-radius: 5px;
    outline: none;
    padding-left: 10px;
    padding-right: 4px;
`

export const SearchFormBtn= styled.button`
    min-width: 50px;
    height: 32px;
    background-color: rgba(0, 0, 0, 0.12);
    cursor: pointer;
    font-size: 15px;

    font-weight: 500;
    border-radius: 5px;
    border: 1px solid #eee;
    padding: 0 10px;
    
    :hover {
    background-color: #dbbaba;
}
`
