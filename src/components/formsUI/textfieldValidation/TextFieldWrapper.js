import { TextField } from '@mui/material'
import { useField } from 'formik'
import React from 'react'

function TextFieldWrapper ({
  name,
  type,
  value,
  required,
  ...otherProps
}) {

  const [ field , meta ] = useField(name)

	const textConfig = {
		...field,
		type,
		value,
		required:required, 
		...otherProps,
		fullWidth: true,
		variant: 'standard',
		InputLabelProps: { shrink: true},
	}

	if (meta && meta.touched && meta.error) {
		textConfig.error = true
		textConfig.helperText = meta.error
	}

	return <TextField {...textConfig} />
}

export default TextFieldWrapper
