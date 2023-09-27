
import * as React from 'react'
import Form, {
  Input,
  Select,
  FormButton,
} from 'react-form-component'

function FormComponent() {
    return (
  <Form fields={['name', 'email', 'type']}>
    <Input
      name='name'
      label='User name'
    />
    <Input
      name='email'
      type='email'
      label='E-mail'
    />
    <Select
      name='type'
      label='Type of a user'
      options={['Viewer', 'Moderator', 'Admin']}
    />
    <FormButton
      onClick={fields => console.log(fields)}
    >Save</FormButton>
  </Form>
    )
} 

export default FormComponent