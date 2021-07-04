import React from "react";
import Input from "../Input";
import ContactsList from "../ContactsList";
import styles from "./Contacts.module.css";

const Contacts = ({
  title,
  filterFunction,
  filterValue,
  handleFilter,
  removeContact,
}) => (
  <>
    <h2 className={styles.title}>{title}</h2>
    <Input
      label="Find contacts by name:"
      type="text"
      name="filter"
      value={filterValue}
      handleInputChange={handleFilter}
    />
    <ContactsList contacts={filterFunction()} removeContact={removeContact} />
  </>
);

export default Contacts;
