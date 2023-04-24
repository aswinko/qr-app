import axiosInstance from "../Helpers/axios";
import { qrCodeConstants } from "./constants";

export const getAllQrCode = () => {
    return async (dispatch) => {
        const res = await axiosInstance.get(`/get-all-qrcode`);
        console.log("res : " + res);

        dispatch({ type: qrCodeConstants.GET_ALL_QRCODE_REQUEST });

        const { qrCodes } = res.data;
        if(res.status === 200) {
            dispatch({
                type: qrCodeConstants.GET_ALL_QRCODE_SUCCESS,
                payload: { qrCodes: qrCodes }
            })
        }else{ 
            dispatch({
                type: qrCodeConstants.GET_ALL_QRCODE_FAILURE,
                payload: {
                    error: res.data.error
                }
            })
        }
    }
}

export const addQrCode = (form) => {
    return async (dispatch) => {

        dispatch({ type: qrCodeConstants.ADD_NEW_QRCODE_REQUEST});
        try {
            const res = await axiosInstance.post(`/generate-qrcode`, {tableId: form})
    
            if(res.status === 201) {
                dispatch({
                    type: qrCodeConstants.ADD_NEW_QRCODE_SUCCESS,
                    payload: {qrCodes: res.data.qrCode}
                });
            }else{
                dispatch({
                    type: qrCodeConstants.ADD_NEW_QRCODE_FAILURE,
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