import React from 'react';

const Logout = () =>{
    return(
        <form action="http://localhost:1234/logout" method="get">
            <button>Sign Out</button>
        </form>
    )
}

export default Logout;