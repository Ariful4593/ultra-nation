import React from 'react';
import './List.css'
const List = (props) => {
    const {name,alpha2Code,capital,population,flag} = props.country;
    const handleCountry = props.handleAddCountry
    return (
        <div className="country-item">
            <h4>Country Name: {name}</h4>
            <img src={flag} alt=""/>
            <p>Alpha Code: {alpha2Code}</p>
            <p>Capital: {capital}</p>
            <p>Population: {population}</p>
            <button onClick={() => handleCountry(props.country)}>Add country</button>
        </div>
    );
};

export default List;