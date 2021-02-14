import React from "react";
import CloseModal from "../CloseModal";
import DarkBackground from "../DarkBackground";
import Modal from "../Modal";

const ResultForm = ({ result, clickCloseModal }) => {
  const { nome, email, experiencia, objetivo } = result;

  const handleClose = (e) => {
    e.preventDefault();
    clickCloseModal(false);
  };

  return (
    <DarkBackground>
      <Modal>
        <h2 style={{ margin: "0 auto 1rem auto" }}>Cadastro Realizado</h2>
        <p>Nome: {nome}</p>
        <p>Email: {email}</p>
        <p>Experiência: {experiencia}</p>
        <p>Objetivo: {objetivo}</p>

        <CloseModal onClick={handleClose}>X</CloseModal>
      </Modal>
    </DarkBackground>
  );
};

export default ResultForm;
