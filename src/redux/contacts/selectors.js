import { createSelector } from '@reduxjs/toolkit';



export const selectContacts = (state) => {
    console.log("Selecting contacts:", state.contacts.items);
    return state.contacts.items;
};

export const selectIsLoading = (state) => {
    console.log("Selecting loading state:", state.contacts.loading);
    return state.contacts.loading;
};

export const selectError = (state) => {
    console.log("Selecting error state:", state.contacts.error);
    return state.contacts.error;
};

export const selectNameFilter = (state) => {
    console.log("Selecting name filter:", state.filters);
    return state.filters;
};

export const selectFilteredContacts = createSelector(
    [selectContacts, selectNameFilter],
    (contacts, filter) => {
        console.log("Current filter value inside selector:", filter);
        return contacts.filter(contact => {
            return typeof contact.name === 'string'
        });
    }
);
