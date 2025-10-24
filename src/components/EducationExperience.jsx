import { useState } from "react"

function EducationExperience () {
    const [schoolName, setSchoolName] = useState('');
    const [studyTitle, setStudyTitle] = useState('');
    const [studyDateBegan, setstudyDateBegan] = useState('');
    const [studyDateEnded, setstudyDateEnded] = useState('');
    const [isEditing, setIsEditing] = useState(true);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsEditing(false);
    };
    // (school name, title of study and date of study)
    return (
        <>
        {isEditing ? (
            <form onSubmit={handleSubmit}>
                <input 
                type="text" 
                value={schoolName}
                placeholder="School Name"
                onChange={(e) => setSchoolName(e.target.value)}
                />

                <input 
                type="text" 
                value={studyTitle}
                placeholder="Study Title"
                onChange={(e) => setStudyTitle(e.target.value)}
                />

                <input 
                type="date" 
                name="" 
                id="" 
                value={studyDateBegan}
                onChange={(e) => setstudyDateBegan(e.target.value)}
                />

                <input 
                type="date" 
                name="" 
                id="" 
                value={studyDateEnded}
                onChange={(e) => setstudyDateEnded(e.target.value)}
                />

                <button type="submit">Submit</button>
            </form>
        ) : (
            <div style={{textAlign: "left"}}>
                <h3>Education Experience</h3>
                <p>School Name: {schoolName || "(none)"}</p>
                <p>Study Title: {studyTitle || "(none)"}</p>
                <p>Study Date Began: {studyDateBegan || "(none)"}</p>
                <p>Study Date Ended: {studyDateEnded || "(none)"}</p>
                <hr />
                <button type="button" onClick={() => setIsEditing(true)}>
                    Edit
                </button>
            </div>
        )}
        </>
    )
};

export default EducationExperience;