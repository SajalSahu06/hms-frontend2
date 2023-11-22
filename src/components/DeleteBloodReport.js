import axios from "axios";
import { useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';



export default function DeleteBloodReport() {

    const { id } = useParams();
    function getBloodReports() {
        axios.delete("https://backend-of-hms.onrender.com/bloodreport/deleteBlood/" + id).then(function () {
            toast.success("Blood Report details deleted", { theme: 'colored' });
            alert("Blood report details deleted")
            window.location = "/blood";
        }).catch((err) => {
            alert(err)
        })

    }

    getBloodReports()
    return (
        <h1>  </h1>
    )

}

