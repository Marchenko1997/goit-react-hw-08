export const selectContacts = (state) => {
  return state.contacts.items;
};

export const selectIsLoading = (state) => {
  return state.contacts.loading;
};

export const selectError = (state) => {
  return state.contacts.error;
};
