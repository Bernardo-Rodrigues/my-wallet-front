import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { ThreeDots } from 'react-loader-spinner';
import useApi from "../../hooks/useApi";
import { Form, Input, Button, StyledLink, MyWalletTitle } from "../../components/FormComponents";
import Container from "../../components/Container";

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
      return alert("Passwords must be equal")
    }

    try {
      const res = await api.test.test()
      console.log(res)
      setIsLoading(false);
      navigate("/signin");
    } catch (error) {
      setIsLoading(false);
      alert((error.response.data))
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