import React from 'react'
import './footer.scss'
import logo from '../../../acsset/logo.png'
const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__nav">
                <img src={logo} alt="" />
                <div> Hotline : 19006081</div>
                <div>Email : info@shadow.com.vn</div>
                <div>Thời gian làm việc : 8h – 21h hằng ngày.</div>
            </div>
            <div className="footer__nav">
                <div>Giới thiệu  Mắt Việt</div>
                <div>Tuyển dụng</div>
                <div>Hệ thống cửa hàng</div>
                <div>Chương trình ưu đãi</div>
                <div>Tin Tức</div>
                
            </div>
            <div className="footer__nav">
                <div>CHÍNH SÁCH VÀ DỊCH VỤ</div>
                <div>Chính sách và Quy định chung</div>
                <div>Quy định và Hình thức thanh toán</div>
                <div>Chính sách Vận Chuyển và Giao Nhận</div>
                <div>Chính sách Bảo hành</div>
            </div>
        </div>
    )
}

export default Footer
