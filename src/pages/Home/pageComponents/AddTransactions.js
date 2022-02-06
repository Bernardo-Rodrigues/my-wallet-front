import { AddTrasactionsElement } from "../styles";
import Button from "./Button";

export default function AddTransactions(){
    return(
        <AddTrasactionsElement>
            <Button type={"entry"}/>
            <Button type={"output"}/>
        </AddTrasactionsElement>
    )
}