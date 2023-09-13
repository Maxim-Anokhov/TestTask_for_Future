import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({

    name: "filters",
    initialState: {
        bookName: '',
        categories: "all",
        sortingBy: "relevance"
    },

    reducers: {
        getBookName(state, action) {
            state.bookName = action.payload
            
        },
        sortFromCategory(state, action) {
            state.categories = action.payload
        },
        sortFromRelevance(state, action) {
            state.sortingBy = action.payload
        }
    }



})

export const { sortFromCategory, sortFromRelevance,getBookName } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;