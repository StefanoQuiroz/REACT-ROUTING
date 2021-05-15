import React, { useEffect, useState } from 'react';
import fetchCategories from '../actions/fetchCategories';
const Menu = () => {
    //necesitariamos un arrayCategories y setArraysCategories = useState([])
    
    const [arrayCategories, setArrayCategories] = useState([]);
    
    useEffect(()=>{
        fetchCategories().then(arr=>setArrayCategories(arr))
    },[])
    
    const option = arrayCategories.map(([name, link], index)=>(<option key={index} value={link}>{name.replace(/\b\w/g, c => c.toUpperCase())}</option>))
    return (
        <div>
            <label htmlFor="selectCategories">Search for: </label>
            <select name="cat" id="selectCategotries">
                {option}
            </select>
        </div>
    );
}

export default Menu;
