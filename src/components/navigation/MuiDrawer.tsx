import { Box, Drawer, IconButton, Typography } from '@mui/material';
import { useState } from 'react';

// Explore parmanent drawers

const MuiDrawer = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  return (
    <>
      <IconButton onClick={() => setDrawerOpen(true)}>
        SideBar
      </IconButton>
      <Drawer
        anchor='left'
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <Box
          p={2}
          width={'250px'}
          textAlign={'center'}
          role='presentation'
        >
          <Typography variant='h6'>Side Panel</Typography>
        </Box>
      </Drawer>
    </>
  );
};

export default MuiDrawer;
