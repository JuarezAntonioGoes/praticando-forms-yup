import React from "react";
import Fieldset from "./Fieldset";
import FormTag from "./FormTag";

const Form = ({ children, onSubmit }) => {
  return (
    <FormTag onSubmit={onSubmit}>
      <Fieldset>
        <legend>Formulário</legend>
        {children}
      </Fieldset>
    </FormTag>
  );
};

export default Form;
