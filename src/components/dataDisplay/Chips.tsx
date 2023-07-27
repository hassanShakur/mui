import { Face } from '@mui/icons-material';
import { Avatar, Chip, Stack } from '@mui/material';

const Chips = () => {
  const chipDelHandler = (deletedChip: string) => {
    // filter out this chip from array of chips
  };

  return (
    <Stack spacing={3}>
      <Stack direction={'row'} spacing={1}>
        <Chip label='Chip' />
        <Chip label='Color' color='info' />
      </Stack>

      <Stack direction={'row'} spacing={1}>
        <Chip label='Small' size='small' />
        <Chip
          label='Outlined'
          variant='outlined'
          size='small'
          color='secondary'
        />
      </Stack>

      <Stack direction={'row'} spacing={1}>
        <Chip
          label='Avatar'
          variant='outlined'
          color='info'
          avatar={<Avatar>H</Avatar>}
        />
        <Chip label='Icon' color='warning' icon={<Face />} />
      </Stack>

      <Stack direction={'row'} spacing={1}>
        <Chip
          label='Clickable'
          color='primary'
          onClick={() => console.log('Clicked')}
        />
        <Chip
          label='Deletable'
          color='error'
          onClick={() => console.log('Clicked')}
          onDelete={chipDelHandler}
        />
      </Stack>
    </Stack>
  );
};

export default Chips;
