import { qr, qrCodeConstants,  } from "../Actions/constants"

const initState = {
    qrCodes : [],
    loading: false,
    error: null,
}

const buildNewQrCodes = (qrCodes, qrCode) => {
    let myQrCodes = [];

    for(let cat of  qrCodes){
        myQrCodes.push({
            ...cat,
        })
    }
    return qrCodes
}

export default (state = initState, action) => {
    switch (action.type){
        case qrCodeConstants.GET_ALL_QRCODE_SUCCESS:
            state = {
                ...state,
                qrCodes: action.payload.qrCodes,
            }
            break;
        case qrCodeConstants.ADD_NEW_QRCODE_REQUEST:
            state = {
                ...state,
                loading: true
            }
            break;
        case qrCodeConstants.ADD_NEW_QRCODE_SUCCESS:
            const updatedQrCode = buildNewQrCodes(state.qrCodes, action.payload.qrCodes);
            console.log(updatedQrCode);
            state = {
                ...state,
                qrCodes: updatedQrCode,
                loading: false
            }
            break;
        case qrCodeConstants.ADD_NEW_QRCODE_FAILURE:
            state = {
                ...initState,
            }
            break;
    }

    return state;
}