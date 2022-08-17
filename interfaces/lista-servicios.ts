export interface Servicio{
    id: number,
    name: string,
    description: string,
    img: string,
    show: boolean
}

export interface DataServicios {
    data: DatumServicio[];
    meta: MetaServicio;
}

export interface DatumServicio {
    id:         number;
    attributes: ServicioInfo;
}

export interface ServicioInfo {
    Titulo:      string;
    Descripcion: string;
    Imagen:      string;
    Mostrar:     boolean;
    createdAt:   Date;
    updatedAt:   Date;
    publishedAt: Date;
}

export interface MetaServicio {
    pagination: PaginationServicio;
}

export interface PaginationServicio {
    page:      number;
    pageSize:  number;
    pageCount: number;
    total:     number;
}