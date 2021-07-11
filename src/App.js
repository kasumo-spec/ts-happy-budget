import Routes from "./routes";
import Aside from "./components/Aside";
import { GlobalStyles } from "./styles/global";
import Header from "./components/Header";
import { useUser } from "./providers/users";

const App = () => {
  const { token } = useUser();

  return (
    <div className="App">
      <Header />
      {token && <Aside />}

      <Routes />
      <GlobalStyles />
    </div>
  );
};

export default App;
