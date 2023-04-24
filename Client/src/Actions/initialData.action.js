import axiosInstance from "../Helpers/axios";
import { categoryConstant, initialDataConstants, orderConstants, productConstants } from "./constants"

export const getInitialData = () => {
    return async (dispatch) => {
        // dispatch({ type: initialDataConstants.GET_ALL_INITIAL_DATA_REQUEST });
        const res = await axiosInstance.post(`/initial-data`);

        if (res.status === 200){

            const { categories, products, orders } = res.data;
            console.log(res.data);
            dispatch({
                type: categoryConstant.GET_ALL_CATEGORIES_SUCCESS,
                payload: {
                    categories
                }
            });

            dispatch({
                type: productConstants.GET_ALL_PRODUCT_SUCCESS,
                payload: {
                    products
                }
            });

            dispatch({
                type: orderConstants.GET_CUSTOMER_ORDER_SUCCESS,
                payload: {
                    orders
                }
            })
        }

        console.log(res);
    }
}