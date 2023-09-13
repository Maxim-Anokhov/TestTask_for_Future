import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchBooks = createAsyncThunk(
    "search/fetchBooks",
    async function ({bookName,categoriesState,sortingState}) {
        
        const url = `https://www.googleapis.com/books/v1/volumes?q=${bookName}&orderBy=${sortingState}&key=AIzaSyBecL_RLC1qmlcRq9nRA59CvmBNkkpHX6I`

        const foundBooks = await fetch(url).then(data => data.json())
       let books
        if(categoriesState!=='all') {
            books=foundBooks.items.filter((items)=>items.volumeInfo.categories.find(i=>i!==categoriesState));
console.log(books)
            return books

        }else{return books=foundBooks}
        // return books
    }
)

const searchSlice = createSlice({
    name: "search",
    initialState: {
        books: [],
        details: [],
        status: null,
        error: null
    },
    reducers: {
        getDetails(state, action) {
            state.details = action.payload
        }

    },
    extraReducers: {
        [fetchBooks.pending]: (state) => {
            state.status = 'loading';
            state.error = null
        },
        [fetchBooks.fulfilled]: (state, action) => {
            state.status = "resolved";
            state.books = action.payload
        },
        //    [fetchBooks.rejected]:(state.action)=>{},
    }
})
export const { getDetails } = searchSlice.actions;
export const searchReducer = searchSlice.reducer