import PropTypes from 'prop-types'
import { Navigate, useLocation } from 'react-router-dom'
import useAuth from '../hook/useAuth'
import LoadingSpinner from '../components/Share/LoadingSpinner'



const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth()
  const location = useLocation()

  if (loading) return <LoadingSpinner />
  if (user) return children
  return <Navigate to='/login' state={location.pathname} replace='true' />
}

PrivateRoute.propTypes = {
  children: PropTypes.node,
}

export default PrivateRoute
