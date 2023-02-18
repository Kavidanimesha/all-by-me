import { TextField } from '@mui/material'
import { useField  } from 'formik'
import React from 'react'

function TimePickerWraper({name , ...otherProps}) {

    const [field , meta] = useField(name)

    const timeConfig = {
        ...field,
        ...otherProps,
        type: 'time',
        fullWidth: true,
        InputLabelProps: {shrink: true},

    };

    if(meta && meta.touched && meta.error) {
        timeConfig.error = true;
        timeConfig.helperText = meta.error;
    }
  return (
   <TextField {...timeConfig} />
  )
}

export default TimePickerWraper;
