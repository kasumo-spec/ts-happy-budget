import Routes from "./routes";
// import Aside from "./components/Aside";
import { GlobalStyles } from "./styles/global";
import Header from "./components/Header";
import { BarChartComponent, PieChartComponent } from "./components/Chart";

const App = () => {
  return (
    <div className="App">
      <Header />
      {/* <Aside /> */}
      <Routes />
      <PieChartComponent />
      <BarChartComponent />
      <GlobalStyles />
    </div>
  );
};

export default App;
