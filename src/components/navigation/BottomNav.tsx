import {
  BottomNavigation,
  BottomNavigationAction,
} from '@mui/material';
import { useState } from 'react';

const BottomNav = () => {
  const [value, setValue] = useState(0);

  return (
    <BottomNavigation
      sx={{ width: '100%', position: 'absolute', bottom: 0 }}
      value={value}
      onChange={(_, newVal) => setValue(newVal)}
      showLabels
    >
      <BottomNavigationAction label='Home' icon={'🏠'} />
      <BottomNavigationAction label='Favourites' icon={'🍏'} />
      <BottomNavigationAction label='Profile' icon={'💫'} />
    </BottomNavigation>
  );
};

export default BottomNav;
