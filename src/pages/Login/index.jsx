import {
  Container,
  ContainerForm,
  FormInput,
  ButtonForm,
  ImageContainer,
} from "./styles";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useHistory } from "react-router-dom";
import { useUser } from "../../providers/users";
import animationData from "../../assets/lotties/login.json";
import Lottie from "react-lottie";
const lottieOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const Login = () => {
  const history = useHistory();

  const { loginUser, token } = useUser();

  const schema = yup.object().shape({
    email: yup.string().email("e-mail inválido.").required("Digite um e-mail."),
    password: yup
      .string()
      .min(6, "Mínimo de 6 dígitos.")
      .required("Digite uma senha."),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const handleForm = (data) => {
    loginUser(data);
    reset();
    history.push("/dashboard");
  };

  return (
    <Container>
      <ContainerForm>
        <h1>Login</h1>
        <form onSubmit={handleSubmit(handleForm)}>
          <FormInput
            margin="dense"
            variant="outlined"
            placeholder="Digite seu e-mail."
            size="small"
            color="primary"
            {...register("email")}
            error={!!errors.email}
            helperText={errors.email?.message}
          />

          <FormInput
            type="password"
            margin="dense"
            variant="outlined"
            placeholder="Digite sua senha."
            size="small"
            color="primary"
            {...register("password")}
            error={!!errors.password}
            helperText={errors.password?.message}
          />
          <div>
            <p className="redirectMessage">
              Não é cadastrado? Faça o seu cadastro
              <a href="/signup"> aqui.</a>
            </p>

            <ButtonForm type="submit">Login</ButtonForm>
          </div>
        </form>
      </ContainerForm>
      <ImageContainer>
        <Lottie options={lottieOptions} />
      </ImageContainer>
    </Container>
  );
};
export default Login;
