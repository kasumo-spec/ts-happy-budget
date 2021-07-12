import { UserProvider } from "./users";
import { BudgetProvider } from "./budget";
import { IncomeProvider } from "./income";
import { DebitProvider } from "./debts";
import { NotificationsProvider } from "./notifications";

const Providers = ({ children }) => {
  return (
    <NotificationsProvider>
      <UserProvider>
        <BudgetProvider>
          <IncomeProvider>
            <DebitProvider>
              {children}
            </DebitProvider>
          </IncomeProvider>
        </BudgetProvider>
      </UserProvider>
    </NotificationsProvider>
  );
};

export default Providers;
