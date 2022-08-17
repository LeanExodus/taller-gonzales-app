export interface Oferta {
    id: number,
    title: string,
    img: string,
    show: boolean
}

export interface DataOfertas {
    data: DatumOferta[];
    meta: MetaOferta;
}

export interface DatumOferta {
    id:         number;
    attributes: OfertaInfo;
}

export interface OfertaInfo {
    Titulo:      string;
    Imagen:      string;
    Mostrar:     boolean;
    createdAt:   Date;
    updatedAt:   Date;
    publishedAt: Date;
}

export interface MetaOferta {
    pagination: PaginationOferta;
}

export interface PaginationOferta {
    page:      number;
    pageSize:  number;
    pageCount: number;
    total:     number;
}
