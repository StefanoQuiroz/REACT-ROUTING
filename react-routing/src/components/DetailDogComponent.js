import React from 'react';



const DetailDogComponent = (props) => {
    const {id} = props
    return (
        <div>
            <p>You are looking at the dog with id = {id}</p>
        </div>
        
    );
} 

export default DetailDogComponent;
