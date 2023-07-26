import {
  AppBar,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Toolbar,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';

const NavBar = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const menuClickHandler = (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    setAnchorEl(e.currentTarget);
  };

  const menuCloseHandler = () => {
    setAnchorEl(null);
  };

  return (
    // Default position is fixed
    <AppBar position='static'>
      {/* Toolbar is for left right padding */}
      <Toolbar>
        <IconButton
          size='medium'
          edge='start'
          color='inherit'
          aria-label='logo'
        >
          Logo
        </IconButton>

        <Typography
          variant='h6'
          component={'div'}
          //   Grow pushes below links to the other end
          sx={{ flexGrow: 1 }}
        >
          MY WEBSITE
        </Typography>

        <Stack spacing={2} direction={'row'}>
          <Button color='inherit'>home</Button>
          <Button color='inherit'>pricing</Button>
          <Button
            color='inherit'
            id='my-button'
            onClick={menuClickHandler}
            aria-controls={open ? 'my-menu' : undefined}
            aria-haspopup={true}
            aria-expanded={open ? true : undefined}
          >
            Menu
          </Button>
          <Button color='inherit'>about</Button>
        </Stack>

        <Menu
          id='my-menu'
          anchorEl={anchorEl}
          open={open}
          MenuListProps={{
            'aria-labelledby': 'my-button',
          }}
          onClose={menuCloseHandler}
        //   anchorOrigin={{
        //     vertical: 'bottom',
        //     horizontal: 'right',
        //   }}
        //   transformOrigin={{
        //     vertical: 'top',
        //     horizontal: 'right',
        //   }}
        >
          <MenuItem onClick={menuCloseHandler}>Sub menu 1</MenuItem>
          <MenuItem onClick={menuCloseHandler}>Sub menu 2</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
