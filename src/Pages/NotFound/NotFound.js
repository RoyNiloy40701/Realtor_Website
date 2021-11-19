import React from 'react';
import notFoundimg from '../../Photos/404.png';

const NotFound = () => {
    return (
        <div>
            <div>
                <img src={notFoundimg} alt="" className="img-fluid" />
            </div>
        </div>
    );
};

export default NotFound;