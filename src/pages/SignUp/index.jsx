import { ContainerSignup } from "./styles";
import { TextField } from "@material-ui/core";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "../../components/Button";
import { useHistory } from "react-router-dom";
import { useUser } from "../../providers/users";


const SignUp = () => {

  const { createUser } = useUser();

  const history = useHistory();

  const schema = yup.object().shape({
      email: yup.string().email("E-mail inválido").required("Insira um e-mail"),
      password: yup.string().min(6, "Mínimo de 6 dígitos").required("Insira uma senha"),
      passwordChecked: yup.string().oneOf([yup.ref("password")],"Senhas diferentes").required("Insira uma senha"),
      name: yup.string().required("Insira um nome")
  });

  const {register, handleSubmit, reset, formState: {errors}} = useForm({resolver : yupResolver(schema)});

  const handleForm = (data) => {
    createUser(data);
    reset();
    history.push("/login");
  }

  return (
    <ContainerSignup>
      <h1>Cadastro</h1>

      <form onSubmit={handleSubmit(handleForm)}>
        <TextField 
          margin="normal"
          variant="outlined"
          label="Digite seu nome de usuário"
          size="small"
          color="primary"
          {...register("name")}
          error={!!errors.name}
          helperText={errors.name?.message}
        />

        <TextField 
          margin="normal"
          variant="outlined"
          label="Digite seu e-mail"
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
          label="Digite sua senha"
          size="small"
          color="primary"
          {...register("password")}
          error={!!errors.password}
          helperText={errors.password?.message}
        />

        <TextField 
          type="password"
          margin="normal"
          variant="outlined"
          label="Confirme sua senha"
          size="small"
          color="primary"
          {...register("passwordChecked")}
          error={!!errors.passwordChecked}
          helperText={errors.passwordChecked?.message}
        />  
        <p>
          Ja é cadastrado? Faça seu login 
          <a href="/login"> aqui.</a>
        </p>

        <Button type="submit">Cadastrar</Button>
      </form>

    </ContainerSignup>
  );
};

export default SignUp;
