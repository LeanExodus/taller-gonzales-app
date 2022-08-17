import axios from "axios"
import Cookies from "js-cookie"

import { TallerApi } from "../../api"

export const editarServicio = async (id:any,Titulo:string, Imagen:string, Mostrar:boolean):Promise<{hasError:boolean, message?:string}> => {
  try {
      const { data } = await TallerApi.put(`/servicios/${id}`, { data: {Titulo, Imagen, Mostrar} },
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
        message: 'No se logro editar el servicio'
      }
  }
}
