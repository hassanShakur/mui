import {
  Box,
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Radio,
  RadioGroup,
} from '@mui/material';
import { useState } from 'react';

const RadioBtns = () => {
  const [age, setAge] = useState('');

  return (
    <Box>
      {/* Error can be added to form control */}
      <FormControl>
        <FormLabel id='age-group'>Age group</FormLabel>
        <RadioGroup
          name='age-group'
          aria-labelledby='age-group'
          value={age}
          onChange={(e) => setAge(e.target.value)}
          // row // Align items to row
        >
          <FormControlLabel
            //   You can add extra props to the btn
            control={<Radio size='small' color='secondary' />}
            label='18-20'
            value={'18-20'}
          />
          <FormControlLabel
            control={<Radio />}
            label='21-25'
            value={'21-25'}
          />
          <FormControlLabel
            control={<Radio />}
            label='26-30'
            value={'26-30'}
          />
        </RadioGroup>
        <FormHelperText>Select age helper</FormHelperText>
      </FormControl>
    </Box>
  );
};

export default RadioBtns;
