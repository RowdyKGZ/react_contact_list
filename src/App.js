import React, { useState } from "react";
import AddContact from "./components/AddContact/AddContact";
import ContactList from "./components/ContactsList/ContactList";
import EditContacts from "./components/EditContacts/EditContacts";

function App() {
    let [contacts, setContacts] = useState([]);
    let [editContact, setEditContact] = useState({});
    let [isEdit, setIsEdit] = useState(false);

    function handleNewContact(newContact) {
        let newContactsArr = [...contacts];
        newContactsArr.push(newContact);
        setContacts(newContactsArr);
    }

    function handleDeleteContact(id) {
        let newContactsArray = contacts.filter((item) => {
            return item.id !== id;
        });
        setContacts(newContactsArray);
    }

    function handleEditIndex(index) {
        setIsEdit(true);
        setEditContact(contacts[index]);
    }

    function handleSaveEditedContact(newContact) {
        let newContactsArr = contacts.map((item) => {
            if (item.id === newContact.id) {
                return newContact;
            }
            return item;
        });
        setContacts(newContactsArr);
        setIsEdit(false);
    }

    return (
        <div className="App">
            <AddContact handleNewContact={handleNewContact} />
            {isEdit ? (
                <EditContacts
                    editContact={editContact}
                    handleSaveEditedContact={handleSaveEditedContact}
                />
            ) : null}
            <ContactList
                contacts={contacts}
                handleDeleteContact={handleDeleteContact}
                handleEditIndex={handleEditIndex}
            />
        </div>
    );
}

export default App;
