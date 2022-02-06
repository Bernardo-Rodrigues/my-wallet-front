import { AddCircleOutline, RemoveCircleOutline } from "react-ionicons";
import { useNavigate } from "react-router";
import { ButtonElement } from "../styles";

export default function Button({type}){
    const navigate = useNavigate()
    const style = {"color": "#FFF","height": "28px","width": "28px"}
    const Icon = type === "entry" 
    ?   <AddCircleOutline style={style}/>
    :   <RemoveCircleOutline style={style}/>

    return(
        <ButtonElement onClick={()=> navigate(`/${type}`)}>
            {Icon}
            <span>Nova<br/>{type === "entry" ? "entrada" : "saída"}</span>
        </ButtonElement>
    )  
}