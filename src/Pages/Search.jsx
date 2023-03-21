import React from "react";
import styles from '../Styles/Search.module.css';


const Search = () =>{
    return(
        <div className={styles.container}>
            <div className={styles.name}>
                <div className={styles.title}>Search</div>
                <form>
                    <label htmlFor="search">
                    <input name='search' type='text' className={styles.search}></input></label>
                    <br />
                    <button className={styles.button}>Search</button>
                </form>
            </div>
        </div>
    )
}

export default Search;
