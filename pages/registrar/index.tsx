import type { NextPage } from 'next'

import { Register } from '../../components/authUI'
import { Layout } from '../../components/layouts'
import useRedirect from '../../components/hooks/usuario/useRedirect';

const Registar:NextPage = () => {
  useRedirect()
  return (
    <>
      <Layout title='Registrar - Taller Gonzales'>
        <Register/>
      </Layout>
    </>
  )
}

export default Registar