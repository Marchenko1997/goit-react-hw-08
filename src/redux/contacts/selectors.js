import { createSelector } from '@reduxjs/toolkit';

// Используем createSelector, чтобы извлечь свойство name из объекта state.filters
// export const selectNameFilter = (state) => state.filters.name;

export const selectContacts = (state) => state.contacts.items;
export const selectIsLoading = (state) => state.contacts.loading;
export const selectError = (state) => state.contacts.error;

export const selectFilteredContacts = createSelector(
    [selectContacts],
    (contacts, filter) => {
        return contacts.filter(contact => {
            return typeof contact.name === 'string' && contact.name.toLowerCase().includes(filter.toLowerCase())
        });
    }
);
