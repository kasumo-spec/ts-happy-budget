import { createContext, useContext, useEffect, useState } from "react";
import api from "../../services";
import { useUser } from "../users";

<<<<<<< HEAD
export const DebtContext = createContext([]);

export const DebtProvider = ({ children }) => {
  const { token, userId } = useUser();
  const [debtCreateSuccess, setDebtCreateSuccess] = useState(false);
  const [debtEditSuccess, setDebtEditSuccess] = useState(false);
  const [debtDeleteSuccess, setDebtDeleteSuccess] = useState(false);
  const [debts, setDebts] = useState([]);

  useEffect(() => {
    if (token !== "") {
      api
        .get(`debit/?userId=${userId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          setDebts(res.data);
        });
=======
export const DebitContext = createContext([])

export const DebitProvider = ({children}) => {
    const {token} = useUser()
    const [debitCreateSuccess, setDebitCreateSuccess] = useState(Boolean)
    const [debitEditSuccess, setDebitEditSuccess] = useState(Boolean)
    const [debitDeleteSuccess, setDebitDeleteSuccess] = useState(Boolean)
    const [debits,setDebits] = useState([])

    useEffect(() => {
        if(token !== "") {
            api.get("debit", {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            }).then((res) => {
                setDebits(res.data)
            })
        }
    }, [debitCreateSuccess,debitEditSuccess,debitDeleteSuccess])

    const createDebit = (data) => {
        api.post("debit", data, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then((res) => {
            if(res.status === 201) {
                setDebitCreateSuccess(true)
            }
        }).catch((_) => setDebitCreateSuccess(false))
>>>>>>> develop
    }
  }, [debtCreateSuccess, debtEditSuccess, debtDeleteSuccess, token]);

<<<<<<< HEAD
  const createDebt = (data) => {
    api
      .post("debit", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        if (res.status === 201) {
          setDebtCreateSuccess(true);
        }
      })
      .catch((_) => setDebtCreateSuccess(false));
  };

  const editDebt = (data, id) => {
    api
      .patch(`debit/${id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((_) => {
        setDebtEditSuccess(true);
      })
      .catch((_) => setDebtEditSuccess(false));
  };

  const deleteDebt = (data) => {
    api
      .delete(`debit/${data}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((_) => {
        setDebtDeleteSuccess(true);
      })
      .catch((_) => setDebtDeleteSuccess(false));
  };
=======
    const editDebit = (data,id) => {
        api.patch(`debit/${id}`, data, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then((_) => {
            setDebitEditSuccess(true)
        }).catch((_) => setDebitEditSuccess(false))
    }

    const deleteDebit = (data) => {
        api.delete(`debit/${data}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then((_) => {
            setDebitDeleteSuccess(true)
        }).catch((_) => setDebitDeleteSuccess(false))
    }

    return (
        <DebitContext.Provider
            value={{createDebit, editDebit, deleteDebit,
                    debits, debitCreateSuccess, debitEditSuccess, debitDeleteSuccess}}
        >
            {children}
        </DebitContext.Provider>
    )
>>>>>>> develop

  return (
    <DebtContext.Provider
      value={{
        createDebt,
        editDebt,
        deleteDebt,
        debts,
        debtCreateSuccess,
        debtEditSuccess,
        debtDeleteSuccess,
      }}
    >
      {children}
    </DebtContext.Provider>
  );
};

<<<<<<< HEAD
export const useDebts = () => useContext(DebtContext);
=======
export const useDebits = () => useContext(DebitContext)
>>>>>>> develop
