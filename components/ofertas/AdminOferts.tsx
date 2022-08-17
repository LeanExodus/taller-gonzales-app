import Link from 'next/link';


import { Avatar, Box, Grid, Typography, IconButton, Button, Stack } from '@mui/material';

import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import CancelIcon from '@mui/icons-material/Cancel';

import { useAxiosOferts } from '../hooks/oferta/useAxiosOferts';

export const AdminOferts = () => {

    const { ofertas, isLoading } = useAxiosOferts()

    const rows = ofertas.map(oferta => ({
        id: oferta.id,
        title: oferta.title,
        image: oferta.img,
        show: oferta.show

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

        { field: 'title', headerName: 'Título', width: 340 },
        
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
                    <><Link href={`/administracion/editarOferta?id=${row.id}&ofertname=${row.title}&image=${row.image}&show=${row.show}`} as={'/administracion/editarOferta'}>
                        <IconButton>
                            <EditIcon />
                        </IconButton>
                    </Link>
                        <Link href={`/administracion/eliminarOferta?id=${row.id}&ofertname=${row.title}&image=${row.image}`} as={'/administracion/eliminarOferta'}>
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
                      Administración de Ofertas
                  </Typography>

                  <Link href={'/administracion/crearOferta'}>
                      <Button variant="contained" startIcon={<AddIcon />}>
                          Oferta
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
