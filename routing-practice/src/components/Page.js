import React from 'react';

const Page = (props) => {
    const {variable} = props;
    const pageShow = () => (
        (isNaN(variable) && (variable!=="home")) ? (`The word is: ${variable} `) : (`The number is: ${variable}`)
    );

    return (
        <div>
            <h2>{pageShow()}</h2>        
        </div>
    );
}

export default Page;
