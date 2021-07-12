import { UserProvider } from "./users";
import { BudgetProvider } from "./budget";
import { IncomeProvider } from "./income";
import { DebitProvider } from "./debts";
import { NotificationsProvider } from "./notifications";

const Providers = ({ children }) => {
  return (
    <UserProvider>
      <BudgetProvider>
        <IncomeProvider>
          <DebitProvider>
            <NotificationsProvider>{children}</NotificationsProvider>
          </DebitProvider>
        </IncomeProvider>
      </BudgetProvider>
    </UserProvider>
  );
};

export default Providers;
