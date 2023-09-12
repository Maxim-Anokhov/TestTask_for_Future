import {configureStore} from "@reduxjs/toolkit"
import {searchReducer} from "./SearchingSlice"
import { filtersReducer } from "./FiltersSLice"
export const store=configureStore({
    reducer:{
search:searchReducer, 
filters:filtersReducer
    }
})
