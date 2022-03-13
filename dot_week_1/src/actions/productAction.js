import { ADD_ALL, ADD_PRODUCT, DECREASE_PRODUCT, INCREASE_PRODUCT, REMOVE_PRODUCT,GET_ALL } from "../constants/actionDefined"
import data_home from "../home_data"

export const getAllProducts =  ()=> async (dispatch)=> {    dispatch({type:GET_ALL })} 
export const setAllProducts =  ()=> async (dispatch)=> {    dispatch({type:ADD_ALL, payload:  { data:data_home} })} 
export const addToCart =  (id)=> async (dispatch)=> {    dispatch({type:ADD_PRODUCT, payload:  id })} 
export const increaseProduct =  (id)=> async (dispatch)=> {    dispatch({type:INCREASE_PRODUCT, payload:  id })} 
export const decreaseProduct =  (id)=> async (dispatch)=> {    dispatch({type:DECREASE_PRODUCT, payload:  id })}
export const removeProduct =  (id)=> async (dispatch)=> {    dispatch({type:REMOVE_PRODUCT, payload:  id })}