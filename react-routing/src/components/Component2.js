import React from 'react';
import { Link, navigate } from '@reach/router';
const Component2 = (props) => {
    const onClickHandler =(e) => {
        e.preventDefault();
        navigate("/route-1")
    }
    return (
        <div>
            <h4>You Are in Page Two</h4>
            <Link to="/route-1">Go to Page One</Link>
            <div>
                <button onClick={onClickHandler}>Navigate to Page 1</button>
            </div>            
        </div>
    );
}

export default Component2;
