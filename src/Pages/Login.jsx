import React from "react";
import styles from '../Styles/Login.module.css'

function Login(){
    return(
        <div>
            <div className={styles.title}>Login</div>
            <form action="http://localhost:1234/login" method='post' className={styles.form}>
                <div>
                    <label htmlfor='email'></label>
                    <input type='text' name='email' placeholder='email' className={styles.inputs}></input>
                </div>
                <div>
                    <label htmlfor='password'></label>
                    <input type='text' name='password' placeholder='Username' className={styles.inputs}></input>
                </div>
                <div>
                    <button type="submit" className={styles.btn}>Submit</button>
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