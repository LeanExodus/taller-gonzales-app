import { FC, useEffect, useReducer } from 'react'
import { useRouter } from 'next/router';

import Cookies from 'js-cookie';
import axios from 'axios';

import { DataUsuarioAuth, User } from '../../interfaces'
import { AuthContext, authReducer } from './'
import { TallerApi } from '../../api'

interface Props {
  children?: React.ReactNode
}

export interface AuthState {
    isLoggedIn: boolean
    user?: User
}

const AUTH_INITIAL_STATE: AuthState = {
    isLoggedIn: false,
    user: undefined,
}

interface Props{
    children?: React.ReactNode
}

export const AuthProvider:FC<Props> = ({children}) => {

  const [state, dispatch] = useReducer(authReducer, AUTH_INITIAL_STATE)
  const router = useRouter()

  useEffect(() => {
    
    checkToken()
   
  }, [])
  
  const checkToken = async () => {
    
    if (!Cookies.get('jwt')) {
      
      return
    }
    
      try {
        const { data } = await TallerApi.get('/users/me',
          {
            headers: {
              Authorization: 'Bearer ' + Cookies.get('jwt')
            }
          })

        dispatch({ type: '[Auth] - Login', payload: data })

      } catch (error) {
        Cookies.remove('jwt')
      }

    
  }


  const loginUser = async ( identifier:string, password: string):Promise<boolean> => {
      try {
        const { data } = await TallerApi.post<DataUsuarioAuth>("/auth/local", { identifier, password })
        const { jwt } = data
        Cookies.set('jwt', jwt)

        checkToken()

        return true
        
      } catch (error) {
        return false
      }
  }

  const registerUser = async (username:string, email:string, password: string):Promise<{hasError:boolean, message?:string}> =>{
    try {
      const { data } = await TallerApi.post("/auth/local/register", { username, email, password },
        {
          headers: {
            Authorization: 'Bearer ' + Cookies.get('jwt')
          }
        })
      

      return{
        hasError:false
        
      }
    } catch (err) {
      
      if(axios.isAxiosError(err)){
        console.log(err)
        const { message } = err.response?.data as { message: string }
        return {
          hasError: true,
          message: message
        }
      }
      return{
        hasError:true,
        message: 'No se pudo crear el usuario'
      }
    }
  }

  const editUser = async (id: any, username: string, email: string): Promise<{ hasError: boolean, message?: string }> => {
    try {
      const { data } = await TallerApi.put(`/users/${id}`, { username, email },
        {
          headers: {
            Authorization: 'Bearer ' + Cookies.get('jwt')
          }
        })


      return {
        hasError: false

      }
    } catch (err) {

      if (axios.isAxiosError(err)) {
        console.log(err)
        const { message } = err.response?.data as { message: string }
        return {
          hasError: true,
          message: message
        }
      }
      return {
        hasError: true,
        message: 'No se pudo editar el usuario'
      }
    }
  }

  const deleteUser = async (id: any): Promise<{ hasError: boolean, message?: string }> => {
    try {
      const { data } = await TallerApi.delete(`/users/${id}`,
        {
          headers: {
            Authorization: 'Bearer ' + Cookies.get('jwt')
          }
        })


      return {
        hasError: false

      }
    } catch (err) {

      if (axios.isAxiosError(err)) {
        console.log(err)
        const { message } = err.response?.data as { message: string }
        return {
          hasError: true,
          message: message
        }
      }
      return {
        hasError: true,
        message: 'No se pudo eliminar el usuario'
      }
    }
  }

  const logout = () => {
      Cookies.remove('jwt')
      dispatch({ type: '[Auth] - Logout'})
      router.replace('/')
     
  }

  return (
    <AuthContext.Provider value={{
        ...state,

        loginUser,
        registerUser,
        logout,
        editUser,
        deleteUser
    }}>
        {children}
    </AuthContext.Provider>
  )
}