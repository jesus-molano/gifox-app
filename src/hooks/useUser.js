import Context from 'context/UserContext'
import  { useContext, useCallback } from 'react'

const useUser = () => {

  const {jwt, setJWT} = useContext(Context)
  
  const login = useCallback(({username, password}) => {
    setJWT('test')
  }, [setJWT])
  
  const logout = useCallback(() => {
    setJWT(null)
  }, [setJWT])

  return {
    isLogged: Boolean(jwt),
    login,
    logout
  }
}

export default useUser
