import React, { useState } from "react";
import { 
AppBar,
Box, 
Toolbar, 
IconButton, 
Typography,
Menu,
Container,
Button,
Tooltip,
MenuItem } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import PersonIcon from '@mui/icons-material/Person';

const pages = ['Home','Blog'];
const settings = ['Profile', 'Logout'];

const Header = () => {
      const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
      const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

      const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
            setAnchorElNav(event.currentTarget);
      };
      const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
            setAnchorElUser(event.currentTarget);
      };

      const handleCloseNavMenu = () => {
            setAnchorElNav(null);
      };

      const handleCloseUserMenu = () => {
            setAnchorElUser(null);
      };

      return (
            <AppBar position="static" sx={{background: '#76c9ac'}}>
                  <Container maxWidth='xl'>
                        <Toolbar disableGutters>
                              <Typography
                                    variant="h6"
                                    noWrap
                                    component="span"
                                    sx={{
                                          mr: 10,
                                          display: { xs: 'none', md: 'flex' },
                                          letterSpacing: '.4rem',
                                          fontWeight: 700,
                                          fontSize: 27,
                                          fontFamily: 'Josefin Sans',
                                          color: 'inherit',
                                          textDecoration: 'none',
                                    }}
                              >
                                    My Travel
                              </Typography>
                              <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                                    <IconButton
                                          size="large"
                                          aria-label="account of current user"
                                          aria-controls="menu-appbar"
                                          aria-haspopup="true"
                                          onClick={handleOpenNavMenu}
                                          color="inherit"
                                    >
                                          <MenuIcon />
                                    </IconButton>
                                    <Menu
                                          id="menu-appbar"
                                          anchorEl={anchorElNav}
                                          anchorOrigin={{
                                                vertical: 'bottom',
                                                horizontal: 'left',
                                          }}
                                          keepMounted
                                          transformOrigin={{
                                                vertical: 'top',
                                                horizontal: 'left',
                                          }}
                                          open={Boolean(anchorElNav)}
                                          onClose={handleCloseNavMenu}
                                          sx={{
                                                display: { xs: 'block', md: 'none' },
                                          }}
                                    >
                                          {pages.map((page) => (
                                                <MenuItem key={page} onClick={handleCloseNavMenu}>
                                                      <Typography textAlign="center">{page}</Typography>
                                                </MenuItem>
                                          ))}
                                    </Menu>
                              </Box>
                              <Typography
                                    variant="h5"
                                    noWrap
                                    component="span"
                                    sx={{
                                          mr: 2,
                                          display: { xs: 'flex', md: 'none' },
                                          flexGrow: 1,
                                          fontWeight: 700,
                                          fontSize: 27,
                                          fontFamily: 'Josefin Sans',
                                          letterSpacing: '.4rem',
                                          color: 'inherit',
                                          textDecoration: 'none',
                                    }}
                              >
                                    My Travel
                              </Typography>
                              <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                                    {pages.map((page) => (
                                          <Button
                                                key={page}
                                                onClick={handleCloseNavMenu}
                                                sx={{ 
                                                      my: 3, 
                                                      mx: 1, 
                                                      color: 'white', 
                                                      display: 'block', 
                                                      fontWeight: 700,
                                                      fontSize: 16,
                                                      fontFamily: 'Josefin Sans'
                                                }}
                                          >
                                                {page}
                                          </Button>
                                    ))}
                              </Box>
                              <Box sx={{ flexGrow: 0 }}>
                                    <Tooltip title="Open settings">
                                          <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                                <PersonIcon sx={{color: 'white', fontSize: 30}}/>
                                          </IconButton>
                                    </Tooltip>
                                    <Menu
                                          sx={{ mt: '45px' }}
                                          id="menu-appbar"
                                          anchorEl={anchorElUser}
                                          anchorOrigin={{
                                                vertical: 'top',
                                                horizontal: 'right',
                                          }}
                                          keepMounted
                                          transformOrigin={{
                                                vertical: 'top',
                                                horizontal: 'right',
                                          }}
                                          open={Boolean(anchorElUser)}
                                          onClose={handleCloseUserMenu}
                                    >
                                          {settings.map((setting) => (
                                                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                                      <Typography textAlign="center">{setting}</Typography>
                                                </MenuItem>
                                          ))}
                                    </Menu>
                              </Box>
                        </Toolbar>
                  </Container>
            </AppBar>
      );
}

export default Header