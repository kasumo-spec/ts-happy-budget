import { createContext, useContext } from "react";
import { notification } from "antd";
import Emoji from "../../components/Emoji";
import "antd/dist/antd.css";
import "./styles.css";

export const NotificationsContext = createContext();

export const NotificationsProvider = ({ children }) => {
  const registerSuccess = () => {
    notification.success({
      message: <h3>Uhull!</h3>,
      description: <p>Seu cadastro deu bom!</p>,
      icon: <Emoji label="waving hand" symbol="🥳" />,
      className: "success",
    });
  };

  const logout = () => {
    notification.success({
      message: <h3>Até logo!</h3>,
      description: <p>Não esqueça de manter suas finanças atualizadas.</p>,
      icon: <Emoji label="partying face" symbol="👋" />,
      className: "success",
    });
  };

    const logoutSuccess = () => {
        notification.success({
            message: <h3>Até logo!</h3>,
            description: <p>Não esqueça de manter suas finanças atualizadas.</p>,
            icon: <Emoji label="partying face" symbol="👋"/>,
            className: "success"
        })
    }

    const login = () => {
        notification.success({
            message: <h3>Bem vindo a bordo!</h3>,
            description: <p>Vamos navegar em suas finanças e mantê-la no controle.</p>,
            icon: <Emoji label="smiling face with hearts" symbol="⛵"/>,
            className: "success"
        })
    }

    const loginError = () => {
        notification.error({
            message: <h3>Deu erro!</h3>,
            description: <p>Não conseguimos fazer seu login.</p>,
            icon: <Emoji label="smiling face with hearts" symbol="🔒"/>,
            className: "success"
        })
    }
    
    const newIncomeSuccess = () => {
        notification.success({
            message: <h3>Muito bom!</h3>,
            description: <p>Nova receita adicionada.</p>,
            icon: <Emoji label="bolsa de dinaro" symbol="💰"/>,
            className: "success"
        })
    }

  const newIncomeError = () => {
    notification.error({
      message: <h3>Opa!</h3>,
      description: <p>Não conseguimos adicionar essa receita.</p>,
      icon: <Emoji label="smiling face with tear" symbol="🥲" />,
      className: "error",
    });
  };

  const newDebitSuccess = () => {
    notification.success({
      message: <h3>Eita!</h3>,
      description: (
        <p>Nova despesa adicionada. Fique de olho na suas contas.</p>
      ),
      icon: <Emoji label="eyes" symbol="👀" />,
      className: "success",
    });
  };

  const newDebitError = () => {
    notification.error({
      message: <h3>Ops!</h3>,
      description: <p>Não conseguimos adicionar essa despesa.</p>,
      icon: <Emoji label="red x" symbol="❌" />,
      className: "error",
    });
  };

  const deleteIncomeSuccess = () => {
    notification.success({
      message: <h3>Ah não!</h3>,
      description: <p>Receita excluída.</p>,
      icon: <Emoji label="flying money" symbol="💸" />,
      className: "success",
    });
  };

  const deleteIncomeError = () => {
    notification.error({
      message: <h3>Ops!</h3>,
      description: <p>Não conseguimos excluir essa receita.</p>,
      icon: <Emoji label="relieved face" symbol="😌" />,
      className: "error",
    });
  };

  const deleteDebitSuccess = () => {
    notification.success({
      message: <h3>Oba!</h3>,
      description: <p>Vai sobrar um dinheirinho? Despesa excluída.</p>,
      icon: <Emoji label="tears of joy cat" symbol="😹" />,
      className: "success",
    });
  };

    const deleteDebitError = () => {
        notification.error({
            message: <h3>Aff!</h3>,
            description: <p>Não conseguimos excluir essa despesa.</p>,
            icon: <Emoji label="loud cry" symbol="😭"/>,
            className: "error"
        })
    }
    
    return (
        <NotificationsContext.Provider value={
            {   
                registerSuccess,
                logoutSuccess,
                login,
                loginError,
                newIncomeSuccess,
                newIncomeError,
                newDebitSuccess,
                newDebitError,
                deleteIncomeSuccess,
                deleteIncomeError,
                deleteDebitSuccess,
                deleteDebitError }
            }>
                {children}
        </NotificationsContext.Provider>
    )
}
