import React, { useContext, useEffect, useState } from 'react'
import { ProductContext } from '../contexts/ProductContext'
import './products.scss'
import cart from '../../../acsset/cart.png'
import { CartContext } from '../contexts/AddToCart'
const Products = () => { 
    const {cartState:{gh},addTocart} = useContext(CartContext)
    const [cartAdd,setCartAdd] = useState()
    const [countCart,setCountAdd] = useState(0)
    useEffect(()=>addTocart(cartAdd),[countCart])
    const handleCart = (e)=>{
        if(e){
            setCartAdd({
                ...cartAdd,
                [countCart]: e,
            })
           
            setCountAdd(countCart+1)

        }
    }
    ////////////////
    const {productState: {products,productsLoading,lengthPage}, getProducts} = useContext(ProductContext)
    
    useEffect(()=>getProducts(),[])

    const [page , setPage] = useState(1)
    const [sort,setSort] = useState(false)
    const [quantity,setQuantity] = useState(false)
    const soPage = Math.round(products.length/8)+1
    let body = null
    

    useEffect(()=>{},[sort,quantity])
    const handleSort = ()=>{
        setSort(!sort)
        if(sort=== false){
            products.sort(function(a, b){return a.price - b.price})
        }else{
            products.sort(function(a, b){return b.price - a.price})
        }
        
        
    }
    const handlePage=(i)=>{
        setPage(i)
    }




    let sttPage =[]
    for (let i = 1; i <= soPage; i++) {
        sttPage.push(<li key={i} onClick={()=>handlePage(i)} className={`${i === page ? 'active':''}`}>{i}</li>)
    }

    

    if(productsLoading ){
        body =(<div>loading...</div>)
    }
    else if(products.length === 0){
        body=(<div>xin cho 1 ty</div>)
    }
    else{
        body =(
            <div className="sanPham">
                {products.slice((page-1)*8,page*8).map(e =>(
                    <div key={e._id} className="sanPham__ct">
                        <img className="pro" src="https://fakeimg.pl/200x200/" alt="" />
                        <div className="price">
                            <div>{e.price}</div>
                            <div>{e.product}</div>
                        </div>
                        <img onClick={()=>handleCart(e)} className="cart" src={cart} alt="" />
                    </div>
                    
                ))}
                
             </div>
        )
                
    }

    return (
        <div>
            <div className="product">
                <div className="list">
                    <div className="danhMuc">
                            <div className="list_ds dm">Danh Mục</div>
                            <div className="list_ds active">Kính mát</div>
                            <div className="list_ds">Kính thời trang</div>
                            <div className="list_ds">Kính cận</div>
                            <div className="list_ds">Kính viễn</div>
                    </div>
                </div>
                <div className="listItem">
                    <div className="sort">
                        <div>Mới nhất</div>
                        <div>Phổ Biến</div>
                        <div>Bán chạy</div>
                        <div className="active" onClick={handleSort}>Giá tăng dần</div>
                    </div>
                    {body}
                </div>
            </div>
            
            <div className="pagination">
                {sttPage}
            </div>
        </div>
    )
}

export default Products
