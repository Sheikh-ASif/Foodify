import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({      //createSlice take config that is the name, initialState, reducers
    name: 'cart',  
    initialState: {
        items: [],
    },
    reducers:{
        addItems: (state, action) => {
            //mutataing the state over here
            state.items.push(action.payload);      //this gona update the state/slice inside the redux store
        },
        removeItem:(state) => {
            state.items.pop();
        },
        clearCart:(state) => {
            //whenever you do state = [""] then when you click on the clearcart btn nothing gona happen because its gives the refrence not mutate/update the actual state
             state.items.length = 0;     // this is similar to the   state.items = [];
            // return [];  

            // rtk says do either the mutate the stae or return the new state  state.items.length = 0;   or  return []; both are the clear the cart 
        },

    },
});


export const { addItems, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;