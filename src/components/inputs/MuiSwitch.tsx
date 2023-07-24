import { Box, FormControlLabel, Switch } from '@mui/material';
import { useState } from 'react';

const MuiSwitch = () => {
  const [switchOn, setSwitchOn] = useState(false);
  console.log({ switchOn });

  return (
    <Box>
      <FormControlLabel
        label='Dark mode'
        control={
          <Switch
            checked={switchOn}
            onChange={(e) => setSwitchOn(e.target.checked)}
          />
        }
      />
    </Box>
  );
};

export default MuiSwitch;
