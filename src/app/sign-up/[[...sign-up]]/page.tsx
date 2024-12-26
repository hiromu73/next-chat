import { SignUp } from '@clerk/nextjs'
import { Box } from '@mui/material'

export default function Page() {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', bgcolor: '#212121' }}>
      <SignUp />
    </Box>
  )
}
