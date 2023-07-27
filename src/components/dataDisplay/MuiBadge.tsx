import { Mail } from '@mui/icons-material';
import { Badge, Stack } from '@mui/material';

const MuiBadge = () => {
  return (
    <Stack direction={'row'} spacing={2}>
        {/* showZero props, max for max val to show (99+) */}
      <Badge badgeContent={3} color='primary'>
        <Mail />
      </Badge>

      <Badge variant='dot' badgeContent={3} color='primary'>
        <Mail />
      </Badge>

      <Badge invisible badgeContent={3} color='primary'>
        <Mail />
      </Badge>
    </Stack>
  );
};

export default MuiBadge;
