

import { Box } from '@mui/material'
import React from 'react'

const Chatmessage = () => {

//   interface Message {
//   role: 'user' | 'assistant';
//   content: string;
// }
  // const messages: Message = { role: 'assistant', content: 'こんにちは！どのようなお手伝いができますか？' };

return (
  <Box sx={{ flex: 1, p: 2, width: '100%', maxWidth: '100%', height: '100%', alignSelf: 'flex-start' }}>

      {/* <Card sx={{ mx: 'auto', p: 2 ,bgcolor: colors.red[50],}}> */}
        {/* {messages.map((message, index) => (
          <Box
            key={index}
            sx={{
              display: 'flex', bgcolor: colors.red[50],
              // justifyContent: message.role === 'user' ? 'flex-end' : 'flex-start',
              mb: 1,
            }}
          >
            <Typography
              variant="body1"
            sx={{
                bgcolor: colors.red[50],
                // bgcolor: message.role === 'user' ? 'primary.main' : 'grey.200',
                // color: message.role === 'user' ? 'white' : 'black',
                borderRadius: 1,
                p: 1,
                // maxWidth: '70%',
              }}
            >
              {/* {message.content} */}
            {/* </Typography> */}
    {/* </Box> */}
          {/* } */}
        {/* ))} */}
      {/* </Card> */}
    </Box>
  )
}

export default Chatmessage
