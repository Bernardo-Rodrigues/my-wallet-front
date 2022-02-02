import Container from "../../components/Container";
import { Button, Form, Input } from "../../components/FormComponents";
import { Header } from "./styles";
import { ThreeDots } from "react-loader-spinner";
import { useState } from "react";
import useApi from "../../hooks/useApi";
import { useLocation, useNavigate } from "react-router";

export default function NewTransaction(){
    const  pathname  = useLocation().pathname.replace("/", "")
    const [formData, setFormData] = useState({ value: '', desc: '' })
    const [isLoading, setIsLoading] = useState(false);
    const api = useApi()
    const navigate = useNavigate()
    const user = JSON.parse(localStorage.getItem("User"))

    function handleChange(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      }
    
      async function handleSubmit(e) {
        e.preventDefault();
        setIsLoading(true);
        const header = { headers: { Authorization: `Bearer ${user.token}` }}
        try {
            const res = await api.transactions.registerTransaction({...formData, type:pathname}, header)
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
            <Header>Nova {pathname === "entry" ? "entrada" : "saída"}</Header>
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
                    : `Salvar ${pathname === "entry" ? "entrada" : "saída"}`
                }
                </Button>
            </Form>
        </Container>
    )
}