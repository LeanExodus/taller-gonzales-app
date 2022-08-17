import Link from 'next/link';


import { Avatar, Box, Grid, Typography, IconButton, Button, Stack } from '@mui/material';

import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import CancelIcon from '@mui/icons-material/Cancel';

import { useAxiosServices } from '../hooks/servicio/useAxiosServices';

export const AdminServices = () => {

    const { servicios, isLoading } = useAxiosServices()

    const rows = servicios.map(servicio => ({
        id: servicio.id,
        name: servicio.name,
        image: servicio.img,
        show: servicio.show

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

        { field: 'name', headerName: 'Nombre', width: 340 },

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
                    <><Link href={`/administracion/editarServicio?id=${row.id}&servicename=${row.name}&image=${row.image}&show=${row.show}`} as={'/administracion/editarServicio'}>
                        <IconButton>
                            <EditIcon />
                        </IconButton>
                    </Link>
                        <Link href={`/administracion/eliminarServicio?id=${row.id}&servicename=${row.name}&image=${row.image}`} as={'/administracion/eliminarServicio'}>
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
              minWidth: '720px',
              padding: '0px 30px'
          }}>



              <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5} mt={5}>

                  <Typography variant='h4'>
                      Administración de Servicios
                  </Typography>

                  <Link href={'/administracion/crearServicio'}>
                      <Button variant="contained" startIcon={<AddIcon />}>
                          Servicio
                      </Button>
                  </Link>
              </Stack>




              <Box className='fadeIn'>

                  <Grid container className='fadeIn'>
                      <Grid item xs={12} sx={{ width: '100%' }}>
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
