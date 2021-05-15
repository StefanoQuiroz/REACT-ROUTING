import React from 'react';

const Results = (props) => {
    const {name, datos} = props;
    const result = datos.map(([key, value], index)=> (<div key={index}><strong>{key.replace(/\b\w/g, c => c.toUpperCase())}: </strong>{value.replace(/\b\w/g, c => c.toUpperCase())}</div>)) 
    return (
        <div>
            <h1>{name}</h1>
            {result}
        </div>
    );
}

export default Results;
