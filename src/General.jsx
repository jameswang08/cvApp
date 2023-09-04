import { useState } from 'react';
import './forms.css'

function General(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    return(
        <>
            <h1>General</h1>
            <div className="field">
                <label>Name: </label>
                <input type="text" value={name} onChange={(event) => setName(event.target.value)}></input>
            </div>
            <div className="field">
                <label>Email: </label>
                <input type="email" value={email} onChange={(event) => setEmail(event.target.value)}></input>
            </div>
            <div className="field">
                <label>Phone: </label>
                <input type="tel" value={phone} onChange={(event) => setPhone(event.target.value)}></input>
            </div>
        </>
    )
}

export default General;