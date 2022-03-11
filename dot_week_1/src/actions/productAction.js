import { ADD_ALL } from "../constants/actionDefined"
import data_home from "../home_data"

export const getAllProducts =  ()=> async (dispatch)=> {    dispatch({type:ADD_ALL, payload:  { data:data_home} })} 