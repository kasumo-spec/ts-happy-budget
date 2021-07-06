import {UserProvider} from "./users";
import {BudgetProvider} from "./budget";
import {IncomeProvider} from "./income";
import {DebtProvider} from "./debts";


const Providers = ({children}) => {
    return (
        <BudgetProvider>
            <UserProvider>
                <IncomeProvider>
                    <DebtProvider>
                        {children}
                    </DebtProvider>
                </IncomeProvider>
            </UserProvider>
        </BudgetProvider>
    )
}

export default Providers