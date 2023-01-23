import { Container, Grid, Typography } from '@mui/material';
import Formulario from './components/Formulario';
import ListadoNoticias from "./components/ListadoNoticias"
import { NoticiasProvider } from './context/NoticiasProvider';
function App() {


  return (
    <NoticiasProvider>
    <Container>
      <header>
      <Typography color={"secondary"} align='center' marginY={5} component="h1" variant='h5'>Para visualizar este proyecto debes clonarlo e instalar sus dependencias,
        debido a que se utilizo una API gratuita que no permite
        realizar consultas en producción, solo de forma local.
      </Typography>
        <Typography align='center' marginY={5} component="h1" variant='h3'>
          Buscador de Noticias
        </Typography>
      </header>
      
      <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      >
        <Grid item xs={12} lg={4}>
        <Formulario/> 
        </Grid>
      </Grid>

      <ListadoNoticias/>
    </Container>
    </NoticiasProvider>
  )
}

export default App
