import React from 'react';
import styles from '../Styles/Createaccount.module.css'
import { useState } from 'react';

const Newuser = () =>{
        const [pass1, updatepass1] = useState('');
        const [pass2, updatepass2] = useState('');
        let match;
        if(pass1==pass2){
            match=''
        }else{
            match='make sure that your passwords match';
        }
    return(
        <div>
            <div className={styles.title}>Sign Up</div>
            <form action='http://localhost:1234/user' method='POST' className={styles.form}>
                <div>
                    <label htmlfor='firstname'></label>
                    <input type='text' name='firstname' placeholder='first name' className={styles.inputs}></input>
                </div>
                <div>
                    <label htmlfor='lastname'></label>
                    <input type='text' name='lastname' placeholder='last name' className={styles.inputs}></input>
                </div>
                <div>
                    <label htmlfor='email'></label>
                    <input type='text' name='email' placeholder='email' className={styles.inputs}></input>
                </div>
                <div>
                    <label htmlfor='password'></label>
                    <input type='text' name='password' placeholder='password' className={styles.inputs} onChange={e => updatepass1(e.target.value)}></input>
                </div>
                <div>
                    <label htmlfor='repassword'></label>
                    <input type='text' name='repassword' placeholder='retype password' className={styles.inputs} onChange={e=> updatepass2(e.target.value)}></input>
                </div>
                <div className={styles.check}>{match}</div>
                <button type='submit' className={styles.btn}>Submit</button>
            </form>
        </div>
    )
}

export default Newuser;
