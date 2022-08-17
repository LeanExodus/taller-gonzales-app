import { createContext } from 'react';
import { User } from '../../interfaces';


interface ContextProps {
   isLoggedIn: boolean
   user?: User

   loginUser: (identifier: string, password: string) => Promise<boolean>
   registerUser: (username: string, email: string, password: string) => Promise<{hasError: boolean;message?: string;}>
   logout: () => void
   editUser: (id: any, username: string, email: string) => Promise<{hasError: boolean, message?: string }>
   deleteUser: (id: any) => Promise<{ hasError: boolean, message ?: string }>
}

export const AuthContext = createContext({} as ContextProps)