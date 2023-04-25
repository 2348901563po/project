import React, { useEffect } from 'react';
import styles from '../Styles/Createfield.module.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Field = () =>{
    const navigate = useNavigate();
    const [name, changename] = useState();
    const [crop, changecrop] = useState();
    const [acres, changeacres] = useState();
    const [status, changestatus] = useState();
    const handlesubmit = (e)=>{
        e.preventDefault()
        fetch('http://localhost:1234/field', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                fieldname: `${name}`,
                cropplanted: `${crop}`, 
                cropstatus: `${status}`,
                acres: `${acres}`,  
            })
        })
        navigate('/home')
    }

    return(
        <div className={styles.container}>
            <div className={styles.title}>Create Field</div>
            <form action="http://localhost:1234/field" method='post' className={styles.form} onSubmit={handlesubmit}>
                
                <div>
                    <label htmlFor='fieldname'></label>
                    <input name='fieldname' placeholder='field name' type='text' className={styles.input} onChange={e=>changename(e.target.value)}></input>
                </div>
                <div>
                    <label htmlFor='acres'></label>
                    <input name='acres' placeholder='number of acres' type='text' className={styles.input} onChange={e=>changeacres(e.target.value)}></input>
                </div>
                <div>
                    <label htmlFor='cropplanted'></label>
                    <input name='cropplanted' placeholder='crop planted' type='text' className={styles.input} onChange={e=>changecrop(e.target.value)}></input>
                </div>
                <div>
                    <label htmlFor='cropstatus'></label>
                    <input name='cropstatus' placeholder='crop status' type='text' className={styles.input} onChange={e=>changestatus(e.target.value)}></input>
                </div>
                <button type='submit' className={styles.btn}>Submit</button>
            </form>
        </div>
    )
}

export default Field;