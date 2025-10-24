import { useState } from "react";


function PracticalExperience (){
    // (company name, position title, main responsibilities of your jobs, date from and until when you worked for that company)
    const [companyName, setCompanyName] = useState('')
    const [positionTitle, setPositionTitle] = useState('')
    const [responsibilities, setResponsibilities] = useState('')
    const [startingDate, setStartingDate] = useState('')
    const [endingDate, setEndingDate] = useState('')
    const [isEditing, setIsEditing] = useState(true)

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsEditing(false);
    };

    return(
        <>
        {isEditing ? (
            <form onSubmit={handleSubmit}>
                <input 
                type="text"
                value={companyName}
                placeholder="Company Name"
                onChange={(e) => setCompanyName(e.target.value)}
                />

                <input 
                type="text"
                value={positionTitle}
                placeholder="Position Title"
                onChange={(e) => setPositionTitle(e.target.value)}
                />

                <input 
                type="text"
                value={responsibilities}
                placeholder="Responsibilities"
                onChange={(e) => setResponsibilities(e.target.value)}
                />

                <input 
                type="date" 
                name="" 
                id="" 
                value={startingDate}
                onChange={(e) => setStartingDate(e.target.value)}
                />

                <input 
                type="date" 
                name="" 
                id="" 
                value={endingDate}
                onChange={(e) => setEndingDate(e.target.value)}
                />

                <button type="submit">Submit</button>
            </form>
        ) : (
            <div style={{textAlign: "left"}}>
                <h3>Practical Experience</h3>
                <p>Company Name: {companyName || "(none)"}</p>
                <p>Position Title: {positionTitle || "(none)"}</p>
                <p>Date Began: {startingDate || "(none)"}</p>
                <p>Date Ended: {endingDate || "(none)"}</p>
                <hr />
                <button type="button" onClick={() => setIsEditing(true)}>
                    Edit
                </button>
            </div>
        )}
        </>
    )
}


export default PracticalExperience;