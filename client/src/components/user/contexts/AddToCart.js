import {createContext, useEffect, useReducer} from 'react'
import { ADD_TO_CART } from './constants'
import { cartReducer } from '../reducers/cartReducer'


export const CartContext = createContext()
const CartContextProvider = ({children})=>{
    const [cartState, dispatch] = useReducer(cartReducer, {
        cart:[],
	})
    const addTocart = (e)=>{
        if(e){
            dispatch({ type: ADD_TO_CART, payload: e })
        }
    }
    
    const cartContextData = {
		cartState,
        addTocart
	
	}

	return (
		<CartContext.Provider value={cartContextData}>
			{children}
		</CartContext.Provider>
	)

}
export default CartContextProvider