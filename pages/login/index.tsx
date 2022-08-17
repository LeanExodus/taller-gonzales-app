import { useContext, useEffect } from 'react';
import type { NextPage } from 'next'
import { useRouter } from 'next/router';

import { Layout } from '../../components/layouts'
import { SignIn } from '../../components/authUI'
import { AuthContext } from '../../context/auth/AuthContext';


const Login: NextPage = () => {

    const router = useRouter()
    const {isLoggedIn} = useContext(AuthContext)

    useEffect(() => {
      
    if (isLoggedIn) {
        router.push('/administracion')
    }
      
    }, [isLoggedIn, router])
    

    return (
        <>
        
            <Layout title='Login - Taller Gonzales'>
                <SignIn/>
            </Layout>
        </>
    )
}

export default Login