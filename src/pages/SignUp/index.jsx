import { ContainerSignup, ButtonForm } from "./styles";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useHistory } from "react-router-dom";
import { useUser } from "../../providers/users";
import { FormInput } from "../Login/styles";


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
        <p>
          Ja é cadastrado? Faça seu login 
          <a href="/login"> aqui.</a>
        </p>

        <ButtonForm type="submit">Cadastrar</ButtonForm>
      </form>

    </ContainerSignup>
  );
};

export default SignUp;
