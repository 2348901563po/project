import React from 'react';
import styles from '../Styles/Createaccount.module.css'

const Newuser = () =>{
    return(
        <form action='http://localhost:1234/user' method='POST'>
            <div>
                <label htmlfor='firstname'></label>
                <input type='text' name='firstname' placeholder='first name'></input>
            </div>
            <div>
                <label htmlfor='lastname'></label>
                <input type='text' name='lastname' placeholder='last name'></input>
            </div>
            <div>
                <label htmlfor='password'></label>
                <input type='text' name='password' placeholder='password'></input>
            </div>
            <div>
                <label htmlfor='email'></label>
                <input type='text' name='email' placeholder='email'></input>
            </div>
            <button type='submit'>Submit</button>
        </form>
    )
}

export default Newuser;
