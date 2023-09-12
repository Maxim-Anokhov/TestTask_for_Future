import { createSlice ,createAsyncThunk} from "@reduxjs/toolkit";

export const fetchBooks=createAsyncThunk(
    "search/fetchBooks",
    async function(bookName){
    const url=`https://www.googleapis.com/books/v1/volumes?q=${bookName}&key=AIzaSyBecL_RLC1qmlcRq9nRA59CvmBNkkpHX6I`

        const foundBooks= await fetch(url).then(data=> data.json())
    
        return foundBooks
    }
)
 
const searchSlice=createSlice({
    name:"search",
    initialState:{
        books:[],
        status:null,
        error:null
    },
      reducers:{

      },
      extraReducers:{
       [ fetchBooks.pending]:(state)=>{
        state.status='loading';
        state.error=null
    },
       [fetchBooks.fulfilled]:(state,action)=>{
        state.status="resolved";
        state.books=action.payload
       },
    //    [fetchBooks.rejected]:(state.action)=>{},
      }
})
 export const {getBook}=searchSlice.actions;
 export const  searchReducer=searchSlice.reducer