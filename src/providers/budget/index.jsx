import { createContext, useContext, useEffect, useState } from "react";
import api from "../../services";
import {useUser} from "../users";

export const BudgetContext = createContext([])

export const BudgetProvider = ({children}) => {
    const {userId, token} = useUser()
    const reqMonth = new Date().toLocaleString("en-US", { month: "long" })
    const monthString = reqMonth[0].toUpperCase() + reqMonth.slice(1).toLowerCase()
    const [budgetCreateSuccess, setBudgetCreateSuccess] = useState(Boolean)
    const [budgetDeleteSuccess, setBudgetDeleteSuccess] = useState(Boolean)
    const [budgets, setBudgets] = useState([])

    useEffect(() => {
        if (token !== ""){
            api.get("budget", {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            }).then((res) => {
                setBudgets(res.data)
            })
        }
    },[setBudgetCreateSuccess,setBudgetDeleteSuccess])

    const createBudget = (data) => {
        let budgetInfos = {
            "userId": userId,
            "name": monthString,
            "data": {data}
        }
        api.post("budget", budgetInfos).
            then((res) => {
                if (res.status === 201){
                    setBudgetCreateSuccess(true)
                }
        })
    }

    const deleteBudget = (data) => {
        api.delete(`budget/${data}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then((res) => {
            if (res.status === 200) {
                setBudgetDeleteSuccess(true)
            }
        }).catch((_) => {
            setBudgetDeleteSuccess(false)
        })
    }

    return (
        <BudgetContext.Provider
            value={{budgets, budgetCreateSuccess, budgetDeleteSuccess,createBudget,deleteBudget}} >
            {children}
        </BudgetContext.Provider>
    )

}

export const useBudget = () => useContext(BudgetContext)