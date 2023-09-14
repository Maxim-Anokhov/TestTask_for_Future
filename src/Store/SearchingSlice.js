import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchBooks = createAsyncThunk(
    "search/fetchBooks",
    async function ({bookName,categoriesState,sortingState}) {
        
      
       
       
        const url = `https://www.googleapis.com/books/v1/volumes?q=${bookName}&orderBy=${sortingState}&key=AIzaSyBecL_RLC1qmlcRq9nRA59CvmBNkkpHX6I`

        const foundBooks = await fetch(url).then(data => data.json())
        const quantityBooks=foundBooks.totalItems
      
        let books
        if(categoriesState!=='All') {
           
            const notSortedBooks=foundBooks.items.filter(item=>item.volumeInfo.categories)
           
            books=notSortedBooks.filter(i=>i.volumeInfo.categories.find(i=>i===categoriesState))
         
            return {books, quantityBooks}

        }else {
           
            books=foundBooks.items
            
            return {books, quantityBooks}
        }
    }
)

const searchSlice = createSlice({
    name: "search",
    initialState: {
        books: [],
        details: [],
        quantityBooks:'',
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
            state.books = action.payload.books;
            state.quantityBooks=action.payload.quantityBooks
        },
        //    [fetchBooks.rejected]:(state.action)=>{},
    }
})
export const { getDetails } = searchSlice.actions;
export const searchReducer = searchSlice.reducer