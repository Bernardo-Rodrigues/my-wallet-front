import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { ThreeDots } from 'react-loader-spinner';
import useApi from "../../hooks/useApi";
import { Container, Form, Input, Button, StyledLink, MyWalletTitle } from "../../components/FormComponents";

export default function SignIn() {
  const [formData, setFormData] = useState({ email: '', password: '' })
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const api = useApi()

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);

    try {
      const res = await api.user.signIn(formData)
      localStorage.setItem("User", JSON.stringify({token:res.data.token, name:res.data.name}))
      setIsLoading(false);
      navigate("/");
    } catch (error) {
      setIsLoading(false);
      alert((error.response.data))
    }
  }

  return (
    <Container>
      <MyWalletTitle>My Wallet</MyWalletTitle>

      <Form onSubmit={handleSubmit}>
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

        <Button type="submit" disabled={isLoading}>
          {
            isLoading
              ? <ThreeDots type="ThreeDots" color="#FFFFFF" height={50} width={50} />
              : "Entrar"
          }
        </Button>
      </Form>

      <StyledLink to="/signup">
        Primeira vez? Cadastre-se!
      </StyledLink>
    </Container>
  );
}