import {
  Container,
  ContainerForm,
  FormInput,
  ButtonForm,
  ImageContainer,
  ContainerSVG,
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
    <>
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
              placeholder="Digite seu e-mail."
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
      <ContainerSVG>
        <svg
          width="503"
          height="483"
          viewBox="0 0 303 353"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="top"
        >
          <path
            d="M302.291 1.97677C293.828 18.1104 285.364 34.3176 261.131 41.6648C236.96 49.0124 196.955 47.5732 205.386 65.3627C213.754 83.1518 270.62 120.17 275.527 134.699C280.434 149.227 233.444 141.193 213.727 145.259C194.01 149.324 201.628 165.489 208.507 188.199C215.387 210.835 221.59 240.089 212.221 249.594C202.852 259.026 177.91 248.781 160.955 246.83C144 244.88 135.03 251.37 124.939 255.057C114.847 258.818 103.634 259.848 94.4513 269.869C85.3323 279.817 78.3067 298.83 68.2693 303.989C58.2325 309.075 45.1201 300.379 32.9278 305.892C20.6722 311.404 9.33608 331.198 -2.00002 350.992L0.297485 0L302.291 1.97677Z"
            fill="#29E0E8"
          />
        </svg>

        <svg
          width="346"
          height="394"
          viewBox="0 0 246 294"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="bottom"
        >
          <path
            d="M0.281852 293.64C7.88954 280.115 15.4974 266.529 37.4331 260.303C59.3114 254.078 95.575 255.151 87.8646 240.297C80.2116 225.442 28.527 194.659 24.0234 182.52C19.5198 170.382 62.1396 176.95 79.9943 173.485C97.849 170.019 90.8813 156.521 84.5581 137.545C78.2348 118.63 72.4989 94.177 80.9538 86.1949C89.4085 78.2743 112.054 86.7634 127.429 88.34C142.804 89.9166 150.908 84.4576 160.04 81.3404C169.172 78.1616 179.331 77.2631 187.615 68.8496C195.841 60.4976 202.135 44.5689 211.212 40.2203C220.289 35.9333 232.207 43.165 243.236 38.5134C254.322 33.862 264.52 17.2657 274.717 0.669424L273.999 294.309L0.281852 293.64Z"
            fill="#29E0E8"
          />
        </svg>
      </ContainerSVG>
    </>
  );
};
export default Login;
