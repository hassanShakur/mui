import { Avatar, AvatarGroup, Stack } from '@mui/material';
import myImg from '../../images/hack-1.jpg';

const MuiAvatar = () => {
  return (
    <Stack spacing={4}>
      <Stack direction={'row'} spacing={2}>
        <Avatar></Avatar>
        <Avatar>HS</Avatar>
        <Avatar sx={{ bgcolor: 'warning.light' }}>HH</Avatar>
      </Stack>

      <Stack direction={'row'} spacing={2}>
        <Avatar sx={{ bgcolor: 'success.light' }}></Avatar>
        <Avatar src={myImg} alt='Jane Doe' />
      </Stack>

      <Stack direction={'row'}>
        <AvatarGroup max={4}>
          <Avatar sx={{ bgcolor: 'secondary.light' }}></Avatar>
          <Avatar src={myImg} alt='Jane Doe' />
          <Avatar sx={{ bgcolor: 'info.light' }}></Avatar>
          <Avatar sx={{ bgcolor: 'secondary.light' }}></Avatar>
          <Avatar src={myImg} alt='Jane Doe' />
          <Avatar sx={{ bgcolor: 'success.light' }}></Avatar>
        </AvatarGroup>
      </Stack>

      <Stack direction={'row'} spacing={2}>
        <Avatar
          variant='square'
          sx={{ bgcolor: 'info.light' }}
        ></Avatar>
        <Avatar variant='rounded' src={myImg} alt='Jane Doe' />
      </Stack>
    </Stack>
  );
};

export default MuiAvatar;
