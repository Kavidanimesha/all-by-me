import React from 'react'
import { Formik , Form , Field } from 'formik'
import * as Yup from 'yup'
import TextFieldWrapper from '@/components/formsUI/textfieldValidation/TextFieldWrapper'
import SelectWrapper from '@/components/formsUI/select/SelectWrapper'
import DatePIckerWrapper from '@/components/formsUI/date/time pickers/DatePIckerWrapper'
import CheckboxWrapper from '@/components/formsUI/checkbox/CheckBoxWrapper'
import TimePickerWraper from '@/components/formsUI/date/time pickers/TimePickerWraper'
import { Button } from '@mui/material'


function Delivery() {

  const formData = {
    name: '',
    email: '',
    password: ''
  }

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Required"),
    email: Yup.string().email("Not Valid").required("Required"),
    password: Yup.string().required("Required"),
  })

  return (
    <div>
      <Formik
        initialValues={{...formData}}
        validationSchema={validationSchema}
        onSubmit={(value)=>{
              console.log(value)
        }}
      >
        <Form>
          <TextFieldWrapper name='name' label='Name' />
          <TextFieldWrapper name='email' label='E-mail' />
          <TextFieldWrapper name='password' label='Password' />
          <Button type='submit'> Send </Button>
        </Form>
      </Formik>
    </div>
  )
}
export default Delivery
