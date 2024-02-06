import { Input } from "../../components/Input";
import { FormBox, AuthTitle, AuthSubtitle, AuthFormDivider, AuthButton } from "../styles/auth.style";
import { Text } from "react-native";

export default function Login() {
  return (
    <FormBox>
      <AuthTitle>Login</AuthTitle>
      <AuthSubtitle></AuthSubtitle>
      <Input label="Email:" placeholder="digite seu email..." />
      <Input label="Senha:" placeholder="digite sua senha..." />
      <AuthFormDivider /> 
      <AuthButton>
        <Text style={{ textAlign: "center", color: "#fff" }}>Entrar</Text>
        </AuthButton>="
    </FormBox>
  );
}
