import { createSlice } from "@reduxjs/toolkit";

const langSlice = createSlice({
    name:"lang" , 
    initialState:{
        language :"en",
    },
    reducers:{
        changeLang: (state ,action) => {
            state.language = action.payload;
        }
    }
});

export default langSlice.reducer;

export const {changeLang} = langSlice.actions;