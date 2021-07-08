import {UserProvider} from "./users";
import {BudgetProvider} from "./budget";
import {IncomeProvider} from "./income";
import {DebitProvider} from "./debts";


const Providers = ({children}) => {
    return (
        <BudgetProvider>
            <UserProvider>
                <IncomeProvider>
                    <DebitProvider>
                        {children}
                    </DebitProvider>
                </IncomeProvider>
            </UserProvider>
        </BudgetProvider>
    )
}

export default Providers