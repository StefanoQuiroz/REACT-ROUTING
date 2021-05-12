import React from 'react';
import { Link, navigate } from '@reach/router';

const Component1 = (props) => {
    const onClickHandler = (e) => {
        e.preventDefault();
        navigate("/route-2")
    }
    return (
        <div>
            <h4>You Are in Page One</h4>
            <Link to="/route-2">Go to Page Two</Link>
            <div>
                <button onClick={onClickHandler}>Navigator to page 2</button>
            </div>            
        </div>
    );
}

export default Component1;
