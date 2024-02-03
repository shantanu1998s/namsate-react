import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:"cart",
    initialState:{
        items:[]
    },
    reducers:{
        addItem:(state, action)=>{
            state.items.push(action.payload)
        },
        removeItem: (state, action) => {
            const indx = action.payload;
            state.items.splice(indx, 1); // Remove one item at the specified index
          },
          
        clearItem:(state)=>{
            state.items.length=0;
        }
    }
})

export const {addItem, removeItem, clearItem}=cartSlice.actions;
export default cartSlice.reducer;