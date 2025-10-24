import { useState } from "react";

function GeneralInfo() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [isEditing, setIsEditing] = useState(true);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsEditing(false);
    };

    return (
        <>
        {isEditing ? (
        <form onSubmit={handleSubmit}>
            <input 
            type="text" 
            value={name} 
            placeholder="Name" 
            onChange={(e) => setName(e.target.value)}
            />

            <input 
            type="email" 
            name="" 
            value={email} 
            placeholder="Email" 
            onChange={(e) => setEmail(e.target.value)}
            />

            <input 
            type="tel" 
            name="" 
            value={phone} 
            placeholder="Phone Number" 
            onChange={(e) => setPhone(e.target.value)}
            />

            <button type="submit">Submit</button>

        </form>
        ) : (
            <div style={{textAlign: "left"}}>
                <h3>General Information</h3>
                <p>Name: {name || "(none)"}</p>
                <p>Email: {email || "(none)"}</p>
                <p>Phone: {phone || "(none)"}</p>
                <hr />
                <button type="button" onClick={() => setIsEditing(true)}>
                    Edit
                </button>
            </div>
        )}
    </>
    )
};

export default GeneralInfo;