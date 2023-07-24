import { Button, ButtonGroup, Stack } from '@mui/material';

const BtnGrp = () => {
  return (
    <Stack spacing={3}>
      <Stack direction={'row'}>
        <ButtonGroup variant='outlined'>
          <Button>left</Button>
          <Button>center</Button>
          <Button>right</Button>
        </ButtonGroup>
      </Stack>

      <hr />

      <Stack direction={'row'}>
        <ButtonGroup
          variant='contained'
          orientation='vertical'
          size='small'
          color='secondary'
          aria-label='name of button group'
        >
          <Button>left</Button>
          <Button>center</Button>
          <Button>right</Button>
        </ButtonGroup>
      </Stack>
    </Stack>
  );
};

export default BtnGrp;
