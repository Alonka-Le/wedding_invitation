import { useId, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";

import css from "./RSVPForm.module.css";

const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const RSVPSchema = Yup.object().shape({
  userName: Yup.string().min(3, "Коротке ім'я!").required("Обов'язково"),
  surname: Yup.string().min(2, "Коротке прізвище!").required("Обов'язково"),
  attendance: Yup.string().oneOf(["yes", "no"]).required("Обов'язково"),
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

  const [status, setStatus] = useState("");

  const handleSubmit = (values, actions) => {
    console.log({
      serviceID,
      templateID,
      publicKey,
    });
    const templateParams = {
      user_name: values.userName,
      user_surname: values.surname,
      attendance: values.attendance === "yes" ? "Так" : "Ні",
    };

    emailjs.send(serviceID, templateID, templateParams, publicKey).then(
      () => {
        setStatus("Дякуємо! Ми отримали вашу відповідь 🎉");
        actions.resetForm();
      },
      (error) => {
        console.error(error);
        setStatus("Щось пішло не так. Спробуйте ще раз.");
      }
    );
  };

  return (
    <div className={css.container} id="confirm">
      <h2 className={css.title}>Підтвердити присутність</h2>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={RSVPSchema}
      >
        <Form className={css.form}>
          <label htmlFor={nameFieldId} className={css.nameFieldId}>
            Вкажіть Ваше ім'я
          </label>
          <Field
            className={css.input}
            type="text"
            placeholder="Ваше ім'я"
            name="userName"
            id={nameFieldId}
          />
          <ErrorMessage name="userName" component="span" />

          <label htmlFor={surnameFieldId} className={css.nameFieldId}>
            Вкажіть Вашу фамілію
          </label>
          <Field
            className={css.input}
            type="text"
            placeholder="Ваша фамілія"
            name="surname"
            id={surnameFieldId}
          />
          <ErrorMessage name="surname" component="span" />

          <label htmlFor={attendanceFieldId} className={css.nameFieldId}>
            Чи будете Ви присутні?
          </label>
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

          {status && <p className={css.status}>{status}</p>}
        </Form>
      </Formik>
    </div>
  );
}

export default RSVPForm;
