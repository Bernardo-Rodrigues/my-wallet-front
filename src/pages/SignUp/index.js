import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { ThreeDots } from 'react-loader-spinner';
import useApi from "../../hooks/useApi";
import { Container, Form, Input, Button, StyledLink, MyWalletTitle } from "../../components/FormComponents";

export default function SignUp() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: '', email: '', password: '', passwordConfirm: '' });
  const [isLoading, setIsLoading] = useState(false);
  const api = useApi()

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);

    try {
      await api.user.signUp(formData)
      setIsLoading(false);
      navigate("/signin");
    } catch (error) {
      setIsLoading(false);
      alert((error.response.data))
    }
  }

  return (
    <Container>
      <MyWalletTitle>MyWallet</MyWalletTitle>

      <Form onSubmit={handleSubmit}>
        <Input
        type="text"
        placeholder="Nome"
        name="name"
        onChange={handleChange}
        value={formData.name}
        disabled={isLoading}
        required    
        />
        <Input
          type="email"
          placeholder="E-mail"
          name="email"
          onChange={handleChange}
          value={formData.email}
          disabled={isLoading}
          required
        />
        <Input
          type="password"
          placeholder="Senha"
          name="password"
          onChange={handleChange}
          value={formData.password}
          disabled={isLoading}
          required
        />
        <Input
          type="password"
          placeholder="Confirme a senha"
          name="passwordConfirm"
          onChange={handleChange}
          value={formData.passwordConfirm}
          disabled={isLoading}
          required
        />
        <Button type="submit" disabled={isLoading}>
          {
            isLoading
              ? <ThreeDots type="ThreeDots" color="#FFFFFF" height={50} width={50} />
              : "Cadastrar"
          }
        </Button>
      </Form>

      <StyledLink to="/">
        Já tem uma conta? Entre agora!
      </StyledLink>
    </Container>
  );
}