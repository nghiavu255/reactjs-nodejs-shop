import {
	ADD_TO_CART
} from '../contexts/constants'
export const cartReducer =(state, action) =>{
    // console.log(action.payload)
    switch(action.type) {
        case 'ADD_TO_CART':
			return {
				...state,
                cart : action.payload
			}

		default:
			return state
        
    }
}