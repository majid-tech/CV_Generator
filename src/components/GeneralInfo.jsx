import { useState } from "react";

function GeneralInfo() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    return (
        <>
        <form action="">
            <input type="text" value={name} placeholder="Name" />

            <input type="email" name="" value={email} placeholder="Email" />

            <input type="tel" name="" value={phone} placeholder="Phone Number" />

            <button>Edit</button>
            <button type="submit">Submit</button>
        </form>
        </>
    )
};

export default GeneralInfo;