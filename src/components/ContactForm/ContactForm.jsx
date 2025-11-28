import { Formik, Form, Field } from "formik";
import css from "./ContactForm.module.css";

const ContactForm = () => {
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    message: "",
    picked: "",
    checked: false,
  };

  const handleSubmit = (values, actions) => {
    console.log(values);

    actions.resetForm();
  };

  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={css.form}>
          <div>
            <div>
              <label htmlFor="firstName">First Name</label>
              <Field id="firstName" name="firstName" placeholder="Your Name" />
            </div>

            <div>
              <label htmlFor="lastName">Last Name</label>
              <Field
                id="lastName"
                name="lastName"
                placeholder="Your Last Name"
              />
            </div>
          </div>

          <label htmlFor="email">Email Address</label>
          <Field id="email" name="email" placeholder="Email address"></Field>

          <div>
            <label>
              <Field type="radio" name="picked" value="General Enquiry" />
              General Enquiry
            </label>

            <label>
              <Field type="radio" name="picked" value="Support Request" />
              Support Request
            </label>
          </div>

          <label htmlFor="message">Message</label>
          <Field as="textarea" name="message" id="message" cols="20" rows="5" />

          <label>
            <Field type="checkbox" name="checked" value="true" />I consent to
            being contacted by the team
          </label>

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
