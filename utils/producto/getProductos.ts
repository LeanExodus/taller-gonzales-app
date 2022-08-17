import { TallerApi } from "../../api"
import { DataProductos, Producto } from "../../interfaces"


    
export const getProductos = async () => {

  const { data } = await TallerApi.get<DataProductos>("/productos")

    const productos: Producto[] = data.data.map(({ id, attributes }) => ({

        id: id,
        name: attributes.Titulo,
        img: attributes.Imagen,
        price: attributes.Precio,
        show: attributes.Mostrar

    }))

    return productos

}

