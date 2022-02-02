import Container from "../../components/Container";
import { Button, Form, Input } from "../../components/FormComponents";
import { Header } from "./styles";
import { ThreeDots } from "react-loader-spinner";
import { useState } from "react";
import useApi from "../../hooks/useApi";
import { useNavigate } from "react-router";

export default function Entry(){
    const [formData, setFormData] = useState({ value: '', desc: '' })
    const [isLoading, setIsLoading] = useState(false);
    const api = useApi()
    const navigate = useNavigate()

    function handleChange(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      }
    
      async function handleSubmit(e) {
        e.preventDefault();
        setIsLoading(true);
        try {
            const res = await api.transactions.registerEntry(formData)
            console.log(res.data)
            setIsLoading(false);
            navigate("/");
          } catch (error) {
            setIsLoading(false);
            alert((error.response.data))
          }
      }

    return(
        <Container>
            <Header>Nova entrada</Header>
            <Form onSubmit={handleSubmit}>
                <Input
                    type="text"
                    placeholder="Valor"
                    name="value"
                    onChange={handleChange}
                    value={formData.value}
                    disabled={isLoading}
                    required
                />
                <Input
                    type="text"
                    placeholder="Descrição"
                    name="desc"
                    onChange={handleChange}
                    value={formData.desc}
                    disabled={isLoading}
                    required
                />

                <Button type="submit" disabled={isLoading}>
                {
                    isLoading
                    ? <ThreeDots type="ThreeDots" color="#FFFFFF" height={50} width={50} />
                    : "Salvar entrada"
                }
                </Button>
            </Form>
        </Container>
    )
}