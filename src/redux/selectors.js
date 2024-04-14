import { createSelector } from '@reduxjs/toolkit';
export const selectContacts = (state) => state.contacts.items;
export const selectIsLoading =(state) => state.contacts.loading;
export const selectError = (state) => state.contacts.error;
export const selectFilter = (state) => state.filters.name;

export const selectFilteredContacts = createSelector(
    [selectContacts, selectFilter],
    (contacts, filter) => {
        return contacts.filter(contact => {
            return typeof contact.name === 'string' && contact.name.toLowerCase().includes(filter.toLowerCase())
        });
    }
);

