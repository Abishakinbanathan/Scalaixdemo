import React from 'react';
import { AppBar, Toolbar, Typography, TextField, useMediaQuery, Box } from '@mui/material';
import { useLocation } from 'react-router-dom';

const NavBar = ({ handleSearchChange, searchQuery }) => {
  const isSmallScreen = useMediaQuery('(max-width:600px)');
  const location = useLocation();

  const showSearchField = location.pathname === '/';

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1, fontFamily: 'Inter', fontSize: '30px', fontWeight: '600', lineHeight: '38px' }}>
          Scalaix
        </Typography>
        {showSearchField && (
          <Box display="flex" justifyContent={isSmallScreen ? 'center' : 'flex-end'} width={isSmallScreen ? '100%' : 'auto'}>
            <TextField
              label="Search Products"
              variant="outlined"
              size="small"
              value={searchQuery}
              onChange={handleSearchChange}
              fullWidth={isSmallScreen}
              InputProps={{
                style: {
                  backgroundColor: 'white',
                  borderRadius: '4px',  
                  paddingLeft: '10px', 
                  paddingRight: '10px'  
                }
              }}
            />
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
