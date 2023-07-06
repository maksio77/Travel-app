import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import MediaCard from './Card';

export default function CardList() {
  return (
    <Box sx={{ flexGrow: 1, width: '100%', margin: '2rem', paddingBottom: 10 }}>
      <Grid container rowSpacing={0} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item >
          <MediaCard/>
        </Grid>
        <Grid item >
          <MediaCard/>
        </Grid>
        <Grid item >
          <MediaCard/>
        </Grid>
      </Grid>
    </Box>
  );
}