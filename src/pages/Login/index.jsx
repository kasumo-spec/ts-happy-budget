import { ContainerLogin } from "./styles";
import Button from "../../components/Button";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import { useHistory } from "react-router-dom";
import { TextField } from "@material-ui/core";
import { useUser } from "../../providers/users";

const Login = () => {

  const history = useHistory();

  const { loginUser, token } = useUser();

  const schema = yup.object().shape({
    email: yup.string().email("e-mail inválido.").required("Digite um e-mail."),
    password: yup.string().min(6, "Mínimo de 6 dígitos.").required("Digite uma senha.")
  })

  const {register, handleSubmit, reset, formState: { errors}} = useForm({resolver: yupResolver(schema)});

  const handleForm = (data) => {
    loginUser(data);
    reset();
    token && history.push("/dashboard")
  }

  return (
    <ContainerLogin>
      <h1>Login</h1>
      <form onSubmit={handleSubmit(handleForm)}>
        <TextField 
          margin="normal"
          variant="outlined"
          label="Digite seu e-mail."
          size="small"
          color="primary"
          {...register("email")}
          error={!!errors.email}
          helperText={errors.email?.message}
        />

        <TextField 
          type="password"
          margin="normal"
          variant="outlined"
          label="Digite sua senha."
          size="small"
          color="primary"
          {...register("password")}
          error={!!errors.password}
          helperText={errors.password?.message}
        />

      <p>
        Não é cadastrado? Faça o seu cadastro 
        <a href="/signup"> aqui.</a>
      </p>

      <Button type="submit">Login</Button>

      </form>

    </ContainerLogin>
  );
}
export default Login;
