import { createSlice } from "@reduxjs/toolkit";
const initialData={
    Username:null
}
export const UserSlice=createSlice({
    name:"UserDetails",
    initialState:initialData,
    reducers:{
     saveUsername:(state,action)=>{
       state.Username=action.payload
     }
    }
})
export const {saveUsername}=UserSlice.actions
export default UserSlice.reducer