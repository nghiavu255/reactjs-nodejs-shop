import { Route, Redirect } from 'react-router-dom'
import { useContext } from 'react'
import Header from '../user/layout/Header'
import { AuthContext } from '../user/contexts/AuthContext'

const ProtectedRoute = ({ component: Component, ...rest }) => {
	const {
		authState: { authLoading, isAuthenticated }
	} = useContext(AuthContext)

	if (authLoading)
		return (
			<div>
				loading
			</div>
		)
			
	return (
		<Route
			{...rest}
			render={props =>
				isAuthenticated ? (
					<>
						<Header />
						<Component {...rest} {...props} />
					</>
				) : (
					<Redirect to='/login' />
				)
			}
		/>
	)
}

export default ProtectedRoute