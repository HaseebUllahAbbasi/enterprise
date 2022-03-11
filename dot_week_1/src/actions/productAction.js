import { ADD_ALL, ADD_PRODUCT } from "../constants/actionDefined"
import data_home from "../home_data"

export const getAllProducts =  ()=> async (dispatch)=> {    dispatch({type:ADD_ALL, payload:  { data:data_home} })} 
export const addToCart =  (id)=> async (dispatch)=> {    dispatch({type:ADD_PRODUCT, payload:  id })} 