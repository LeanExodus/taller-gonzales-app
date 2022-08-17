export interface Producto {
    id: number,
    name: string,
    img: string,
    price: number,
    show: boolean
    
}

export interface DataProductos {
    data: DatumProducto[];
    meta: MetaProducto;
}

export interface DatumProducto {
    id:         number;
    attributes: ProductoInfo;
}

export interface ProductoInfo {
    Titulo:      string;
    Imagen:      string;
    Mostrar:     boolean;
    createdAt:   Date;
    updatedAt:   Date;
    publishedAt: Date;
    Precio:      number;
}

export interface MetaProducto {
    pagination: PaginationProducto;
}

export interface PaginationProducto {
    page:      number;
    pageSize:  number;
    pageCount: number;
    total:     number;
}
