import React from "react";
import ContainerField from "./ContainerField";
import InputText from "./InputText";
import Label from "./Label";
import Span from "./Span";

const Text = ({ textContent, type, name, register, error, placeHolder }) => {
  return (
    <ContainerField>
      <Label>
        <Span error={error}>{textContent}</Span>
        <InputText
          type={type}
          name={name}
          ref={register}
          placeholder={placeHolder && placeHolder}
          error={error}
        />
      </Label>
      <p style={{ color: "red" }}>{error?.message}</p>
    </ContainerField>
  );
};

const Field = {
  Text,
};

export default Field;
