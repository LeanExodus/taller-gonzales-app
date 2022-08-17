import Link from 'next/link';


import { Box, Grid, Typography, IconButton, Button, Stack } from '@mui/material';

import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';


import { useAxiosUsers } from '../hooks/usuario/useAxiosUsers';


export const AdminUsers = () => {
    const { usuarios, isLoading } = useAxiosUsers()

    const rows = usuarios.filter(usuario => usuario.email !== 'leandro@gmail.com' && usuario.email !== 'donald-0432@gmail.com').map(usuario => ({
 
        id: usuario.id,
        userName: usuario.username,
        email: usuario.email

    }));

    const columns: GridColDef[] = [
       

        { field: 'userName', headerName: 'Nombre de Usuario', width: 250 },
        { field: 'email', headerName: 'Correo', width: 250, align: 'center', headerAlign: 'center' },
        
        
        {
            field: 'actions', headerName: 'Acciones', width: 90, disableColumnMenu: true, sortable: false, align: 'center', headerAlign: 'center',
            renderCell: ({row}:GridValueGetterParams) => {
                
                return (
                    <><Link href={`/administracion/editarUsuario?id=${row.id}&username=${row.userName}&email=${row.email}`} as={'/administracion/editarUsuario'}>
                        <IconButton>
                            <EditIcon />
                        </IconButton>
                    </Link>
                        <Link href={`/administracion/eliminarUsuario?id=${row.id}&username=${row.userName}&email=${row.email}`} as={'/administracion/eliminarUsuario'}>
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
              minWidth: '670px',
              padding: '0px 30px'
          }}>



              <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5} mt={5}>

                  <Typography variant='h4'>
                      Administración de Usuarios
                  </Typography>

                  <Link href={'/registrar'}>
                      <Button variant="contained" startIcon={<AddIcon />}>
                          Usuario
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
