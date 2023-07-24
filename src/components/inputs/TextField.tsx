import { Stack, TextField, InputAdornment } from '@mui/material';

const TxtField = () => {
  return (
    <Stack spacing={4}>
      <Stack direction={'row'} spacing={2}>
        <TextField label='Outlined' variant='outlined' />
        <TextField label='Filled' variant='filled' />
        <TextField label='Standard' variant='standard' />
      </Stack>

      <Stack direction={'row'} spacing={2}>
        <TextField
          label='Small warning'
          variant='outlined'
          size='small'
          color='warning'
        />

        <TextField
          label='Required'
          variant='outlined'
          size='small'
          required
          helperText='This is a helper text'
        />

        <TextField
          label='Error'
          variant='outlined'
          size='small'
          error
        />
      </Stack>

      <Stack direction={'row'} spacing={2}>
        <TextField
          label='Password'
          type='password'
          variant='outlined'
          size='small'
        />
        <TextField
          label='Disabled'
          variant='outlined'
          size='small'
          disabled
        />
        <TextField
          label='Read only'
          size='small'
          InputProps={{ readOnly: true }}
        />
      </Stack>

      <hr />

      <Stack direction={'row'}>
        {/* Adornment appends prefix or suffix to the input */}
        <TextField
          label='Salary'
          size='small'
          InputProps={{
            startAdornment: (
              <InputAdornment position='start'>$</InputAdornment>
            ),
          }}
        />

        <TextField
          label='Weight'
          size='small'
          InputProps={{
            endAdornment: (
              <InputAdornment position='end'>lbs</InputAdornment>
            ),
          }}
        />
      </Stack>
    </Stack>
  );
};

export default TxtField;
