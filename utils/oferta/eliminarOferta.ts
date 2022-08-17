import axios from "axios"
import Cookies from "js-cookie"

import { TallerApi } from "../../api"

export const eliminarOferta = async (id:any):Promise<{hasError:boolean, message?:string}> => {
  try {
      const { data } = await TallerApi.delete(`/ofertas/${id}`,
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
        message: 'No se logro eliminar la oferta'
      }
  }
}
