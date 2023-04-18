// import { Grid, Typography } from '@mui/material'
// import React from 'react'
// import DrProfileCards from '@/components/cards/DrProfileCards'

// function index() {
//   return (
//     <>
//     <Grid item xs={12} align='center'>
//       <Typography variant='h4'> Doctor Profiles </Typography>
//     </Grid>

//     {/* Doctor Cards */}
//     <Grid container sx={{margin: 5}} display={'flex'} flexDirection={'row'} spacing={2}>
//       <DrProfileCards />
//       <DrProfileCards />
//       <DrProfileCards />
//     </Grid>
//     </>
//   )
// }

// export default index

import { useState } from 'react';
import { useSpeechRecognition } from 'react-speech-recognition';
import { Autocomplete } from '@mui/lab';

const options = [
  { label: 'Option 1', value: 'option1' },
  { label: 'Option 2', value: 'option2' },
  { label: 'Option 3', value: 'option3' },
];

export default function AutocompleteWithSpeechRecognition() {
  const [selectedOption, setSelectedOption] = useState(null);
  const { transcript, resetTranscript } = useSpeechRecognition();

  const handleInputChange = (event) => {
    const transcript = event.target.value.toLowerCase();
    const matchingOption = options.find((option) =>
      option.label.toLowerCase().includes(transcript)
    );
    if (matchingOption) {
      setSelectedOption(matchingOption.value);
    } else {
      setSelectedOption(null);
    }
  };

  const handleSpeechRecognition = () => {
    if (!('webkitSpeechRecognition' in window)) {
      console.log('Speech recognition is not supported in this browser');
      return;
    }

    const recognition = new window.webkitSpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = false;
    recognition.lang = 'en-US';

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript.toLowerCase();
      resetTranscript();
      const matchingOption = options.find((option) =>
        option.label.toLowerCase().includes(transcript)
      );
      if (matchingOption) {
        setSelectedOption(matchingOption.value);
      }
    };

    recognition.onerror = (event) => {
      console.log(`Recognition error: ${event.error}`);
    };

    recognition.start();
  };

  return (
    <div>
      <Autocomplete
        options={options}
        getOptionLabel={(option) => option.label}
        value={selectedOption}
        onChange={(event, value) => setSelectedOption(value)}
        renderInput={(params) => (
          <div>
            <input
              type="text"
              {...params.inputProps}
              onChange={handleInputChange}
            />
            <button onClick={handleSpeechRecognition}>Start Speech Recognition</button>
          </div>
        )}
      />
    </div>
  );
}

