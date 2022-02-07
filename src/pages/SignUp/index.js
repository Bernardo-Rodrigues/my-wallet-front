import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { ThreeDots } from 'react-loader-spinner';
import useApi from "../../hooks/useApi";
import { Form, Input, Button, StyledLink, MyWalletTitle } from "../../components/FormComponents";
import Container from "../../components/Container";
import { fireAlert } from "../../utils/alerts";

export default function SignUp() {
  const navigate = useNavigate();
  const api = useApi()
  const [formData, setFormData] = useState({ username: '', email: '', password: '', passwordConfirm: '' });
  const [isLoading, setIsLoading] = useState(false);
  
  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }
  
  async function handleSubmit(e) {
    e.preventDefault();

    if(formData.password !== formData.passwordConfirm) {
      setIsLoading(false);
      return await fireAlert("Passwords must be the same")
    }

    try {
      const { username, email, password } = formData
      await api.user.signUp({ username, email, password })
      setIsLoading(false);
      navigate("/signin");
    } catch (error) {
      setIsLoading(false);
       fireAlert((error.response.data))
    }
  }

  return (
    <Container center>
      <MyWalletTitle>MyWallet</MyWalletTitle>

      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Nome"
          name="username"
          onChange={handleChange}
          value={formData.username}
          disabled={isLoading}
          maxLength="20"
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

      <StyledLink to="/signin">
        Já tem uma conta? Entre agora!
      </StyledLink>
    </Container>
  );
}