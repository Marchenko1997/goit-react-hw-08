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

// export const selectNameFilter = (state) => {
//     return state.filters.name;
//   };
  
//   export const selectPhoneFilter = (state) => {
//     return state.filters.phone;
//   };
  
//   export const selectFilteredContacts = createSelector(
//     [selectContacts, selectNameFilter, selectPhoneFilter],
//     (contacts, nameFilter, phoneFilter) => {
//       return contacts.filter((contact) => {
//         const nameMatch = contact.name.toLowerCase().includes(nameFilter.trim().toLowerCase());
//         const phoneMatch = contact.number.includes(phoneFilter.trim());
//         return nameMatch || phoneMatch;
//       });
//     }
// );