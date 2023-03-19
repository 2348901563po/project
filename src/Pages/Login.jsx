import React from "react";

function Login(){
    return(
        <div>
            <form action="http://localhost:1234/login" method='post'>
                <div>
                    <label htmlfor='email'></label>
                    <input type='text' name='email' placeholder='email'></input>
                </div>
                <div>
                    <label htmlfor='password'></label>
                    <input type='text' name='password' placeholder='Username'></input>
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}

const Password = ()=>{
    return(
        <div>
            <label htmlfor='username'></label>
            <input type='text' name='username' placeholder='Username'></input>
        </div>
    )
}

const Username = ()=>{
    return(
        <div>
            <label htmlfor='password'></label>
            <input type='text' name='password' placeholder="Password"></input>
        </div>
    )
}

const Submit = () =>{
    return(
        <button>Submit</button>
    )
};


export default Login;