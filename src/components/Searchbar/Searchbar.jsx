import PropTypes from 'prop-types';


import { useState } from 'react';
import {
    SearchArea,
    SearchForm,
    SearchFormInput,
    SearchFormBtn

} from './Searchbar.styled';



export const Searchbar = ({ onSubmit }) => {
    const [value, setValue] = useState('');

    const handleChange = event => {
        const { value } = event.target;
        setValue(value);
    };

    const handleSubmit = event => {
        event.preventDefault();
        onSubmit(value);
    };

   
    
    return (
        <>
            <SearchArea >
                <SearchForm   onSubmit={handleSubmit}>
                    <SearchFormInput
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search movie"
                    value={value}
                    onChange={handleChange}
                    />
                    <SearchFormBtn type="submit">Search </SearchFormBtn>
                </SearchForm >

            </SearchArea>         
        </>
       
    )
}



Searchbar.propTypes = {
    onSubmit: PropTypes.func.isRequired,

}