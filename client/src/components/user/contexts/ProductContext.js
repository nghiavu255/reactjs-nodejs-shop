import { createContext, useReducer, useState ,useEffect} from 'react'
import { productReducer } from '../reducers/productReducer'
import axios from 'axios'
import {
	apiUrl,
	PRODUCTS_LOADED_FAIL,
	PRODUCTS_LOADED_SUCCESS,
} from './constants'

export const ProductContext = createContext() // khoi tao context kho luu trang thai moi


const ProductContextProvider = ({ children }) => { 
	// State
	//khoi tao gia tri dau cho state
	const [productState, dispatch] = useReducer(productReducer, {
		products: [],
		productsLoading: true,
		// lengthPage:0,
	})

	// Get all products
	const getProducts = async () => {
		try {
			const response = await axios.get(`${apiUrl}/products`)
			if (response.data.success) {
				dispatch({ type: PRODUCTS_LOADED_SUCCESS, payload: response.data }) // action     
				
			}
			return response.data
		} catch (error) {
			dispatch({ type: PRODUCTS_LOADED_FAIL })
		}
	}
	useEffect(() => getProducts(), [])

	// sort product
	// const sortProducts = async ()=>{
	// 	await getProducts()
	// 	console.log("getProducts"+getProducts())

	// }

	// product context data
	const productContextData = {
		productState,
		getProducts,
		// sortProducts
	
	}

	return (
		<ProductContext.Provider value={productContextData}>
			{children}
		</ProductContext.Provider>
	)
}

export default ProductContextProvider