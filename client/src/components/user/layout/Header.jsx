import React, {useContext, useEffect, useState} from 'react'
import logo from '../../../acsset/logo.png'
import avatar from '../../../acsset/husky.jpg'
import './header.scss'
import {Link} from 'react-router-dom'
import { AuthContext } from '../contexts/AuthContext'
import Login from '../Login'
import cartt from '../../../acsset/cart.png'
import { CartContext } from '../contexts/AddToCart'
import Register from '../Register'
const Header = () => {
    const {cartState:{cart},addTocart} = useContext(CartContext)
    const [log, setLog] = useState('hide')
    const [show, setShow] = useState(false)
    const [hideCart,setHideCart] = useState('showCart')
    // console.log(Object.values(cart))
    const f = Object.values(cart)
    var newArr = []
    for (var i = 0; i < f.length; i++) {
        
        if (newArr.indexOf(f[i]) === -1) {
            f[i].quantity = f.filter(x => x===f[i]).length
            newArr.push(f[i])
        }

    }
    
    let gg = null
    let sum =0
    gg = (
        <div className={hideCart}>
           {newArr.map((e,i)=>(
               <div className="navCart">
                    <img  src="https://fakeimg.pl/30x30/" alt="" />
                    <div key={i}>{e.product} x{e.quantity}</div>
               </div>
           ))}
    
        </div>
    )
    const {
		authState: {
			user,
            isAuthenticated,
		},
        logoutUser
	} = useContext(AuthContext)

    const logout = () => logoutUser()
    const handleLog =()=>{
        setLog('show')
        setShow(!show)
    }
    const handleCart =()=>{
        hideCart === 'showCart' ? setHideCart('hideCart') :  setHideCart('showCart')

    }
    return (
        <div  className="container">
            <div className="header">
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
                <div className="context">
                    <ul>
                        <li>Thương Hiệu</li>
                        <li>Tròng Kính</li>
                        <li>Gọng Kính</li>
                        {!user && <li onClick={()=>handleLog()}>Đăng Nhập</li>}
                        
                        {user && <li className="hh" onClick={()=>setLog('hide')}>
                            <img className="avatar" src={avatar} alt="" />
                            <p>{user.username}</p>
                        </li>}
                            {user && <li onClick={()=>handleCart()}><img className="addCart" src={cartt} alt="" />
                        </li>}
                        
                            {/* <Link className="loginn" onClick={logout} to={`${user ? '/':'/register'}`}>
                                {`${user ? 'Đăng Xuất' : 'Đăng ký'}`}
                                
                            </Link> */}
                            {user && <li onClick={logout}>Đăng Xuất</li>}
                            {!user && <li onClick={()=>handleLog()}>Đăng Ký</li>}
                        
                    </ul>
                    
                </div>
                <div className="ttUser">
                    <div>Thông tin cơ bản</div>
                    <div>Đơn Hàng</div>
                    <div>Lịch Sử mua Hàng</div>
                    <div>Đăng xuất</div>
                </div>
                {gg}
            </div>
            
           <Login listen={log} listenShow={show}/>
           <Register/>
        </div>
        
    )
}

export default Header
