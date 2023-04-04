import React from "react";
import styles from '../Styles/Login.module.css'
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';


/*
function Login(){
    const [user, updateUsername] = useState();
    const [pass, updatePass] = useState();

    const Handlesubmit = ()=>{
        const navigate = useNavigate();
        navigate('/home')
    }
*/
function Login(){
    /*const navigate = useNavigate();*/
    return(
        <div>
            <div className={styles.title}>Login</div>
            <form action="http://localhost:1234/" method='POST' className={styles.form}>
                <div>
                    <label htmlfor='email'></label>
                    <input type='text' name='email' placeholder='email' className={styles.inputs}></input>
                </div>
                <div>
                    <label htmlfor='password'></label>
                    <input type='text' name='password' placeholder='Password' className={styles.inputs}></input>
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