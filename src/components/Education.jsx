import { useState } from "react";
import '../styles/forms.css'

function Education({isEditing}){
    const [school, setSchool] = useState("");
    const [major, setMajor] = useState("");
    const [start, setStart] = useState("");
    const [end, setEnd] = useState("");

    if(isEditing){
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
    else{
        return(
            <>
            <h1>Education</h1>
            <div className="field">
                <label>School: </label>
                <span>{school}</span>
            </div>
            <div className="field">
                <label>Major: </label>
                <span>{major}</span>
            </div>
            <div className="field">
                <label>Start Date: </label>
                <span>{start}</span>
            </div>
            <div className="field">
                <label>End Date: </label>
                <span>{end}</span>
            </div>
        </> 
        )
    }
}

export default Education;