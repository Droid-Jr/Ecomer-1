import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { isLoading } from "./loader.slice";
import getConfigHttp from '../../helpers/getConfigHttp'
// console.log(getConfigHttp)
export const cartSlice = createSlice({
    name: "cart",
    initialState: [],
    reducers:{
        setProductCart: (state, action) => action.payload,
    }
}) 

export const {setProductCart} = cartSlice.actions
export default cartSlice.reducer

export const getProductCartThunk = () => dispatch => {
    dispatch( isLoading(true) )
    axios.get(`https://e-commerce-api-v2.academlo.tech/api/v1/cart`,getConfigHttp())
    .then(cart => dispatch( setProductCart(cart.data) ) )
    .catch(console.error)
    .finally(() => dispatch( isLoading(false) ))
}

export const addProductCartThunk = (data) => dispatch => {
    dispatch( isLoading(true) )
    axios.post(`https://e-commerce-api-v2.academlo.tech/api/v1/cart`,data,getConfigHttp())
    .then(() => dispatch( getProductCartThunk()) )
    .catch(err => 
        err.response.status ? alert("Ya agregó el producto") : alert("codigo de erro: "+err.response.status)
    )
    .finally(() => dispatch( isLoading(false) ))
}

export const updateProductCartThunk = (data) => dispatch => {
    dispatch( isLoading(true) )
    axios.put(`https://e-commerce-api-v2.academlo.tech/api/v1/cart/${data.id}`,data.quantity,getConfigHttp())
    .then(() => dispatch( getProductCartThunk()) )
    .catch(err => 
        err.response.status ? alert("Ya agregó el producto") : alert("codigo de erro: "+err.response.status)
    )
    .finally(() => dispatch( isLoading(false) ))
}
export const deleteProductCartThunk = (data) => dispatch => {
    dispatch( isLoading(true) )
    axios.delete(`https://e-commerce-api-v2.academlo.tech/api/v1/cart/${data}`,getConfigHttp())
    .then(() => dispatch( getProductCartThunk()) )
    .catch(err => 
        err.response.status ? alert("Ya agregó el producto") : alert("codigo de erro: "+err.response.status)
    )
    .finally(() => dispatch( isLoading(false) ))
}

export const addPurchasesThunk = () => dispatch => {
    dispatch( isLoading(true) )
    axios.post(`https://e-commerce-api-v2.academlo.tech/api/v1/purchases`,{},getConfigHttp())
    .then(() => dispatch( getProductCartThunk()) )
    .catch(err => 
        err.response.status ? alert("Ya agregó el producto") : alert("codigo de erro: "+err.response.status)
    )
    .finally(() => dispatch( isLoading(false) ))
}




