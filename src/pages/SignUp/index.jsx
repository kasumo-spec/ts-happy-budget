import { ContainerSignup, ButtonForm, ContainerSVG } from "./styles";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { useHistory } from "react-router-dom";
import { useUser } from "../../providers/users";
import { FormInput, ImageContainer, Container } from "./styles";
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

const SignUp = () => {
  const { createUser } = useUser();

  const history = useHistory();

  const schema = yup.object().shape({
    email: yup.string().email("E-mail inválido").required("Insira um e-mail"),
    password: yup
      .string()
      .min(6, "Mínimo de 6 caracteres")

      .required("Insira uma senha"),
    passwordChecked: yup
      .string()
      .oneOf([yup.ref("password")], "Senhas diferentes")
      .required("Insira uma senha"),
    name: yup
      .string()
      .required("Insira um nome")
      .max(16, "Máximo de 16 caracteres"),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const handleForm = (data) => {
    createUser(data);
    reset();
    history.push("/login");
  };

  return (
    <>
      <Container>
        <ContainerSignup>
          <h1>Cadastro</h1>

          <form onSubmit={handleSubmit(handleForm)}>
            <FormInput
              margin="dense"
              variant="outlined"
              placeholder="Digite o nome de usuário"
              size="small"
              color="primary"
              {...register("name")}
              error={!!errors.name}
              helperText={errors.name?.message}
            />

            <FormInput
              margin="dense"
              variant="outlined"
              placeholder="Digite seu e-mail"
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
              placeholder="Digite sua senha"
              size="small"
              color="primary"
              {...register("password")}
              error={!!errors.password}
              helperText={errors.password?.message}
            />

            <FormInput
              type="password"
              margin="dense"
              variant="outlined"
              placeholder="Confirme sua senha"
              size="small"
              color="primary"
              {...register("passwordChecked")}
              error={!!errors.passwordChecked}
              helperText={errors.passwordChecked?.message}
            />
            <p className="redirectMessage">
              Ja é cadastrado? Faça seu login
              <a href="/login"> aqui.</a>
            </p>

            <ButtonForm type="submit">Cadastrar</ButtonForm>
          </form>
        </ContainerSignup>
        <ImageContainer>
          <Lottie options={lottieOptions} />
        </ImageContainer>
      </Container>

      <ContainerSVG>
        <svg
          width="449"
          height="446"
          viewBox="0 0 349 346"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="top"
        >
          <path
            d="M349.668 344.426C340.044 306.26 330.493 268.093 312.618 276.456C294.817 284.818 268.765 339.708 259.389 332.952C250.087 326.195 257.463 257.79 252.843 230.439C248.15 203.16 231.462 216.934 226.472 210.524C221.482 204.113 228.264 177.447 208.111 182.062C187.959 186.677 140.873 222.429 124.507 222.844C108.214 223.259 122.64 188.191 134.615 163.312C146.517 138.434 156.041 123.744 142.651 118.373C129.262 113.001 93.0323 117.019 85.6246 108.595C78.2172 100.243 99.7047 79.4493 101.707 66.2287C103.783 53.008 86.3006 47.2887 66.1018 37.679C45.903 28.0694 22.9881 14.6417 -0.000143764 1.14208L348.54 3.27894e-05L349.668 344.426Z"
            fill="#29E0E8"
          />
        </svg>

        <svg
          width="450"
          height="432"
          viewBox="0 0 290 272"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="bottom"
        >
          <path
            d="M-1.76847 2.26561C11.6091 9.70141 25.0473 17.1367 31.3934 38.9094C37.7391 60.625 37.0537 96.7346 51.583 88.9085C66.1127 81.1395 95.8566 29.3776 107.747 24.7713C119.638 20.165 113.614 62.6576 117.205 80.3959C120.795 98.1342 133.998 91.0611 152.594 84.5741C171.129 78.0876 195.118 72.1296 203.054 80.465C210.929 88.8009 202.812 111.43 201.419 126.751C200.026 142.072 205.477 150.084 208.636 159.142C211.855 168.2 212.842 178.304 221.201 186.464C229.498 194.569 245.226 200.672 249.595 209.664C253.904 218.656 246.914 230.593 251.601 241.525C256.288 252.514 272.713 262.496 289.138 272.479L0.369324 274.744L-1.76847 2.26561Z"
            fill="#29E0E8"
          />
        </svg>
      </ContainerSVG>
    </>
  );
};

export default SignUp;
