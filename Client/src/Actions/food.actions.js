import axiosInstance from '../Helpers/axios'

export const addFoodItem = form => {
    return async (dispatch) => {
        const res = await axiosInstance.post(`product/create`, form);
        console.log(res);
    }
}

