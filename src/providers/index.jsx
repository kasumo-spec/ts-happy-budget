import {UserProvider} from "./users";
import {BudgetProvider} from "./budget";


const Providers = ({children}) => {
    return (
        <BudgetProvider>
            <UserProvider>
                {children}
            </UserProvider>
        </BudgetProvider>
    )
}

export default Providers