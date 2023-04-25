import React, { useContext, createContext } from "react";
import styles from '../Styles/Createreport.module.css';
import { useNavigate } from "react-router-dom";
import {useState, useEffect} from 'react';
import { Usercontext } from "../App";



const Report = (props) =>{
    const fieldval = useContext(Usercontext);
    {console.log(fieldval)}

    const [refresh, changerefresh] = useState()
    /*Use 3rd Party API to get weather data */
    const [currenttemp, changecurrenttemp] = useState();
    useEffect(()=>{
    const success = (data)=>{
        const latitude = data.coords.latitude;
        const longitude = data.coords.longitude;
        console.log(latitude)
        fetch('http://localhost:1234/weather', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                latitude: `${latitude}`,
                longitude: `${longitude}`,   
            })
        })
        .then(res=>res.json())
        .then(data=>{changecurrenttemp(`${1.8*(data.temp-273)+32} F`)
            console.log(`${data.temp}`)
        })

    }
   

    const error = (err)=>{
        console.log(err)
    }

    {navigator.geolocation.getCurrentPosition(success, error)}
    }, [])

    /*Returns the current date */
    const newdate = ()=>{
    let date = new Date();
     let day = date.getDate();
     let month = date.getMonth()+1;
     let year = date.getFullYear();
     if(day<10 && month <10){
        let todaydate = `${year}/0${month}/0${day}`;
        return todaydate
     }if(day<10){
        let todaydate = `${year}/${month}/0${day}`;
        return todaydate
     }if(month <10){
        let todaydate = `${year}/0${month}/${day}`;
        return todaydate
     }else{
        let todaydate = `${year}/${month}/${day}`;
        return todaydate
     }
    }
    
    /*Keeps track of all of the needed state variables for form submision */
    const navigate = useNavigate();
    const [f, changefieldnames] = useState('');
    const [name, changename] = useState('');
    const [date, changedate] = useState(newdate());
    const [temp, changetemp] = useState(currenttemp);
    const [herbicide, changeherb] = useState('Gly-4 Herbicide');
    const [rate, changerate] = useState('');
    const [gallons, changegallons] = useState('');
    const [pests, changepests] = useState('');
    const [comments, changecomments] = useState('');
    const [field, changefield] = useState(27);
    const [userid, changeuserid] = useState(fieldval.userid);


    /*Handles the submission of the form through an API */
    const handlesubmit = (e)=>{
        e.preventDefault()
        fetch('http://localhost:1234/report', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                date: `${date}`,
                temperature: `${temp}`,
                herbicide: `${herbicide}`, 
                rate: `${rate}`,
                gallons: `${gallons}`,
                targetedpests: `${pests}`, 
                comments: `${comments}`, 
                herbicide: `${herbicide}`, 
                field: `${field}`,
                userid: userid,  
            })
        })
        if(fieldval.admin=='false'){
            changerefresh('true')
            navigate('/report')
        }if(fieldval.admin=='true'){
            navigate('/home')
        }
    }
    /*Loads all of the select statements */
    useEffect(()=>{
        fetch('http://localhost:1234/names')
            .then(res=>{
                if (res.ok){
                    console.log('Success')
                    return res.json()
                    /*console.log(res.json())*/
                }else{
                    console.log("Not a Success")
                }
            })
        .then(res=>{
            changefieldnames(
                res.map(function(n){
                    return(<option key={n.fieldid} value={n.fieldid}>{`${n.Name1}`}</option>)
                }))}
        )
    }, [])

    return(
        <div>
            <div className={styles.title}>Report</div>
            <button onClick={()=>{navigate(-1)}}>Back</button>
            <form action="http://localhost:1234/report" method='post' className={styles.form} onSubmit={handlesubmit}>
                <div>
                    <label htmlFor="Name"></label>
                    <input name="OperatorName" type='text' defaultValue={`${fieldval.first} ${fieldval.last}`} onChange={e=>changename(e.target.value)} className={styles.input}></input>
                </div>
                <div>
                    <label htmlFor="Date"></label>
                    <input name="Date" type='text' defaultValue={date} onChange={e=>changedate(e.target.value)} className={styles.input}></input>
                </div>
                <div>
                    <label htmlFor='temperature'></label>
                    <input name='temperature' type='text' defaultValue={currenttemp} className={styles.input} onChange={e=>changetemp(e.target.value)}></input>
                </div>
                <select name="field" className={styles.input} required onChange={e=>changefield(e.target.value)}>
                    <option value='' disabled className={styles.option}>select a field</option>
                    {f}
                </select>
                <select name="herbicide" className={styles.input} placeholder='herbicide' onChange={e=>changeherb(e.target.value)} required>
                    <option value='' disabled>select a herbicide</option>
                    <option>Gly-4 Herbicide</option>
                    <option>Buccaneer</option>
                    <option>Interline Herbicide</option>
                    <option>Amine 4 Herbicide</option>
                    <option>Amine 400 Weed Killer</option>
                    <option>DuraCor</option>
                    <option>PastureGard</option>
                    <option>Grazon P+D</option>
                    <option>GrazonNext HL</option>
                    <option>Remedy</option>
                    <option>Allegare Panoramic</option>
                    <option>Chaparral</option>
                    <option>Tordon</option>
                    <option>Poast plus</option>
                    <option>Hi Dep Broadleaf Herbicide</option>
                    <option>Gramoxone</option>
                    <option>Atrazine 4L</option>
                    <option>Lo-VOL</option>
                    <option>Mustang Maxx insecticide</option>
                    <option>Govern Insecticide</option>
                    <option>Hatchet Insecticide</option>
                </select>
                <div>
                    <label htmlFor='rate'></label>
                    <input name='rate' type='text' placeholder='rate of application gallons/hour' className={styles.input} onChange={e=>changerate(e.target.value)} required></input>
                </div>
                <div>
                    <label htmlFor='gallons'></label>
                    <input name='gallons' type='text' placeholder='Total gallons of herbicide used' className={styles.input} onChange={e=>changegallons(e.target.value)} required></input>
                </div>
                <div>
                    <label htmlFor='targetedpests'></label>
                    <input name='targetedpests' type='text' placeholder='Pests Targeted' className={styles.input} onChange={e=>changepests(e.target.value)} required></input>
                </div>
                <div>
                    <textarea name='comments' className={styles.input} onChange={e=>changecomments(e.target.value)}></textarea>
                </div>
                <div>
                    <button type="submit" className={styles.btn}>Submit</button>
                </div>
            </form>
        </div>
    )
};

export default Report;

