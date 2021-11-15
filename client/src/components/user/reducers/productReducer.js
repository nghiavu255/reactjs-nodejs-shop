import {
	PRODUCTS_LOADED_SUCCESS,
	PRODUCTS_LOADED_FAIL,
	PRODUCTS_LOADED_REQUEST,
	PRODUCTS_LOADED_PAGE,
} from '../contexts/constants'

export const productReducer = (state, action) => {
	//  const { type, payload } = action
	// console.log(action.payload.productsLoading)
	switch (action.type) {
		case PRODUCTS_LOADED_REQUEST:
			return {
				...state,
			}
		case PRODUCTS_LOADED_SUCCESS:
			return {
				...state,
				products: action.payload.products,
				productsLoading: false,
				// lengthPage:Math.round(action.payload.lengthProduct/8) +1,
			}

		case PRODUCTS_LOADED_FAIL:
			return {
				...state,
				products: [],
				productsLoading: false
			}



		default:
			return state
	}
}