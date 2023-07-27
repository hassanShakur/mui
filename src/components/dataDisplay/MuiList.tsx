import {
  Apple,
  Facebook,
  Google,
  WhatsApp,
} from '@mui/icons-material';
import {
  Avatar,
  Box,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';

const MuiList = () => {
  return (
    <Box sx={{ width: 400, bgcolor: '#efefef' }}>
      <List>
        <ListItem>
          <ListItemIcon>
            <Google />
          </ListItemIcon>
          <ListItemText primary='Google' />
        </ListItem>

        <Divider />

        <ListItem>
          <ListItemIcon>
            <ListItemAvatar>
              <Avatar>
                <Apple />
              </Avatar>
            </ListItemAvatar>
          </ListItemIcon>
          <ListItemText primary='Apple' />
        </ListItem>

        <Divider />

        <ListItem>
          <ListItemIcon>
            <Facebook />
          </ListItemIcon>
          <ListItemText
            primary='Facebook'
            secondary='Some description'
          />
        </ListItem>

        <Divider />

        <ListItemButton>
          <ListItem disablePadding>
            <ListItemIcon>
              <WhatsApp />
            </ListItemIcon>
            <ListItemText
              primary='Whatsapp'
              secondary='This is also a button'
            />
          </ListItem>
        </ListItemButton>
      </List>
    </Box>
  );
};

export default MuiList;
