import {createSlice} from "@reduxjs/toolkit";

const filtersSlice=createSlice({

    name:"filters",
    initialState:{
        categories:"all",
        sortingBy:"relevance"
    },

    reducers:{
        sortFromCategory(state,action){

        },
        sortFromRelevance(state,action){

        }
    }

    

})

export const{sortFromCategory,ortFromRelevance}=filtersSlice.actions;
export const filtersReducer=filtersSlice.reducer;