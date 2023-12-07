import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { Icon } from '@mui/material';

function Header() {
  return (
    <Box  sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{background: 'linear-gradient(225deg, rgb(105, 112, 111) 18%, rgb(0, 0, 0))'}}>
        <Toolbar >
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            {/* <MenuIcon /> */}
          </IconButton >
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            SINERGY
          </Typography>
          <Button component={Link} to ="/" color="inherit">Главная</Button>
          <Button component={Link} to ="/skills" color="inherit">Навыки</Button>
          <Button component={Link} to ="/projects" color="inherit">Проекты</Button>
          <Button component={Link} to ="/contacts" color="inherit">Контакты</Button>

        </Toolbar>
      </AppBar>
    </Box>
  );
}
export default Header;