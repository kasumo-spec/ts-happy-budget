import {UserProvider} from "./users";
import {BudgetProvider} from "./budget";
import {IncomeProvider} from "./income";


const Providers = ({children}) => {
    return (
        <BudgetProvider>
            <UserProvider>
                <IncomeProvider>
                    {children}
                </IncomeProvider>
            </UserProvider>
        </BudgetProvider>
    )
}

export default Providers