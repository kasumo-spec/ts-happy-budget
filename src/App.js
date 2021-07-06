import Routes from "./routes";
// import Aside from "./components/Aside";
import { GlobalStyles } from "./styles/global";
import Header from "./components/Header";

const App = () => {
  return (
    <div className="App">
      <Header />
      {/* <Aside /> */}
      <Routes />
      <GlobalStyles />
    </div>
  );
};

export default App;
