import React from 'react';
import styles from '../Styles/Createaccount.module.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Newuser = () =>{
        const navigate = useNavigate();
        const [admin, istrue] = useState('off')
        const [pass1, updatepass1] = useState('');
        const [pass2, updatepass2] = useState('');
        const [email, updateemail] = useState('');
        const [first, updatefirst] = useState('');
        const [last, updatelast] = useState('');
        let match;
        if(pass1==pass2){
            match=''
        }else{
            match='make sure that your passwords match';
        }

        const handleSubmit = (e) =>{
            e.preventDefault()
            fetch('http://localhost:1234/user', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                firstName: `${first}`,
                lastName: `${last}`,
                email: `${email}`,
                password: `${pass1}`,
                admin: `${admin}`,   
            })
        })
        }



    return(
        <div>
            <div className={styles.title}>Sign Up</div>
            <form action='http://localhost:1234/user' method='POST' className={styles.form} onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='firstname'></label>
                    <input type='text' name='firstname' placeholder='first name' className={styles.inputs} onChange={e=>updatefirst(e.target.value)}></input>
                </div>
                <div>
                    <label htmlFor='lastname'></label>
                    <input type='text' name='lastname' placeholder='last name' className={styles.inputs} onChange={e=>updatelast(e.target.value)}></input>
                </div>
                <div>
                    <label htmlFor='email'></label>
                    <input type='text' name='email' placeholder='email' className={styles.inputs} onChange={e=>updateemail(e.target.value)}></input>
                </div>
                <div>
                    <label htmlFor='password'></label>
                    <input type='text' name='password' placeholder='password' className={styles.inputs} onChange={e => updatepass1(e.target.value)}></input>
                </div>
                <div>
                    <label htmlFor='repassword'></label>
                    <input type='text' name='repassword' placeholder='retype password' className={styles.inputs} onChange={e=> updatepass2(e.target.value)}></input>
                </div>
                <div>
                    <label htmlFor='admin'>Check for Admin Account   </label>
                    <input type='checkbox' name='admin' placeholder='password' className={styles.checkbox} onChange={e => istrue(e.target.value)}></input>
                </div>
                <div className={styles.check}>{match}</div>
                <button type='submit' className={styles.btn}>Create Account</button>
            </form>
        </div>
    )
}

export default Newuser;
