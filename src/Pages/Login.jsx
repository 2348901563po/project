import React from "react";
import styles from '../Styles/Login.module.css'
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';

function Login(){
    const navigate = useNavigate();
    const [isuser, changeisuser] = useState('');
    const [user, updateUsername] = useState('');
    const [pass, updatePass] = useState('');
    const handlesubmit = (e) =>{
        e.preventDefault()
        fetch('http://localhost:1234/', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: `"${user}"`,
                password: `"${pass}"`,   
            })
        }).then(res=>{
            return res.json()
        }).then(res=>{
            if(res.res=='not a current user'){
                changeisuser('Wrong Username or Password')
                navigate('/');
                console.log('Hey')
            }if(res.res=='A current user'){
                navigate('/home');
            }else{
                navigate('/')
                console.log(res)
            }
        }
        )
    }

    const createAcccount = ()=>{
        navigate('/user')
    }


    return(
        <div>
            <div className={styles.title}>Login</div>
            <form action="http://localhost:1234/" method='POST' className={styles.form} onSubmit={handlesubmit}>
                <div>
                    <label htmlFor='email'></label>
                    <input type='text' name='email' placeholder='email' className={styles.inputs} onChange={e=>updateUsername(e.target.value)}></input>
                </div>
                <div>
                    <label htmlFor='password'></label>
                    <input type='text' name='password' placeholder='Password' className={styles.inputs} onChange={e=>updatePass(e.target.value)}></input>
                </div>
                <div>
                    <button type="submit" className={styles.btn}>Submit</button>
                </div>
                <div className={styles.wronglogin}>{isuser}</div>
                <button onClick={createAcccount}>Create Account</button>
            </form>
        </div>
    )
}

const Password = ()=>{
    return(
        <div>
            <label htmlFor='username'></label>
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