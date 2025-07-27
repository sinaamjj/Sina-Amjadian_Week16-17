import React, { useContext } from "react";
import ContactsList from "./ContactsList";
import inputs from "../constants/inputs";
import styles from "./Contacts.module.css";
import { Context } from "../context/Context";

function Contacts() {
  const {
    contact,
    alert,
    contacts,
    changeHandler,
    addHandler,
    deleteHandler,
    editHandler,
    isEditing,
    editSubmitHandler,
    searchTerm,
    changeSearchHandler,
    filteredContacts,
  } = useContext(Context);

  return (
    <div className={styles.container}>
      <div className={styles.search}>
        <input
          className={styles.searchInput}
          type="text"
          placeholder="Search Contacts"
          value={searchTerm}
          onChange={changeSearchHandler}
        />
      </div>

      <div className={styles.form}>
        {inputs.map((input, index) => (
          <input
            key={index}
            type={input.type}
            placeholder={input.placeholder}
            name={input.name}
            value={contact[input.name]}
            onChange={changeHandler}
          />
        ))}
        {isEditing ? (
          <button onClick={editSubmitHandler}>Save Changes</button>
        ) : (
          <button onClick={addHandler}>Add Contact</button>
        )}
      </div>

      <div className={styles.alert}>{alert && <p>{alert}</p>}</div>

      <ContactsList
        contacts={filteredContacts}
        deleteHandler={deleteHandler}
        editHandler={editHandler}
      />
    </div>
  );
}

export default Contacts;
