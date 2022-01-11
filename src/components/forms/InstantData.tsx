import { Field, Form, Formik } from 'formik';
import React from 'react';
import { TextFormField } from './TextFormField';
import * as yup from 'yup';

interface InstantDataProps {}

interface InstantDataType {
  metrix: string;
  description: string;
  value: number;
}

const schema = yup.object({
  metrix: yup.string().required(),
  value: yup.number().required()
});

export const InstantData: React.FC<InstantDataProps> = ({}) => {
  const initialValues: InstantDataType = {
    metrix: '',
    description: '',
    value: 0
  };
  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={(values) => {
          console.log({ values });
        }}
      >
        {({ values, isSubmitting, handleChange }) => (
          <Form>
            <Field name="metrix" component={TextFormField} label="metrix" />
            <Field
              name="description"
              component={TextFormField}
              label="description"
            />
            <Field name="value" component={TextFormField} label="value" />
          </Form>
        )}
      </Formik>
    </>
  );
};
