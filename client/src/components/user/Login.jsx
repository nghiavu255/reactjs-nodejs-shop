import React,{ useState, useContext,useRef,useEffect } from 'react'
import { AuthContext } from '../../components/user/contexts/AuthContext'
import './login.scss'
import {useHistory} from 'react-router-dom'
import logo from '../../../src/acsset/logo.png'
const Login = (props) => {
    // Context
    const {loginUser,authState: {isAuthenticated }} = useContext(AuthContext)
    const tar = useRef()
    const text = useRef()
    //Router
    const history = useHistory()

    // console.log("prop::"+props.listen)
    // console.log("isAuthenticated::"+isAuthenticated)

    const [loginForm, setLoginForm] = useState({
        username:'',
        password:''
    })
    const [alert,setAlert] = useState(null)
    const {username,password} = loginForm
    
    const onChangeLoginForm = event =>setLoginForm({...loginForm,[event.target.name]: event.target.value})
    
    const login = async event =>{
        event.preventDefault()

        try {
            const loginData = await loginUser(loginForm)
            console.log(loginData)
            if (loginData.success) {
                history.push('/')
			}
            else{
                setAlert({ type: 'danger', message: loginData.message })
                console.log(alert)
				setTimeout(() => setAlert(null), 5000)
            }
        } catch (error) {
            console.log(error)
            
        }
    }
        // console.log("show::" + props.listenShow)
    //    tar.current.classList.add('remove')
    //    tar.current.classList.remove('login')

        useEffect(()=>{
            const handleListen =(e)=>{ 
                    if (tar.current.contains(e.target)){
                        // Clicked in box
                        
                    } else{
                        // Clicked outside the box
                        tar.current.classList.add('remove')
                        
                    }
                
            }
                window.addEventListener('click', handleListen);
                return ()=>{
                    window.removeEventListener('click', handleListen);
                }          
        })


        useEffect(()=>{
            if(props.listen==='hide' || isAuthenticated === true){
                tar.current.classList.add('remove')
            }else{
                tar.current.classList.remove('remove')
            }
        },[props.listen,isAuthenticated,props.listenShow])

    return (
        <div ref={tar} className="login loginForm" id="clickbox">
            <img src={logo} alt="" />
            <form onSubmit={login}>
                {alert && <div className="eror">ERROR: {alert.message}</div>}
                <label htmlFor="username">Tài Khoản
                    <input ref={text} type="text" name="username" id="username" onChange={onChangeLoginForm}/>
                </label>
                <label htmlFor="password">Mật Khẩu
                    <input type="password" name="password" id="password" onChange={onChangeLoginForm} />
                </label>
                <button>Đăng Nhập</button>
                <p>Bạn chưa có tài khoản? Đăng ký</p>
                
            </form>
        </div>
    )
}

export default Login
