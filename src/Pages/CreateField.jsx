import React from 'react';

const Field = () =>{
    return(
        <form action="http://localhost:1234/field" method='post'>
            <div>
                <label htmlFor='fieldname'></label>
                <input name='fieldname' placeholder='field name' type='text'></input>
            </div>
            <div>
                <label htmlFor='acres'></label>
                <input name='acres' placeholder='number of acres' type='text'></input>
            </div>
            <div>
                <label htmlFor='cropplanted'></label>
                <input name='cropplanted' placeholder='crop planted' type='text'></input>
            </div>
            <div>
                <label htmlFor='cropstatus'></label>
                <input name='cropstatus' placeholder='crop status' type='text'></input>
            </div>
            <button type='submit'>Submit</button>
        </form>
    )
}

export default Field;