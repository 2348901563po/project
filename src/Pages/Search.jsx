import React from "react";
import styles from '../Styles/Search.module.css';
import { useNavigate } from "react-router-dom";

const Search = () =>{
    const navigate = useNavigate();

    return(
        <div className={styles.container}>
            <div className={styles.name}>
                <div className={styles.title}>Search</div>
                <form>
                    <label htmlFor="startdate">
                        <input name='startdate' type='text' placeholder='00/0000' className={styles.search}></input>
                    </label>
                    <label htmlFor="enddate">
                        <input name='enddate' type='text' placeholder='00/0000' className={styles.search}></input>
                    </label>
                    <br />
                    <button className={styles.button}>Search</button>
                </form>
                <button onClick={()=>{navigate(-1)}}>Back</button>
            </div>
        </div>
    )
}

export default Search;
