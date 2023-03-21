import React from 'react';
import styles from '../Styles/Createfield.module.css'

const Field = () =>{
    return(
        <div className={styles.container}>
            <div className={styles.title}>Create Field</div>
            <form action="http://localhost:1234/field" method='post' className={styles.form}>
                <div>
                    <label htmlFor='fieldname'></label>
                    <input name='fieldname' placeholder='field name' type='text' className={styles.input}></input>
                </div>
                <div>
                    <label htmlFor='acres'></label>
                    <input name='acres' placeholder='number of acres' type='text' className={styles.input}></input>
                </div>
                <div>
                    <label htmlFor='cropplanted'></label>
                    <input name='cropplanted' placeholder='crop planted' type='text' className={styles.input}></input>
                </div>
                <div>
                    <label htmlFor='cropstatus'></label>
                    <input name='cropstatus' placeholder='crop status' type='text' className={styles.input}></input>
                </div>
                <button type='submit' className={styles.btn}>Submit</button>
            </form>
        </div>
    )
}

export default Field;