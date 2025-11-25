import { Formik, Form, Field } from 'formik'
import css from './ContactForm.module.css'

const ContactForm = () => {
  return (
    <div>
      <Formik>
        <Form className={css.form}>
          <label htmlFor="name">First Name</label>
          <Field id="name" name="name" placeholder="Your Name" />

          <label htmlFor="name">Last Name</label>
          <Field id="name" name="name" placeholder="Your Name" />

          <label htmlFor="email">Email Address</label>
          <Field id="email" name="email"></Field>
        </Form>
      </Formik>
    </div>
  )
}

export default ContactForm
