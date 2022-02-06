export default function setTexts(pathname, editTransaction, formData){
    let title, buttonText
    let updateFormData = formData

    if(pathname === "edit") {
        updateFormData = editTransaction
        if(editTransaction.type === "entry"){
            title = "Editar entrada"
            buttonText = "Atualizar entrada"
        }else{
            title = "Editar saída"
            buttonText = "Atualizar saída"
        }
    }else{
        if(pathname === "entry"){
            title = "Nova entrada"
            buttonText = "Salvar entrada"
        }else{
            title = "Nova saída"
            buttonText = "Salvar saída"
        }
    }

    return [title, buttonText, updateFormData]
}