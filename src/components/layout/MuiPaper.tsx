import { Box, Grid, Paper } from '@mui/material';
// Change body background as paper back is white

const MuiPaper = () => {
  return (
    // Elevation is size of shadow, default 1
    <Paper sx={{ padding: '32px' }} elevation={5}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Box bgcolor={'primary.light'} p={2}>
            Item 1
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box bgcolor={'primary.light'} p={2}>
            Item 2
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box bgcolor={'primary.light'} p={2}>
            Item 3
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box bgcolor={'primary.light'} p={2}>
            Item 4
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default MuiPaper;
