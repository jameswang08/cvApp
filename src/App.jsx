import General from "./components/General";
import Education from "./components/Education";
import Experience from "./components/Experience";
import { useState } from "react";

function App(){
    const [edit, setEdit] = useState(true);
    return(
        <>
            <div className="mainForm">
                <General isEditing={edit}></General>
                <Education isEditing={edit}></Education>
                <Experience isEditing={edit}></Experience>
            </div>
            {(edit) ? (<button onClick={() => setEdit(false)}>Submit</button>) : (<button onClick={() => setEdit(true)}>Edit</button>)} 
        </>
    )
}

export default App;