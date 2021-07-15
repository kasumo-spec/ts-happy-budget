import React, { useState, useCallback } from "react";
import { Modal } from "antd";
import { useDebits } from "../../providers/debts";
import { ButtonDeleteModal } from "./styles";
import { GrTrash } from "react-icons/gr";
import { useIncome } from "../../providers/income";

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
        <GrTrash />
      </ButtonDeleteModal>
      <Modal
        title="Deletar Despesa"
        visible={visible}
        onOk={() => handleOk(debitId)}
        onCancel={handleCancel}
      >
        {type === "debit" ? (
          <p>Tem certeza que quer deletar esta despesa?</p>
        ) : (
          <p>Tem certeza que quer deletar esta receita?</p>
        )}
      </Modal>
    </>
  );
};

export default ConfirmDeleteModal;
