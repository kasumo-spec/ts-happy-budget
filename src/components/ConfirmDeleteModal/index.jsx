import React, { useState, useCallback } from "react";
import { Modal } from "antd";
import { useDebits } from "../../providers/debts";
import { ButtonDeleteModal, ButtonWrap, TextWrap } from "./styles";
import { FaRegTrashAlt } from "react-icons/fa";
import { useIncome } from "../../providers/income";

import Button from "../Button";

const ConfirmDeleteModal = ({ debitId, type }) => {
  const [visible, setVisible] = useState(false);

  const { deleteDebit } = useDebits();
  const { deleteIncome } = useIncome();

  const showModal = useCallback(() => {
    setVisible(true);
  }, []);

  const handleOk = (id) => {
    if (type === "debit") {
      deleteDebit(id);
    }
    if (type === "income") {
      deleteIncome(id);
    }
    setVisible(false);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  return (
    <>
      <ButtonDeleteModal onClick={showModal}>
        <FaRegTrashAlt />
      </ButtonDeleteModal>
      <Modal
        title="Excluir registro"
        visible={visible}
        onOk={() => handleOk(debitId)}
        onCancel={handleCancel}
        footer={null}
      >
        <TextWrap>
          {type === "debit" ? (
            <p>Tem certeza que quer deletar esta despesa?</p>
          ) : (
            <p>Tem certeza que quer deletar esta receita?</p>
          )}
        </TextWrap>
        <ButtonWrap>
          <Button onClick={handleCancel} whiteSchema>
            Cancelar
          </Button>
          <Button onClick={() => handleOk(debitId)}>Excluir</Button>
        </ButtonWrap>
      </Modal>
    </>
  );
};

export default ConfirmDeleteModal;
