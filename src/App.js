import Routes from "./routes";
import Aside from "./components/Aside";
import { GlobalStyles } from "./styles/global";
import Header from "./components/Header";
import { PieChartComponent } from "./components/Chart";
import { ComposedChartComponent } from "./components/Chart/areaChart";
import { useUser } from "./providers/users";

const App = () => {
  const { loginSucess } = useUser();
  return (
    <div className="App">
      <Header />
      {loginSucess && <Aside />}
      <Routes />
      <PieChartComponent />
      <ComposedChartComponent />
      <GlobalStyles />
    </div>
  );
};

export default App;
