import { useState } from "react";

const AddContact = (props) => {
    let [name, setName] = useState("");
    let [surname, setSurname] = useState("");
    let [phone, setPhone] = useState("");

    function handleClick() {
        let newContact = {
            name,
            surname,
            phone,
            id: Date.now(),
        };
        props.handleNewContact(newContact);
        setName("");
        setSurname("");
        setPhone("");
    }

    return (
        <div>
            <input
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="Имя"
                value={name}
            ></input>
            <input
                onChange={(e) => setSurname(e.target.value)}
                type="text"
                placeholder="Фамилия"
                value={surname}
            ></input>
            <input
                onChange={(e) => setPhone(e.target.value)}
                type="text"
                placeholder="Номер телефона"
                value={phone}
            ></input>
            <button onClick={handleClick}>Add Contact</button>
        </div>
    );
};

export default AddContact;
