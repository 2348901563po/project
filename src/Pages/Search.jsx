import React from "react";
import styles from '../Styles/Search.module.css';
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';

const Search = () =>{
    /*const navigate = useNavigate();*/
    const [date1, changedate] = useState('');
    const [date2, changedate2] = useState('');
    const [herb, changeherb] = useState('');
    const [temp, changetemp] = useState('');
    const [gallons, changegallons] = useState('');
    const [rate, changerate] = useState('');
    const [pests, changepest] = useState('');
    const [comments, changecomments] = useState('');
    const [response, changeres] = useState('');
    const [results, changeresults] = useState('');

    const retriveresults = ()=>{
        fetch('http://localhost:1234/search', { 
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                startdate: `${date1}`,
                enddate: `${date2}`,
        })
    }).then(res=>{
        return res.json()
    }).then(
            res=>changeresults(
                res.map(function(n){
                    return <li key={n.idreports}>{`${n.rate}`}</li>
                   })
            )
        )
    }

    const HandleSubmit = (e)=>{
        e.preventDefault();
        retriveresults();
    }

    return(
        <div className={styles.container}>
            <div className={styles.name}>
                <div className={styles.title}>Search</div>
                    <form action="http://localhost:1234/search" method='POST' onSubmit={HandleSubmit}>
                        <label htmlFor="startdate">
                            <input name='startdate' type='text' placeholder='0000-00-00' className={styles.search} onChange={e=>{changedate(e.target.value)}}></input>
                        </label>
                        <label htmlFor="enddate">
                            <input name='enddate' type='text' placeholder='0000-00-00' className={styles.search} onChange={e=>{changedate2(e.target.value)}}></input>
                        </label>
                        <br />
                        <button type='submit' className={styles.button}>Search</button>
                    </form>
                    <div className={styles.results}>
                        <ul>
                           {results}
                        </ul>
                    </div>
                    <button>Back</button>
            </div>
        </div>
    )
}


export default Search;
