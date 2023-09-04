import { useState } from "react";
import './forms.css';

function Education(){
    const [school, setSchool] = useState("");
    const [major, setMajor] = useState("");
    const [start, setStart] = useState("");
    const [end, setEnd] = useState("");

    return (
        <>
            <h1>Education</h1>
            <div className="field">
                <label>School: </label>
                <input type="text" value={school} onChange={(event) => setSchool(event.target.value)}></input>
            </div>
            <div className="field">
                <label>Major: </label>
                <input type="text" value={major} onChange={(event) => setMajor(event.target.value)}></input>
            </div>
            <div className="field">
                <label>Start Date: </label>
                <input type="month" value={start} onChange={(event) => setStart(event.target.value)}></input>  
            </div>
            <div className="field">
                <label>End Date: </label>
                <input type="month" value={end} onChange={(event) => setEnd(event.target.value)}></input>
            </div>
        </>
    )
}

export default Education;