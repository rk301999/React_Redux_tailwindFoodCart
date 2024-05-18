import { createSlice } from "@reduxjs/toolkit";

const connectionSlice = createSlice({
    name:"connnect",
    initialState:{
        connect:true
    },
    reducers:{
        connectionStatus:(state,action)=>{
            state.connect = action.payload;
        }
    }
})

export default connectionSlice.reducer
export const {connectionStatus} = connectionSlice.actions