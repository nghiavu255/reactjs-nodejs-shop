import React,{ useState, useContext,useRef,useEffect } from 'react'
import { AuthContext } from '../../components/user/contexts/AuthContext'
import './login.scss'
import {useHistory} from 'react-router-dom'
import logo from '../../../src/acsset/logo.png'
const Register = (props) => {
    // Context
	const { registerUser } = useContext(AuthContext)

	// Local state
	const [registerForm, setRegisterForm] = useState({
		username: '',
		password: '',
		confirmPassword: ''
	})

	const [alert, setAlert] = useState(null)

	const { username, password, confirmPassword } = registerForm

	const onChangeRegisterForm = event =>
		setRegisterForm({
			...registerForm,
			[event.target.name]: event.target.value
		})

	const register = async event => {
		event.preventDefault()

		if (password !== confirmPassword) {
			setAlert({ type: 'danger', message: 'Passwords do not match' })
			setTimeout(() => setAlert(null), 5000)
			return
		}

		try {
			const registerData = await registerUser(registerForm)
			if (!registerData.success) {
				setAlert({ type: 'danger', message: registerData.message })
				setTimeout(() => setAlert(null), 5000)
			}
		} catch (error) {
			console.log(error)
		}
	}

    return (
        <div className="login loginForm remove" id="clickbox">
            <img src={logo} alt="" />
            <form onSubmit={register}>
                <label htmlFor="username">Tài Khoản
                    <input type="text" name="username" id="username" onChange={onChangeRegisterForm}/>
                </label>
                <label htmlFor="password">Mật Khẩu
                    <input type="password" name="password" id="password" onChange={onChangeRegisterForm} />
                </label>
                <label htmlFor="confirmPassword">Mật Khẩu
                    <input type="password" name="confirmPassword" id="confirmPassword" onChange={onChangeRegisterForm} />
                </label>
                <button>Đăng Ký</button>
            </form>
        </div>
    )
}

export default Register
