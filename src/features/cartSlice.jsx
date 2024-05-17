import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name:"cart",
    initialState:{
        cart:[]
    },
    reducers:{
        addToCart:(state,action)=>{
            // const isPresent = state.user.indexOf(action.payload);
            const isPresent = state.cart.findIndex((item)=>item.id === action.payload.id);
            if(isPresent >= 0){
                state.cart[isPresent].qnty += 1;
            }else{
                // const temp = {...action.payload ,qnty: 1}
                // state.cart = [...state.cart,temp]
                console.log(action.payload);
                state.cart.push({...action.payload,qnty:1})
            }

        },
        deleteSingleItem:(state,action)=>{
            console.log("single delete hai ye");
            
            const isPresent = state.cart.findIndex((item)=>item.id === action.payload.id);
            if(state.cart[isPresent].qnty >=1)
                state.cart[isPresent].qnty -=1;
        },
        deleteAllItems:(state,action)=>{
            console.log("all delete hai ye");
            console.log("delete all data",state.cart);
            state.cart=[]
        },
        deleteIndividualItem :(state,action)=>{
            const filteredData = state.cart.filter(data=>data.id != action.payload)
            state.cart = filteredData
        }
    }
})

export default cartSlice.reducer
export const {addToCart,deleteAllItems,deleteSingleItem,deleteIndividualItem} = cartSlice.actions