import React from 'react'
import { Box, Typography } from '@mui/material'

export default function GoGroupLogo({ textColor }) {
  return (
    <Box display='flex'>
        <Box className="dot-circle" />
        <Typography color={textColor} marginInlineStart={1} lineHeight={1} variant='h2'>GoGroup</Typography>
    </Box>
  )
}
