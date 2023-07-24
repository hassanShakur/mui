import { Box, MenuItem, TextField, Stack } from '@mui/material';
import React, { useState } from 'react';

type StateProp = React.ChangeEvent<HTMLInputElement>;

const MuiSelect = () => {
  const [state, setstate] = useState('');
  const [multiple, setMultiple] = useState<string[]>([]);

  console.log({ multiple });

  const stateChangeHandler = (e: StateProp) => {
    setstate(e.target.value as string);
  };

  const multipleChangeHandler = (e: StateProp) => {
    const { value } = e.target;

    setMultiple(typeof value === 'string' ? value.split(',') : value);
  };

  return (
    <Stack direction={'row'} gap={2}>
      {/* Box is used when specifying width & height */}
      <Box width={'250px'}>
        {/* Add 'select' to convert textInput to select */}
        <TextField
          label='Select state'
          fullWidth
          size='small'
          value={state}
          onChange={stateChangeHandler}
          select
        >
          <MenuItem value='LA'>Los Angels</MenuItem>
          <MenuItem value='NY'>New York</MenuItem>
          <MenuItem value='TS'>Texas</MenuItem>
        </TextField>
      </Box>

      {/* Multiselect */}
      <Box width={'250px'}>
        <TextField
          label='Multiselect'
          fullWidth
          size='small'
          value={multiple}
          onChange={multipleChangeHandler}
          select
          SelectProps={{
            multiple: true,
          }}
        >
          <MenuItem value='LA'>Los Angels</MenuItem>
          <MenuItem value='NY'>New York</MenuItem>
          <MenuItem value='TS'>Texas</MenuItem>
        </TextField>
      </Box>
    </Stack>
  );
};

export default MuiSelect;
