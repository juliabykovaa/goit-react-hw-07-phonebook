import React from 'react';
import { ContactList, ContactItem, DeleteButton } from './ContactBook.styled';

export const ContactBook = ({ contacts, onDeleteContact }) => {
  return (
    <>
      <ContactList>
        {contacts.map(contact => (
          <ContactItem key={contact.id}>
            <p>
              {contact.name}: {contact.number}
            </p>
            <DeleteButton onClick={() => onDeleteContact(contact.id)}>
              X
            </DeleteButton>
          </ContactItem>
        ))}
      </ContactList>
    </>
  );
};


export default ContactBook