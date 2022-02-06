import Swal from "sweetalert2"

export async function fireAlert(error){
    await Swal.fire({
      title: error,
      confirmButtonColor: "#3085d6",
    })
}

export async function fireConfirm(){
    const res = await Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    })
    return res
}