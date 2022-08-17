import { TallerApi } from "../../api"
import { DataOfertas, Oferta } from "../../interfaces"


export const getOfertas = async () => {
    const { data } = await TallerApi.get<DataOfertas>("/ofertas")

    const ofertas: Oferta[] = data.data.map(({ id, attributes }) => ({

        id: id,
        title: attributes.Titulo,
        img: attributes.Imagen,
        show: attributes.Mostrar

    }))

    return ofertas
}
