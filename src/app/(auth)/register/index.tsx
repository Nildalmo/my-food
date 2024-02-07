import { Input } from "../../../components/Input";
import {
  FormBox,
  AuthTitle,
  AuthSubtitle,
  AuthButton,
  AuthFormDivider,
  AuthLink,
} from "../../../styles/auth.style";
import { Text } from "react-native";

export default function Register() {
  return (
    <FormBox>
      <AuthTitle>Login</AuthTitle>
      <AuthSubtitle>Seja bem-vindo de volta</AuthSubtitle>
      <Input label="Nome:" placeholder="digite seu nome..." />
      <Input label="Email:" placeholder="digite seu email..." />
      <Input label="Senha:" placeholder="digite sua senha..." />
      <Input
        label="Confirme senha:"
        placeholder="digite sua senha novamente..."
      />

      <AuthButton>
        <Text style={{ textAlign:"center", color: "#fff" }}>Cadastrar</Text>
      </AuthButton>
      <AuthFormDivider />
      <Text style={{ textAlign: "center" }}>
        Já possui uma conta? <AuthLink href="/">Faça login</AuthLink>
      </Text>
    </FormBox>
  );
}
