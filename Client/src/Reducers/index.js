import { combineReducers } from "redux";
import authReducers from "./auth.reducers";
import foodReducers from "./food.reducers";
import orderReducers from "./order.reducers";
import categoryReducers from "./category.reducers";
import qrcodeReducers from "./qrcode.reducers";

const rootReducer = combineReducers({
    auth: authReducers,
    category: categoryReducers,
    order: orderReducers,
    food: foodReducers,
    qrCode: qrcodeReducers
})

export default rootReducer