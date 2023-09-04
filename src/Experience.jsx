import { useState } from "react";
import { v4 as uuid } from "uuid";
import './forms.css';

function Experience(){
    const [exp, setExp] = useState([]);

    function updateExperience(n, field, val){
        const newExp = [...exp];
        newExp[n] = {...newExp[n], [field]: val};
        setExp(newExp);
    }

    function addExperience(){
        const newExp = {company: "", position: "", start: "", end: "", desription: "", id: uuid()};
        const expCopy = [...exp];
        expCopy.push(newExp);
        setExp(expCopy);
    }

    function removeExperience(job){
        const newExp = exp.filter(thisJob => thisJob !== job);
        setExp(newExp);
    }

    return(
        <>
            <h1>Experience</h1>
            {exp.map((job, index) => 
                <div key={job.id}>
                    <button onClick={() => removeExperience(job)}>Remove</button>
                    <div className="field">
                        <label>Company: </label>
                        <input type="text" value={job.company} onChange={event => updateExperience(index, "company", event.target.value)}></input>
                    </div>
                    <div className="field">
                        <label>Position: </label>
                        <input type="text" value={job.position} onChange={event => updateExperience(index, "position", event.target.value)}></input>
                    </div>
                    <div className="field">
                        <label>Start Date: </label>
                        <input type="month" value={job.start} onChange={(event) => updateExperience(index, "start", event.target.value)}></input>  
                    </div>
                    <div className="field">
                        <label>End Date: </label>
                        <input type="month" value={job.end} onChange={(event) => updateExperience(index, "end", event.target.value)}></input>
                    </div>
                    <div className="field">
                        <label>Job Description: </label>
                        <textarea value={job.description} onChange={event => updateExperience(index, "description", event.target.value)}></textarea>
                    </div>
                </div>
            )}
            <button onClick={() => addExperience()}>Add Experience</button>
        </>
    )
}

export default Experience;