import { useContext, useEffect } from 'react';
import { useRouter } from 'next/router';

import { AuthContext } from '../../../context/auth';


function useRedirectAuthenticated () {
  const {user} = useContext(AuthContext)
  const router = useRouter()

  useEffect(() => {
    if (user?.role.name == 'Authenticated') {
        router.push('/administracion')
    }
  
   
  }, [user,router])
  
}

export default useRedirectAuthenticated