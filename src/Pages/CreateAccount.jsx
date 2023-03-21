import React from 'react';
import styles from '../Styles/Createaccount.module.css'

const Newuser = () =>{
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
                    <label htmlfor='password'></label>
                    <input type='text' name='password' placeholder='password' className={styles.inputs}></input>
                </div>
                <div>
                    <label htmlfor='email'></label>
                    <input type='text' name='email' placeholder='email' className={styles.inputs}></input>
                </div>
                <button type='submit' className={styles.btn}>Submit</button>
            </form>
        </div>
    )
}

export default Newuser;
