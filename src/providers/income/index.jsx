import { createContext, useContext, useEffect, useState } from "react";
import api from "../../services";
import {useUser} from "../users";
import jwtDecode from "jwt-decode";

export const IncomeContext = createContext([])

export const IncomeProvider = ({children}) => {
    const {token} = useUser()
    const [incomeCreateSuccess, setIncomeCreateSuccess] = useState(Boolean)
    const [incomeEditSuccess, setIncomeEditSuccess] = useState(Boolean)
    const [incomeDeleteSuccess, setIncomeDeleteSuccess] = useState(Boolean)
    const [incomes,setIncomes] = useState([])
    const reqDay = new Date().toLocaleString("en-US", { day: "numeric"})

    useEffect(() => {
        if(token !== "") {
            api.get("income", {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem("@HappyBudget:token")}`
                }
            }).then((res) => {
                let decoderId = jwtDecode(localStorage.getItem("@HappyBudget:token"))
                let userForEffect = parseInt(decoderId.sub)
                let userIncomes = res.data.filter(item => item.userId === userForEffect)
                setIncomes(userIncomes)
            })
        }
    }, [incomeCreateSuccess,incomeEditSuccess,incomeDeleteSuccess])

    const createIncome = (data) => {
        api.post("income", {...data, reqDay}, {
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