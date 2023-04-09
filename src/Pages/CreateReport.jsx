import React from "react";
import styles from '../Styles/Createreport.module.css';
import { useNavigate } from "react-router-dom";
import {useState, useEffect} from 'react';

const Report = () =>{

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
    
    const navigate = useNavigate();
    const [f, changefieldnames] = useState('');
    const [name, changename] = useState('');
    const [date, changedate] = useState(newdate());
    const [temp, changetemp] = useState('');
    const [herbicide, changeherb] = useState('');
    const [rate, changerate] = useState('');
    const [gallons, changegallons] = useState('');
    const [pests, changepests] = useState('');
    const [comments, changecomments] = useState('');
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
            })
        }).then(navigate('/home'))
    }

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
                    return(<option key={n.fieldid}>{`'${n.Name1}'`}</option>)
                }))}
        )
    }, [])
    console.log(f)
        /*let data2 = data1.map(`<option>'+'${data1.name}'+'</option>`)*/
    return(
        <div>
            <div className={styles.title}>Report</div>
            <button onClick={()=>{navigate(-1)}}>Back</button>
            <form action="http://localhost:1234/report" method='post' className={styles.form} onSubmit={handlesubmit}>
                <div>
                    <label htmlFor="Name"></label>
                    <input name="OperatorName" type='text' placeholder="Name" onChange={e=>changename(e.target.value)}className={styles.input}></input>
                </div>
                <div>
                    <label htmlFor="Date"></label>
                    <input name="Date" type='text' placeholder={date} onChange={e=>changedate(e.target.value)}className={styles.input}></input>
                </div>
                <div>
                    <label htmlFor='temperature'></label>
                    <input name='temperature' type='text' placeholder='temperature' className={styles.input} onChange={e=>changetemp(e.target.value)}></input>
                </div>
                <select name="field" className={styles.input}>
                    <option value='' disabled className={styles.option}>select a field</option>
                    <option className={styles.option}>Stuart</option>
                    {f}
                </select>
                <select name="herbicide" className={styles.input} placeholder='herbicide' onChange={e=>changeherb(e.target.value)}>
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
                    <input name='rate' type='text' placeholder='rate of application' className={styles.input} onChange={e=>changerate(e.target.value)}></input>
                </div>
                <div>
                    <label htmlFor='gallons'></label>
                    <input name='gallons' type='text' placeholder='gallons' className={styles.input} onChange={e=>changegallons(e.target.value)}></input>
                </div>
                <div>
                    <label htmlFor='targetedpests'></label>
                    <input name='targetedpests' type='text' placeholder='Pests Targeted' className={styles.input} onChange={e=>changepests(e.target.value)}></input>
                </div>
                <div>
                    <textarea name='comments' className={styles.texta} onChange={e=>changecomments(e.target.value)}></textarea>
                </div>
                <div>
                    <button type="submit" className={styles.btn}>Submit</button>
                </div>
            </form>
        </div>
    )
};

const Newops = (props) =>{
    const f = props.f;
        f.map(function(n){
            return(<option key={n.fieldid}>{`'${n.Name1}'`}</option>)
        })
}
export default Report;

/*
const therest = () =>{
    return(
            <select name="field">
                <option>Stuart</option>
                <option>Splash</option>
                <option>Annie</option>
            </select>

            <select name="herbicide">
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
            <label name='year'></label>
            <input htmlfor='year' placeholder="Year"></input>

            <br />
            <label name='month'></label>
            <input htmlfor='month' placeholder="Month"></input>

            <br />
            <label name='day'></label>
            <input htmlfor='day' placeholder='Day'></input>

            <br />

            <label name='time'></label>
            <input htmlfor='time' placeholder="Time"></input>
        </div>

            <label name='location'></label>
            <input htmlFor='location' type='text' placeholder='Location'></input>

            <br />
            <div>
            <label name='Areasprayed'></label>
            <input htmlfor='Areasprayed' type='text' placeholder='AreaSprayed'></input>
            </div>
            <div>
            <label name='windspeed'></label>
            <input htmlFor='windspeed' placeholder="Windspeed"></input>
            </div>
            <div>
                <textarea></textarea>
            </div>
            <div>
                <button>Submit</button>
            </div>
    </div>
    )
} */