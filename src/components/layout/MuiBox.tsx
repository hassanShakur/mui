import { Box } from '@mui/material';

const MuiBox = () => {
  // Checkout system stylings
  return (
    <>
      <Box
        component={'section'}
        height={'100px'}
        width={'100px'}
        // padding={'16px'} 1p === 8px
        p={2}
        bgcolor={'success.light'}
      ></Box>

      <Box
        sx={{
          backgroundColor: 'primary.main',
          color: 'white',
          height: '100px',
          width: '100px',
          padding: '16px',
          '&:hover': {
            backgroundColor: 'primary.light',
          },
        }}
      ></Box>
    </>
  );
};

export default MuiBox;
