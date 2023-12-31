import { useState } from "react";
import { v4 as uuid } from "uuid";
import '../styles/forms.css'

function Experience({isEditing}){
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

    if(isEditing){
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
    else{
        return(
            <>
            <h1>Experience</h1>
            {exp.map((job) => 
                <div key={job.id}>
                    <div className="field">
                        <label>Company: </label>
                        <span>{job.company}</span>
                    </div>
                    <div className="field">
                        <label>Position: </label>
                        <span>{job.position}</span>
                    </div>
                    <div className="field">
                        <label>Start Date: </label>
                        <span>{job.start}</span>
                    </div>
                    <div className="field">
                        <label>End Date: </label>
                        <span>{job.end}</span>
                    </div>
                    <div className="field">
                        <label>Job Description: </label>
                        <p>{job.description}</p>
                    </div>
                </div>
            )}
        </>    
        )
    }
}

export default Experience;