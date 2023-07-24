import { Button, Stack } from '@mui/material';

const Btn = () => {
  return (
    // Default stack display is flex
    <Stack spacing={5}>
      <Stack spacing={2} direction={'row'}>
        {/* href can be added to text variant to make it an a tag */}
        <Button variant='text' href='https://www.google.com'>
          text
        </Button>
        <Button variant='contained'>contained</Button>
        <Button variant='outlined'>outlined</Button>
      </Stack>

      <hr />

      {/* Sizes */}
      <Stack display={'block'} spacing={2} direction={'row'}>
        <Button variant='contained' size='small'>
          small
        </Button>
        <Button variant='contained' size='medium'>
          medium
        </Button>
        <Button variant='contained' size='large'>
          large
        </Button>
      </Stack>

      <hr />

      {/* Colors */}
      <Stack spacing={2} direction={'row'}>
        <Button variant='contained' color='primary'>
          primary
        </Button>
        <Button variant='contained' color='secondary'>
          secondary
        </Button>
        <Button variant='contained' color='success'>
          success
        </Button>
        <Button variant='contained' color='info'>
          info
        </Button>
        <Button variant='contained' color='warning'>
          warning
        </Button>
        <Button variant='contained' color='error'>
          error
        </Button>
      </Stack>
    </Stack>
  );
};

export default Btn;
