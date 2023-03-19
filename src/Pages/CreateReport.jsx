import React from "react";

const Report = () =>{
    return(
        <div>
            <form action="http://localhost:1234/api" method='post'>
                <div>
                    <label htmlfor="Name"></label>
                    <input name="OperatorName" type='text' placeholder="Name"></input>
                </div>
                <div>
                    <label htmlfor='temperature'></label>
                    <input name='temperature' type='text' placeholder='temperature'></input>
                </div>
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
                    <label htmlfor='rate'></label>
                    <input name='rate' type='text' placeholder='rate of application'></input>
                </div>
                <div>
                    <label htmlfor='targetedpests'></label>
                    <input name='targetedpests' type='text' placeholder='Pests Targeted'></input>
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
};


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