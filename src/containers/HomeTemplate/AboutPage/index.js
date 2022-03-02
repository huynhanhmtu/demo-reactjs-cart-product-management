import React from 'react';
import TextField from '@mui/material/TextField'

export default function AboutPage() {
  return (
    <div className='container py-3'>
      <h4>Demo MUI</h4>
      <TextField id="standard-basic" label="Standard" variant="standard" />
    </div>
  )
}