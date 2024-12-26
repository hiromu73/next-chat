

import { Box, CssBaseline } from '@mui/material'
import Chatare from './Chatare'
import Sidebar from './Sidebar'
import Header from './Header'
import { useState } from 'react';


const Chat = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <Box sx={{ display: 'flex', height: '100vh', bgcolor: 'grey.100' }}>
        <CssBaseline />
        <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <Header isOpen={isOpen} setIsOpen={setIsOpen} />
        <Chatare />
      </Box>
    </Box>
  )
}

export default Chat
