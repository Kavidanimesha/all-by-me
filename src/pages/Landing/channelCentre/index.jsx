import { Grid, Typography } from '@mui/material'
import React from 'react'
import DrProfileCards from '@/components/cards/DrProfileCards'
import SpeechRecognition,{ useSpeechRecognition } from 'react-speech-recognition';

function index() {

  const { transcript, resetTranscript } = useSpeechRecognition({
    continuous: true
  });

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return null;
  }


  return (
    <>
    <Grid item xs={12} align='center'>
      <Typography variant='h4'> Doctor Profiles </Typography>
    </Grid>

    {/* Doctor Cards */}
    <Grid container sx={{margin: 5}} display={'flex'} flexDirection={'row'} spacing={2}>
      <DrProfileCards />
      <DrProfileCards />
      <DrProfileCards />
    </Grid>

    <div>
      <button onClick={SpeechRecognition.startListening}>Start</button>
      <button onClick={SpeechRecognition.stopListening}>Stop</button>
      <button onClick={resetTranscript}>Reset</button>
      <p>{transcript}</p>
    </div>

    
    </>
  )
}

export default index
