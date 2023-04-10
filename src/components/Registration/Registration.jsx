import React, { useContext, useState } from "react";
import styles from "./Registration.module.css";
import Button from "../Button/Button";
import { AppContext } from "../../context/Context";
import { Formik, Form, Field, ErrorMessage } from 'formik';

const Registration = () => {
  return (
    <div className={styles.registrationWrapper}>
        <div className={styles.closeRegistration}
        // onClick={}
        >
        </div>
        <h2>Реєстрація</h2>

        <Formik
            initialValues={{ nickname: '', email: '', password: '', confirmPassword: '', agree: '' }}
            validate={values => {
                const errors = {};
                if (!values.email) {
                  errors.email = "Обов'язкове поле";
                } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                errors.email = 'Невірний email';
                }
                if (!values.nickname) {
                    errors.nickname = "Обов'язкове поле";
                } else if (
                    !  /^[а-яa-z0-9_-]{3,}$/i.test(values.nickname)
                ) {
                errors.nickname = 'Nickname має бути більше 3 символів';
                }
                if (!values.password) {
                    errors.password = "Обов'язкове поле";
                } else if (
                    !  /^[а-яa-z0-9_-]{8,}$/i.test(values.password)
                ) {
                errors.password = 'Пароль має бути більше 8 символів';
                }
                if (!values.confirmPassword) {
                    errors.confirmPassword = "Обов'язкове поле";
                } else if (
                    values.password !== values.confirmPassword
                ) {
                errors.confirmPassword = 'Пароль не збігається';
                }
                if (!values.agree) {
                    errors.agree = "Обов'язкове поле";
                }
                return errors;                
            }}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
                }, 400);
            }}
        >
         {({
         values,
         errors,
         touched,
         handleChange,
         handleBlur,
         handleSubmit,
         isSubmitting,
       }) => (
            <Form>
                <Field type='text' placeholder='Nickname' name="nickname"  
                className={                    
                    errors.nickname && touched.nickname
                      ? styles.error
                      : ""
                  }
                  />
                <ErrorMessage name="nickname" component="div" className={styles.errorForm}/>
                <Field type="email" placeholder='E-mail' name="email" 
                className={
                    errors.email && touched.email
                      ? styles.error
                      : ""
                  }/>
                <ErrorMessage name="email" component="div" className={styles.errorForm}/>
                <Field type="password" placeholder='Пароль' name="password" 
                className={
                    errors.password && touched.password
                      ? styles.error
                      : ""
                  }/>
                <ErrorMessage name="password" component="div" className={styles.errorForm}/>
                <Field type="password" placeholder='Підтвердити пароль' name="confirmPassword" 
                className={
                    errors.confirmPassword && touched.confirmPassword
                      ? styles.error
                      : ""
                  }/>
                <ErrorMessage name="confirmPassword" component="div" className={styles.errorForm}/>
                <p className={styles.wrapperCheckbox}>
                    <Field type='checkbox' id='agree' name='agree' 
                    className={
                        errors.agree && touched.agree
                          ? styles.error
                          : ""
                      }/>
                    <label htmlFor="agree">Я приймаю умови <a href="#">Наші умови</a>.</label>
                    <ErrorMessage name="agree" component="div" className={styles.errorForm}/>
                </p>
                <Button 
                text="зареєструватися" 
                type="submit" 
                disabled={isSubmitting}
                />
            </Form>
        )}
        </Formik>
    </div>
  );
};

export default Registration;