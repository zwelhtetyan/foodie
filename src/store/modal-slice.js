import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    addingState: {
        isOpen: false,
        content: 'hi',
        newItem: null,
        addingTo: null,
    },
};

const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        onClose(state) {
            state.addingState.isOpen = false;
        },

        conflixItem(state, action) {
            state.addingState.isOpen = true;
            state.addingState.content = action.payload.content;
            state.addingState.newItem = action.payload.newItem;
            state.addingState.addingTo = action.payload.addingTo;
        },
    },
});

export const modalSliceAction = modalSlice.actions;
export default modalSlice.reducer;
