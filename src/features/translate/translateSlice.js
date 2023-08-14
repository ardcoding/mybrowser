import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    translate: "",
    language:"",
    status:"idle",
    error:null
};

export const translateSlice = createSlice({
    name:"translate",
    initialState,
    reducers:{
        translateSuccess(state, action){
            state.translate = action.payload.data;
            state.language = action.payload.lang;
            state.status = "succeeded";
        },
        translateFailed(state, action){
            state.error = action.payload;
            state.status = "failed";
        }
    }
})

export const {translateSuccess, translateFailed} = translateSlice.actions;
export default translateSlice.reducer;