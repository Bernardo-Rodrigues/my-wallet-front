import { useNavigate } from "react-router-dom";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { ThreeDots } from 'react-loader-spinner';
import { useState } from "react";
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

  function handleSubmit(e) {
    e.preventDefault();

    setIsLoading(true);

    api.user
    .signIn({ ...formData })
        .then((response) => {
            setIsLoading(false)
            navigate("/")
            console.log(response)
        })
        .catch(() => {
            setIsLoading(false)
            alert('Erro, tente novamente')
        })
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