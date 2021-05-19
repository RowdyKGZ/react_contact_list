import React from "react";

const ContactList = (props) => {
    return (
        <div>
            {props.contacts.map((item, index) => (
                <ul key={item.id}>
                    <li>Имя: {item.name}</li>
                    <li>Фамилие: {item.surname}</li>
                    <li>Телефон: {item.phone}</li>
                    <li>
                        <button
                            onClick={() => props.handleDeleteContact(item.id)}
                        >
                            Delete
                        </button>
                        <button onClick={() => props.handleEditIndex(index)}>
                            Eddit
                        </button>
                    </li>
                </ul>
            ))}
        </div>
    );
};

export default ContactList;
