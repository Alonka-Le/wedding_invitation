import { useId } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from "./RSVPForm.module.css";

const RSVPShema = Yup.object().shape({
  userName: Yup.string().min(3, "Которке ім'я!").required("Обов'язково"),
  surname: Yup.string().min(2, "Которка фамілія!").required("Обов'язково"),
  attendance: Yup.string().oneOf(["yes", "no"]).required("Required"),
});

const initialValues = {
  userName: "",
  surname: "",
  attendance: "yes",
};

function RSVPForm() {
  const nameFieldId = useId();
  const surnameFieldId = useId();
  const attendanceFieldId = useId();

  const handleSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
  };

  return (
    <div className={css.container} id="confirm">
      <h2>Підтвердити присутність</h2>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={RSVPShema}
      >
        {({ values }) => (
          <Form className={css.form}>
            <label htmlFor="nameFieldId">Вкажіть Ваше ім'я</label>
            <Field
              className={css.input}
              type="text"
              placeholder="Ваше ім'я"
              name="userName"
              id={nameFieldId}
            />
            <ErrorMessage name="userName" component="span" />
            <label htmlFor="surnameFieldId">Вкажіть Вашу фамілію</label>
            <Field
              className={css.input}
              type="text"
              placeholder="Ваша фамілія"
              name="surname"
              id={surnameFieldId}
            />
            <ErrorMessage name="surname" component="span" />
            <label htmlFor="attendanceFieldId">Чи будете Ви присутні</label>
            <Field
              className={css.input}
              as="select"
              name="attendance"
              id={attendanceFieldId}
            >
              <option value="yes">Так</option>
              <option value="no">Ні</option>
            </Field>
            <ErrorMessage name="attendance" component="span" />
            <button type="submit" className={css.button}>
              Підтвердити
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
export default RSVPForm;
