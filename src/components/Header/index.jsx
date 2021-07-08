import { ButtonsWrapper, HeaderContainer } from "./styles";
import Logo from "../../assets/svg/logo-clean.png";
import { useHistory, useLocation } from "react-router";
import Button from "../Button";
import { Link } from "react-router-dom";
import { useUser } from "../../providers/users";

const Header = () => {
  const { pathname } = useLocation();
  const history = useHistory();
  const { token, setToken } = useUser();

  const handleLocation = (location) => {
    if (location === "login") {
      history.push("/login");
    } else if (location === "signup") {
      history.push("/signup");
    }
  };

  const logOff = () => {
    localStorage.clear();
    setToken("");
    history.push("/");
  };

  return (
    <HeaderContainer location={pathname}>
      <Link to="/">
        <img src={Logo} alt="happybudget" />
      </Link>
      <ButtonsWrapper location={pathname}>
        {!token ? (
          <>
            <Button
              whiteSchema={pathname === "/login" ? true : false}
              className="btb-login"
              onClickFunc={() => handleLocation("login")}
            >
              Login
            </Button>
            <Button
              whiteSchema={pathname === "/signup" ? true : false}
              className="btb-signup"
              onClickFunc={() => handleLocation("signup")}
            >
              Cadastro
            </Button>
          </>
        ) : (
          <Button onClickFunc={logOff}>Sair</Button>
        )}
      </ButtonsWrapper>
    </HeaderContainer>
  );
};

export default Header;
