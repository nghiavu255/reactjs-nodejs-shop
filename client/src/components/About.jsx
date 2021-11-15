import React, { useState } from 'react'
import { useParams } from 'react-router'

const About = () => {
    const {count , setCount} = useState(1)
    const handlepage = ()=>{
        setCount(3)
    }
    return (
        <div className="header">
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
                <div className="context">
                    <ul>
                        <li>Thương Hiệu</li>
                        <li>Tròng Kính</li>
                        <li>Gọng Kính</li>
                        <li>Tin Tức</li>
                        <li>Giới Thiệu</li>
                        {`${user.username ? '':''}`}
                        <li><Link className="login" to={`${user.username ? '/user':'/login'}`}>{`${user.username ? ` ${user.username}` : 'Đăng Nhập'}`}</Link></li>
                        <li><Link className="login" onClick={logout} to={`${user.username ? '/':'/register'}`}>{`${user.username ? 'Đăng Xuất' : 'Đăng ký'}`}</Link></li>
                        <li className="hide">Đăng xuất</li>
                    </ul>
                </div>
            </div>
    )
}

export default About
