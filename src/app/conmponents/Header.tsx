// "use client"
import { Box, IconButton, Link, Menu, MenuItem, Typography } from '@mui/material'
import { Menu as MenuIcon } from '@mui/icons-material';
import React, { useState } from 'react'
// import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
// import { Sign } from 'crypto';

// propsの型定義
interface HeaderProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const Header = ({ isOpen, setIsOpen }: HeaderProps) => {
  // const [anchorEl, setAnchorEl] = useState(null);
  // const settingOpen = Boolean(anchorEl);
  // const handleClick = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };
  // const handleClose = () => {
  //   setAnchorEl(null);
  // };
  return (
    <Box sx={{ p: 4, bgcolor: (theme) => theme.palette.background.paper, width: '100%', display: 'flex', alignItems: 'center' }}>
      {!isOpen &&
        // <IconButton edge="start" color="inherit"  sx={{ mr: 2 }}>
        <IconButton edge="start" color="inherit" aria-label="menu" id="menu-button" onClick={() => setIsOpen(!isOpen)} sx={{ mr: 2 }}>
          < MenuIcon />
        </IconButton>
      }
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Debate内容
      </Typography>
      <Box>
        <SignedIn>
          <UserButton />
        </SignedIn>
        <SignedOut>
          <Link href="/sign-in" color='inherit'>Login</Link>
        </SignedOut>
      </Box>

      {/* <IconButton
        edge="end"
        aria-label="setting"
        id="basic-button"
        aria-controls={settingOpen ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={settingOpen ? 'true' : undefined}
        onClick={handleClick}
        color='inherit'
      >
        <AccountCircleRoundedIcon/>
        </IconButton> */}
      {/* <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={settingOpen}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu> */}
      </Box>
  )
}
export default Header
