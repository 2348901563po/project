import React from "react";
import styles from '../Styles/Adminhome.module.css';
import { useNavigate } from "react-router-dom";

function Home(){
    const navigate = useNavigate();
    return(
        <div>
            <button onClick={()=>navigate('/report')}>Create Report</button>
            <button onClick={()=>navigate('/field')}>Create Field</button>
            <button onClick={()=>navigate('/search')}>Search Reports</button>
        </div>
    )
}

export default Home;