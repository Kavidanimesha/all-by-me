import React from 'react'
import { TextField, MenuItem } from '@mui/material'
import { useField, useFormikContext } from 'formik'

const SelectWrapper = ({ name, options, placeholder , ...otherProps }) => {
	const { setFieldValue } = useFormikContext()
	const [field, meta] = useField(name)

	const handleChange = (evt) => {
		const { value } = evt.target
		setFieldValue(name, value)
	}

	const configSelect = {
		...field,
		...otherProps,
		placeholder,
		select: true,
		variant: 'outlined',
		fullWidth: true,
		onChange: handleChange,
	}

	if (meta && meta.touched && meta.error) {
		configSelect.error = true
		configSelect.helperText = meta.error
	}

	return (
		<TextField {...configSelect}>
			{Object.keys(options).map((item, pos) => (
				<MenuItem key={pos} value={options[item]}>
					{options[item]}
				</MenuItem>
			))}
		</TextField>
	)
}

export default SelectWrapper
