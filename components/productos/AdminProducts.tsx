import Link from 'next/link';


import { Avatar, Box, Grid, Typography, IconButton, Button, Stack } from '@mui/material';

import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import CancelIcon from '@mui/icons-material/Cancel';

import { useAxiosProducts } from '../../components/hooks/producto';




export const AdminProducts = () => {

    const { productos, isLoading } = useAxiosProducts()


    const rows = productos.map(producto => ({
        id: producto.id,
        name: producto.name,
        image: producto.img,
        price: producto.price,
        show: producto.show

    }));

    const columns: GridColDef[] = [
        {
            field: 'image', align: 'center', headerAlign: 'center', disableColumnMenu: true, sortable: false, headerName: 'Imagen',
            renderCell: (params) => {
                return (
                    <><Avatar src={params.row.image} /></>
                )
            }
        },

        { field: 'name', headerName: 'Nombre',  width: 340 },
        {
            field: 'price', headerName: 'Precio', width: 120, align: 'center', headerAlign: 'center', renderCell: (params) => {
                return (
                    params.row.price.toLocaleString('es-CR', { style: 'currency', currency: 'CRC', minimumFractionDigits: 0 })
                        
                )
            }
},
        {
            field: 'show', headerName: 'Mostrar', width: 120, align: 'center', headerAlign: 'center', renderCell: (params) => {
                return (
                    params.row.show ?
                        <CheckCircleIcon color='success' /> :
                        <CancelIcon color='warning' />
                )
            }
        },

        {
            field: 'actions', headerName: 'Acciones', width: 90, disableColumnMenu: true, sortable: false, align: 'center', headerAlign: 'center',
            renderCell: ({ row }: GridValueGetterParams) => {
                return (
                    <><Link href={`/administracion/editarProducto?id=${row.id}&productname=${row.name}&image=${row.image}&price=${row.price}&show=${row.show}`} as={'/administracion/editarProducto'}>
                        <IconButton>
                            <EditIcon />
                        </IconButton>
                    </Link>
                        <Link href={`/administracion/eliminarProducto?id=${row.id}&productname=${row.name}&image=${row.image}&price=${row.price}`} as={'/administracion/editarProducto'}>
                            <IconButton color='error'>
                                <DeleteIcon />
                            </IconButton>
                        </Link></>
                )
            }
        }

    ];

  return (
    <>
          <main style={{
              margin: '100px auto',
              maxWidth: '1440px',
              minWidth: '840px',
              padding: '0px 30px'
          }}>



              <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5} mt={5}>

                  <Typography variant='h4'>
                      Administración de Productos
                  </Typography>

                  <Link href={'/administracion/crearProducto'}>
                      <Button variant="contained" startIcon={<AddIcon />}>
                          Producto
                      </Button>
                  </Link>
              </Stack>




              <Box className='fadeIn'>

                  <Grid container className='fadeIn'>
                      <Grid item xs={12} sx={{  width: '100%' }}>
                          <DataGrid
                              rows={rows}
                              columns={columns}
                              pageSize={10}
                              rowsPerPageOptions={[10]}
                              disableSelectionOnClick={true}
                              autoHeight={true}
                          />

                      </Grid>
                  </Grid>

              </Box>

          </main>
    </>
  )
}
