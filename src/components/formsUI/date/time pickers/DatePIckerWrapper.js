import { TextField } from '@mui/material'
import { useField } from 'formik'
import React from 'react'

function DatePIckerWrapper({name , ...otherProps}) {

    const [field , meta] = useField(name)

    const dateConfig = {
        ...field,
        ...otherProps,
        fullWidth: true,
        InputLabelProps: { shrink: true},
        type:"date"
    }

    if (meta && meta.touched && meta.error) {
        dateConfig.error= true;
        dateConfig.helperText=meta.error;
    }
  return (
    <TextField {...dateConfig} />
  )
}

export default DatePIckerWrapper;
