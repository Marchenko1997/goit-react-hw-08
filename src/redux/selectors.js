export const selectContacts = (state) => {
    // Добавьте проверку на тип данных
    return Array.isArray(state.contacts.items) ? state.contacts.items : [];
};

export const selectFilter = (state) => {
    // Добавьте проверку на тип данных
    return typeof state.filters.name === 'string' ? state.filters.name : "";
};
