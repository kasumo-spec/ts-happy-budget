import { createContext, useContext, useEffect, useState } from "react";
import api from "../../services";
import {useUser} from "../users";

export const IncomeContext = createContext([])

export const IncomeProvider = ({children}) => {
    const {token} = useUser()
    const [incomeCreateSuccess, setIncomeCreateSuccess] = useState(Boolean)
    const [incomeEditSuccess, setIncomeEditSuccess] = useState(Boolean)
    const [incomeDeleteSuccess, setIncomeDeleteSuccess] = useState(Boolean)
    const [incomes,setIncomes] = useState([])

    useEffect(() => {
        if(token !== "") {
            api.get("income", {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            }).then((res) => {
                setIncomes(res.data)
            })
        }
    }, [incomeCreateSuccess,incomeEditSuccess,incomeDeleteSuccess])

    const createIncome = (data) => {
        api.post("income", data, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then((res) => {
            if(res.status === 201) {
                setIncomeCreateSuccess(true)
            }
        }).catch((_) => setIncomeCreateSuccess(false))
    }

    const editIncome = (data,id) => {
        api.patch(`income/${id}`, data, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then((_) => {
            setIncomeEditSuccess(true)
        }).catch((_) => setIncomeEditSuccess(false))
    }

    const deleteIncome = (data) => {
        api.delete(`income/${data}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then((_) => {
            setIncomeDeleteSuccess(true)
        }).catch((_) => setIncomeDeleteSuccess(false))
    }

    return (
        <IncomeContext.Provider
            value={{createIncome, editIncome, deleteIncome,
                    incomes, incomeCreateSuccess, incomeEditSuccess, incomeDeleteSuccess}}
        >
            {children}
        </IncomeContext.Provider>
    )

}

export const useIncome = () => useContext(IncomeContext)