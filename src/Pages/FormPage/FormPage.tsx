import './FormPage.scss';
import React from 'react';
import FormCards from '../../components/FormCards/FormCards';
import Form from '../../components/Form/Form';
const FormPage = () => {
  return (
    <div>
      <Form />
      <FormCards />
    </div>
  );
};

export default FormPage;
