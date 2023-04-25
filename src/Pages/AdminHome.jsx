import React from "react";
import styles from '../Styles/Adminhome.module.css';
import { useNavigate } from "react-router-dom";
import { Usercontext } from "../App";
import {useContext} from 'react';

function Home(){
    const navigate = useNavigate();
    const fieldval = useContext(Usercontext);
    if(fieldval.admin != 'true'){
        navigate('/')
    }
    return(
        <div className={styles.centerhome}>
            <button onClick={()=>navigate('/report')} className={styles.button}>Create Report</button>
            <div className={styles.filler}></div>
            <div className={styles.filler}></div>
            <button onClick={()=>navigate('/field')} className={styles.button}>Create Field</button>
            <div className={styles.filler}></div>
            <div className={styles.filler}></div>
            <button onClick={()=>navigate('/search')} className={styles.button}><div>Search Reports</div></button>
            <div className={styles.filler}></div>
            <div className={styles.filler}></div>
            <button onClick={()=>navigate('/')} className={styles.button}><div>Log Out</div></button>
        </div>
    )
}

export default Home;