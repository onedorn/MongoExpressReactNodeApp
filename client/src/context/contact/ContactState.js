import React, { useReducer } from 'react';
import uuid from 'uuid';
import ContactContext from './contactContext';
import contactReducer from './contactReducer';
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER
} from '../types';

const ContactState = props => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: 'Will Smith',
        email: 'smith@gmail.com',
        phone: '222-222-222',
        type: 'personal'
      },
      {
        id: 2,
        name: 'Will Smith',
        email: 'smith@gmail.com',
        phone: '222-222-222',
        type: 'professional'
      }
    ]
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  // Add contact
  const addContact = contact => {
    contact.id = uuid.v4();
    dispatch({type: ADD_CONTACT, payload: contact})
  };

  // Delete contact
  const deleteContact = id => {
    dispatch({type: DELETE_CONTACT, payload: id})
  };

  // Set current

  // Clear current contact

  // Update contact

  // Filter contacts

  // Clear filter

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        addContact,
        deleteContact
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
