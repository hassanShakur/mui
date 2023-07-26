import { Link, Stack } from '@mui/material';

const MuiLink = () => {
  return (
    <Stack spacing={2} direction={'row'} m={4}>
      {/* Variant is inherited from  wrapper */}
      <Link href='#' variant='body1'>
        Link
      </Link>
      <Link href='#' color={'secondary'} underline='hover'>
        Secondary
      </Link>
    </Stack>
  );
};

export default MuiLink;
