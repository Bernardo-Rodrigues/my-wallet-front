import Container from "../../components/Container";
import { Button, Form, Input } from "../../components/FormComponents";
import { Header } from "./styles";
import { ThreeDots } from "react-loader-spinner";
import { useContext, useState } from "react";
import useApi from "../../hooks/useApi";
import { useLocation, useNavigate } from "react-router";
import { UserContext } from "../../context/user";
import { EditTransactionContext } from "../../context/transaction";
import { useEffect } from "react/cjs/react.development";

export default function NewTransaction(){
    const api = useApi()
    const navigate = useNavigate()
    const  pathname  = useLocation().pathname.replace("/", "")
    const { user } = useContext(UserContext)
    const { editTransaction, setEditTransaction } = useContext(EditTransactionContext)
    const [ formData, setFormData ] = useState({value:"", desc:""})
    const [ isLoading, setIsLoading ] = useState(false);
    const [ title, setTitle] = useState("")
    const [ buttontext, setButtontext] = useState("")

    useEffect(()=>{
        if(pathname === "edit") {
            setFormData(editTransaction)
            if(editTransaction.type === "entry"){
                setTitle("Editar entrada")
                setButtontext("Atualizar entrada")
            }else{
                setTitle("Editar saída") 
                setButtontext("Atualizar saída")
            }
        }else{
            if(pathname === "entry"){
                setTitle("Nova entrada") 
                setButtontext("Salvar entrada")
            }else{
                setTitle("Nova saída") 
                setButtontext("Salvar saída")
            }
        }
        //eslint-disable-next-line
    },[])
    
    function handleChange(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }
    
    async function handleSubmit(e) {
        e.preventDefault();
        setIsLoading(true);
        try {
            const header = { headers: { Authorization: `Bearer ${user.token}` }}
            const {value, desc } = formData
            const type = pathname === "edit" ? editTransaction.type : pathname
            const data = {value, desc, type}

            if(pathname === "edit") await api.transactions.updateTransaction(data, header, editTransaction._id)
            else {
                await api.transactions.registerTransaction(data, header)
            }

            setIsLoading(false);
            setEditTransaction({ value: "", desc: "", type:"", _id: "" })
            navigate("/");
        } catch (error) {
            setIsLoading(false);
            console.log((error.response))
        }
    }

    return(
        <Container>
            <Header>{title}</Header>
            <Form onSubmit={handleSubmit}>
                <Input
                    type="number"
                    placeholder="Valor"
                    name="value"
                    onChange={handleChange}
                    value={formData.value}
                    disabled={isLoading}
                    max="100000"
                    required
                />
                <Input
                    type="text"
                    placeholder="Descrição"
                    name="desc"
                    onChange={handleChange}
                    value={formData.desc}
                    disabled={isLoading}
                    maxLength="16"
                    required
                />

                <Button type="submit" disabled={isLoading}>
                {
                    isLoading
                    ? <ThreeDots type="ThreeDots" color="#FFFFFF" height={50} width={50} />
                    : buttontext
                }
                </Button>
            </Form>
        </Container>
    )
} 