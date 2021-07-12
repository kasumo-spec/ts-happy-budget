import { UserProvider } from "./users";
import { BudgetProvider } from "./budget";
import { IncomeProvider } from "./income";
import { DebitProvider } from "./debts";
import { NotificationsProvider } from "./notifications";

const Providers = ({ children }) => {
  return (
    <IncomeProvider>
      <DebitProvider>
        <BudgetProvider>
          <UserProvider>
            <NotificationsProvider>{children}</NotificationsProvider>
          </UserProvider>
        </BudgetProvider>
      </DebitProvider>
    </IncomeProvider>
  );
};

export default Providers;
