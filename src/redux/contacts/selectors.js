import { createSelector } from "@reduxjs/toolkit";

export const selectContacts = (state) => {
  return state.contacts.items;
};

export const selectIsLoading = (state) => {
  return state.contacts.loading;
};

export const selectError = (state) => {
  return state.contacts.error;
};

export const selectNameFilter = (state) => {
  return state.filters.name;
};

export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, filter) => {
    if (filter.length > 0) {
      return contacts.filter(({ name }) =>
        name.toLowerCase().includes(filter.trim().toLowerCase())
      );
    } else {
      return contacts;
    }
  }
);
