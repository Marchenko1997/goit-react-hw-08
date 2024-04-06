import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
    items: [],
};

const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {
        addContact:{
            reducer(state, action) {
                state.items.push(action.payload);
            },
            prepare(name, number) {
                return{
                    payload: {
                        id: nanoid(),
                        name,
                        number,
                    },
                };
            },
        },
        deleteContact(state,action) {
          const index = state.items.filter(contact => contact.id !== action.payload);
            state.splice(index, 1);
        },
    },
});

export const { addContact, deleteContact} = contactsSlice.actions;
export default contactsSlice.reducer;