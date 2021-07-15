import { useState } from "react";
import { Modal } from "antd";
import { useBudget } from "../../providers/budget";
import { ButtonDeleteModal, ButtonWrap, TextWrap } from "./styles";
import { FaRegTrashAlt } from "react-icons/fa";

import Button from "../Button";

const BudgetDeleteModal = ({ budgetId }) => {
  const { deleteBudget, budgets } = useBudget();
  const [visible, setVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState();

  const showModal = () => {
    setModalText(`Tem certeza que quer deletar o seu Orçamento ?`);
    setVisible(true);
  };

  const handleOk = () => {
    setConfirmLoading(true);
    deleteBudget(budgetId);

    setVisible(false);
    setConfirmLoading(false);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  return (
    <>
      <ButtonDeleteModal onClick={showModal}>
        <FaRegTrashAlt style={{ backgroundColor: "var(--white)" }} />
      </ButtonDeleteModal>
      <Modal
        title="Deletar Orçamento"
        visible={visible}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
        footer={null}
      >
        <TextWrap>
          <p>{modalText}</p>
        </TextWrap>
        <ButtonWrap>
          <Button whiteSchema>Cancelar</Button>
          <Button>Excluir</Button>
        </ButtonWrap>
      </Modal>
    </>
  );
};

export default BudgetDeleteModal;
