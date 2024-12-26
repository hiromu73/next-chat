// "use client"
import { Avatar, Box, IconButton, Typography } from '@mui/material'
import { Menu as MenuIcon } from '@mui/icons-material';
import React from 'react'

// propsの型定義
interface HeaderProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const Header = ({ isOpen, setIsOpen }: HeaderProps) => {
  // const Header = () => {
  return (
    <Box sx={{ p: 2, bgcolor: (theme) => theme.palette.background.paper, width: '100%', display: 'flex', alignItems: 'center' }}>
      {!isOpen &&

        // <IconButton edge="start" color="inherit"  sx={{ mr: 2 }}>
        <IconButton edge="start" color="inherit" onClick={() => setIsOpen(!isOpen)} sx={{ mr: 2 }}>
        < MenuIcon />
        </IconButton>
      }
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Debate内容
        </Typography>
        <Avatar src="https://github.com/shadcn.png" alt="@shadcn" />
      </Box>
  )
}
export default Header
