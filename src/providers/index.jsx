import { UserProvider } from "./users";
import { BudgetProvider } from "./budget";
import { IncomeProvider } from "./income";
import { DebitProvider } from "./debts";

const Providers = ({ children }) => {
  return (
    <UserProvider>
      <BudgetProvider>
        <IncomeProvider>
          <DebitProvider>{children}</DebitProvider>
        </IncomeProvider>
      </BudgetProvider>
    </UserProvider>
  );
};

export default Providers;
