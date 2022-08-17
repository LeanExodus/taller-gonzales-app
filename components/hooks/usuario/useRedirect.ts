import { useContext, useEffect } from 'react';
import { useRouter } from 'next/router';

import { AuthContext } from '../../../context/auth';


function useRedirect () {
  const {isLoggedIn} = useContext(AuthContext)
  const router = useRouter()

  useEffect(() => {
    if (!isLoggedIn) {
        router.push('/login')
    }
  
   
  }, [isLoggedIn,router])
  
}

export default useRedirect