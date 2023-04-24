import axiosInstance from "../Helpers/axios";
import { categoryConstant } from "./constants";

export const getAllCategory = () => {
    return async (dispatch) => {
        const res = await axiosInstance.get(`category/getCategory`);
        console.log(res);

        dispatch({ type: categoryConstant.GET_ALL_CATEGORIES_REQUEST });

        const { categories } = res.data;

        if(res.status === 200) {
            dispatch({
                type: categoryConstant.GET_ALL_CATEGORIES_SUCCESS,
                payload: { categories: categories }
            })
        }else{ 
            dispatch({
                type: categoryConstant.GET_ALL_CATEGORIES_FAILURE,
                payload: {
                    error: res.data.error
                }
            })
        }
    }
}

export const addCategory = (form) => {
    return async (dispatch) => {

        dispatch({ type: categoryConstant.ADD_NEW_CATEGORY_REQUEST});
        try {
            const res = await axiosInstance.post(`category/addcategory`, {name: form})
    
            if(res.status === 201) {
                dispatch({
                    type: categoryConstant.ADD_NEW_CATEGORY_SUCCESS,
                    payload: {category: res.data.category}
                });
            }else{
                dispatch({
                    type: categoryConstant.ADD_NEW_CATEGORY_FAILURE,
                    payload: res.data.error
                });
            }
            console.log(res);
        } catch (error) {
            // const {} = error.response;
            console.log(error.response);
        }
    }
}