import { TallerApi } from "../../api"
import { DataServicios, Servicio } from "../../interfaces"


    
export const getServicios = async () => {

  const { data } = await TallerApi.get<DataServicios>("/servicios")
 
    const servicios: Servicio[] = data.data.map(({ id, attributes }) => ({

        id: id,
        name: attributes.Titulo,
        description: attributes.Descripcion,
        img: attributes.Imagen,
        show: attributes.Mostrar

    }))

    return servicios

}
