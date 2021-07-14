import { useState } from "react";
import { Modal } from "antd";
import { useBudget } from "../../providers/budget";
import {ButtonDeleteModal} from "./styles";
import {FaRegTrashAlt} from "react-icons/fa";

const BudgetDeleteModal = ({ budgetId }) => {
  const { deleteBudget, budgets } = useBudget();
  const [visible, setVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState();

  const showModal = () => {
    setModalText(
      `Tem certeza que quer deletar o Orçamento Atual? ID: ${budgetId}`
    );
    setVisible(true);
  };

  const handleOk = () => {
    setModalText(
      "Orçamento será deletado e este modal será fechado em três segundos!"
    );
    setConfirmLoading(true);
    deleteBudget(budgetId);

    setTimeout(() => {
      setVisible(false);
      setConfirmLoading(false);
      if (budgets.length === 1) {
        window.location.reload();
      }
    }, 3000);
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
        title="Deletar Orçamento"
        visible={visible}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <p>{modalText}</p>
      </Modal>
    </>
  );
};

export default BudgetDeleteModal;
