import React from "react";

import Form from "../../components/Form";
import Field from "../../components/Field";
import ButtonSubmit from "../../components/ButtonSubmit";
import ContainerField from "../../components/Field/ContainerField";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import camposForm from "../../camposForm.json";
import ResultForm from "../../components/ResultForm";

const Formulario = () => {
  const [showResult, setShowResult] = React.useState(false);
  const [result, setResult] = React.useState({});

  const regExData = /(^(((0[1-9]|1[0-9]|2[0-8])[/](0[1-9]|1[012]))|((29|30|31)[/](0[13578]|1[02]))|((29|30)[/](0[4,6,9]|11)))[/](19|[2-9][0-9])\d\d$)|(^29[/]02[/](19|[2-9][0-9])(00|04|08|12|16|20|24|28|32|36|40|44|48|52|56|60|64|68|72|76|80|84|88|92|96)$)/;
  const regPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/;

  const messages = {
    required: "Campo obrigatório!",
    email: "Email inválido!",
    emailDiferente: "O email está diferente do campo anterior!",
    data: "Data inválida",
    senha:
      "A senha deve conter no mínimo 8 caracteres com  maiúsculo, minúsculo, número e caractere especial",
  };

  const schema = yup.object().shape({
    nome: yup
      .string()
      .max(18, "Máximo 18 caracteres")
      .required(messages.required),

    email: yup.string().email(messages.email).required(messages.required),

    confEmail: yup
      .string()
      .email(messages.email)
      .oneOf([yup.ref("email"), null], messages.emailDiferente)
      .required(messages.required),

    experiencia: yup.string().required(messages.required),

    objetivo: yup.string().required(messages.required),

    nascimento: yup
      .string()
      .matches(regExData, messages.data)
      .required(messages.required),

    senha: yup
      .string()
      .matches(regPassword, messages.senha)
      .required(messages.required),

    confSenha: yup
      .string()
      .oneOf([yup.ref("senha"), null], "As senhas não se coincidem!")
      .required(messages.required),
  });

  const { register, handleSubmit, errors, reset } = useForm({
    resolver: yupResolver(schema),
  });

  const handleForm = (data) => {
    setResult(data);
    setShowResult(true);
    reset();
  };

  return (
    <Form onSubmit={handleSubmit(handleForm)}>
      {camposForm.map(({ label, type, name, placeHolder }) => (
        <Field.Text
          key={name}
          textContent={label}
          name={name}
          type={type}
          register={register}
          error={errors[name]}
          placeHolder={placeHolder}
        />
      ))}

      <ContainerField>
        <ButtonSubmit type="submit">ENVIAR</ButtonSubmit>
      </ContainerField>

      {showResult && (
        <ResultForm clickCloseModal={setShowResult} result={result} />
      )}
    </Form>
  );
};

export default Formulario;
