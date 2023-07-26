import { Box, Breadcrumbs, Link, Typography } from '@mui/material';
import React from 'react';

const BreadCrumbs = () => {
  return (
    <Box m={2}>
      {/* Use Link for all routes except the active one */}
      {/* Default separator is / */}
      {/* Default items to show is 8. Before & after is 1 */}
      <Breadcrumbs
        separator={'>'}
        maxItems={2}
        itemsAfterCollapse={2}
        itemsBeforeCollapse={1}
      >
        <Link underline='hover' href='#'>
          Home
        </Link>
        <Link underline='hover' href='#'>
          Catalog
        </Link>
        <Link underline='hover' href='#'>
          Accessories
        </Link>
        <Typography color={'text.primary'}>Phones</Typography>
      </Breadcrumbs>
    </Box>
  );
};

export default BreadCrumbs;
