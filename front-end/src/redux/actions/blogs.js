import * as api from "../api";
import { GET_BLOGS, ADD_BLOG, EDIT_BLOG, DELETE_BLOG } from "../constants";

export const getBlogs = () => async (dispatch)=>{
    try {
        const { data } = await api.getBlogs();
        dispatch({type: GET_BLOGS, data});
    } catch (e){
        alert(e?.response?.data?.msg);
      }
}

export const addBlog = (formData) => async (dispatch)=>{
    try {
        const { data } = await api.addBlog(formData);
        dispatch({type: ADD_BLOG, data});
    } catch (e){
        alert(e?.response?.data?.msg);
      }
}


export const editBlog = (formData, id) => async (dispatch)=>{
    try{
        const { data } = await api.editBlog(formData, id);
        dispatch({type: EDIT_BLOG, data});
    }catch (e){
        alert(e?.response?.data?.msg);
    }
}

export const deleteBlog = (formData) => async (dispatch)=>{
    try{
        const { data } = await api.deleteBlog(formData);
        dispatch({type: DELETE_BLOG, data});
    } catch (e){
        console.log("error");
    }
}