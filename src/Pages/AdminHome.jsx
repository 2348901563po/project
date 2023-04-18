import React from "react";
import styles from '../Styles/Adminhome.module.css';
import { useNavigate } from "react-router-dom";

function Home(){
    const navigate = useNavigate();
    return(
        <div className={styles.centerhome}>
            <button onClick={()=>navigate('/report')} className={styles.button}>Create Report</button>
            <div className={styles.filler}></div>
            <div className={styles.filler}></div>
            <button onClick={()=>navigate('/field')} className={styles.button}>Create Field</button>
            <div className={styles.filler}></div>
            <div className={styles.filler}></div>
            <button onClick={()=>navigate('/search')} className={styles.button}><div>Search Reports</div><div>+</div></button>
            <div className={styles.filler}></div>
            <div className={styles.filler}></div>
            <button onClick={()=>navigate('/')} className={styles.button}><div>Log Out</div><div>+</div></button>
        </div>
    )
}

export default Home;