import {createSlice} from '@reduxjs/toolkit'

const initstate={
cartItems:[],
}

const cartSlice=createSlice({
name:'name',
initialState:initstate,
reducers:{
addToCart:(state,action)=>{
state.cartItems.push(action.payload)
},
removeFromCart:(state,action)=>{
state.cartItems=state.cartItems.filter(item=>
item.id !==action.payload.id
)
}
}
})
export const{addToCart,removeFromCart}=cartSlice.actions
export default cartSlice.reducer