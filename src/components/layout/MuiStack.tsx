import { Box, Divider, Stack } from '@mui/material';

const MuiStack = () => {
  return (
    // Stack is best for 1d layout
    <Stack
      sx={{ border: '1px solid' }}
      direction={'row'}
      spacing={2}
      divider={<Divider orientation='vertical' flexItem />}
    >
      <Box
        component={'section'}
        height={'100px'}
        width={'100px'}
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
        }}
      ></Box>
    </Stack>
  );
};

export default MuiStack;
