

import React from 'react'
import TextField from '@mui/material/TextField';
import { Box, IconButton, InputAdornment } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';

const Textfield = () => {

  const textformstyle:object = {
    flexGrow: 1,
    // {/*& .MuiInputBase-input":  <TextField>で生成したテキストボックスそのものを */}
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              border: 'none', // 通常時の枠線を消す
            },
            '&:hover fieldset': {
              border: 'none', // ホバー時の枠線を消す
            },
            '&.Mui-focused fieldset': {
              border: 'none', // フォーカス時の枠線を消す
            }
          }
  }
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', overflow: 'hidden', height: '100%', borderRadius: '40px ', width: '100%', bgcolor: (theme) => theme.palette.secondary.main }}>
    <TextField sx={textformstyle}
    placeholder="質問を入力して下さい"
      multiline
      fullWidth
      slotProps={{
        input: {
          style: {
            borderRadius: '40px',
          },
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                onClick={() => {
                  console.log('RAGの添付');
                }}
              >
                < AddPhotoAlternateIcon/>
              </IconButton>
              <IconButton
                onClick={() => {
                  console.log('プロンプトの送信');
                }}
              >
                <SendIcon />
              </IconButton>
            </InputAdornment>
          ),
        }
      }}
      />
      </Box>
  )
}

export default Textfield
