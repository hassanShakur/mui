import { Box, Grid } from '@mui/material';

const MuiGrid = () => {
  return (
    <Grid container my={2} rowSpacing={2} columnSpacing={1}>
      <Grid item xs={6}>
        <Box bgcolor={'primary.light'} p={2}>Item 1</Box>
      </Grid>
      <Grid item xs={6}>
        <Box bgcolor={'primary.light'} p={2}>Item 2</Box>
      </Grid>
      <Grid item xs={6}>
        <Box bgcolor={'primary.light'} p={2}>Item 3</Box>
      </Grid>
      <Grid item xs={6}>
        <Box bgcolor={'primary.light'} p={2}>Item 4</Box>
      </Grid>
    </Grid>
  );
};

export default MuiGrid;

// Grid has 12 cols with 5 breakpoints for different device width
// xs, sm, md, lg, xl
// xs=12 sm=6 => Occupy full width on mobile but half from tablet and above
// xs => it alone on all items divides the space available equally. If one has a value specified eg xs=3, it will take 3 and the rest divided. If 1 has xs=auto, it will have a fit content width
