import { categoryConstant } from "../Actions/constants"

const initState = {
    categories : [],
    loading: false,
    error: null,
}

const buildNewCategories = (categories, category) => {
    let myCategories = [];

    for(let cat of  categories){
        myCategories.push({
            ...cat,
        })
    }
    return categories
}

export default (state = initState, action) => {
    switch (action.type){
        case categoryConstant.GET_ALL_CATEGORIES_SUCCESS:
            state = {
                ...state,
                categories: action.payload.categories,
            }
            break;
        case categoryConstant.ADD_NEW_CATEGORY_REQUEST:
            state = {
                ...state,
                loading: true
            }
            break;
        case categoryConstant.ADD_NEW_CATEGORY_SUCCESS:
            const updatedCategories = buildNewCategories(state.categories, action.payload.category);
            console.log(updatedCategories);
            state = {
                ...state,
                categories: updatedCategories,
                loading: false
            }
            break;
        case categoryConstant.ADD_NEW_CATEGORY_FAILURE:
            state = {
                ...initState,
            }
            break;
    }

    return state;
}